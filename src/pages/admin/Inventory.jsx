import React, { useState, useEffect } from "react";
import "./admin.css";

import firebase from "firebase/compat/app";
import { db, storage } from "../../firebase/firebase";

export default function Inventory() {
  const [activeTab, setActiveTab] = useState("seedlings");

  const [seedlings, setSeedlings] = useState([]);
  const [varieties, setVarieties] = useState([]);
  const [produce, setProduce] = useState([]);
  const [merch, setMerch] = useState([]);

  const [expandedSeedling, setExpandedSeedling] = useState(null);

  const [editingItem, setEditingItem] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [addMode, setAddMode] = useState(null);

  const [form, setForm] = useState({});
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadFolder, setUploadFolder] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    const seedlingsSnap = await db.collection("inventory").get();
    const varietiesSnap = await db.collection("varieties").get();
    const produceSnap = await db.collection("produce").get();
    const merchSnap = await db.collection("merch").get();

    setSeedlings(seedlingsSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setVarieties(varietiesSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setProduce(produceSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setMerch(merchSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
  }

  function getVarietiesFor(seedlingId) {
    return varieties.filter((v) => v.cropId === seedlingId);
  }

  function openEdit(item, collectionName) {
    setEditingItem({ ...item, collectionName });
    setForm({ ...item });
    setUploadFile(null);
    setUploadFolder("");
  }

  function openDelete(item, collectionName) {
    setDeleteConfirm({ ...item, collectionName });
  }

  function openAdd(collectionName, parentId = null) {
    setAddMode({ collectionName, parentId });
    setForm({});
    setUploadFile(null);
    setUploadFolder("");
  }

  async function handleUpload() {
    if (!uploadFile || !uploadFolder) return;

    const fileRef = storage.ref(`${uploadFolder}/${uploadFile.name}`);
    await fileRef.put(uploadFile);
    const url = await fileRef.getDownloadURL();

    setForm((prev) => ({ ...(prev || {}), image: url }));
  }

  function resetAllState() {
    setSeedlings([]);
    setVarieties([]);
    setProduce([]);
    setMerch([]);
  }

  async function saveEdit() {
    await db
      .collection(editingItem.collectionName)
      .doc(editingItem.id)
      .set(form, { merge: true });

    resetAllState();
    setEditingItem(null);
    loadAll();
  }

  async function confirmDelete() {
    await db
      .collection(deleteConfirm.collectionName)
      .doc(deleteConfirm.id)
      .delete();

    resetAllState();
    setDeleteConfirm(null);
    loadAll();
  }

  // ⭐ CLEAN, SAFE, CORRECT saveAdd()
  async function saveAdd() {
    const payload = { ...form };

    // ⭐ Auto-fill cropId + category for varieties
    if (addMode.collectionName === "varieties" && addMode.parentId) {
      payload.cropId = addMode.parentId;

      const parentSeedling = seedlings.find(
        (s) => s.id === addMode.parentId
      );
      if (parentSeedling) {
        payload.category = parentSeedling.category;
      }

      // ⭐ Auto-generate varietyId from name
      if (!payload.varietyId && payload.name) {
        payload.varietyId = payload.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
    }

    // ⭐ Save new item
    await db.collection(addMode.collectionName).add(payload);

    // ⭐ Reset modal + reload
    setAddMode(null);
    setForm({});
    setUploadFile(null);
    setUploadFolder("");
    loadAll();
  }

    // ⭐ Group varieties under each seedling
  const groupedVarieties = seedlings.reduce((acc, seedling) => {
    const list = varieties.filter(v => v.cropId === seedling.id);
    if (list.length > 0) {
      acc.push({
        seedling,
        varieties: list
      });
    }
    return acc;
  }, []);


  return (
    <div className="inventory-page">
      <style>{`
        .tabs-row {
          display: flex;
          border-bottom: 2px solid #ccc;
          margin-bottom: 24px;
          gap: 0;
        }
        .tab-btn {
          padding: 14px 22px;
          background: #f2f2f2;
          border: 1px solid #ccc;
          border-bottom: none;
          cursor: pointer;
          font-weight: 600;
          border-radius: 6px 6px 0 0;
          margin-right: 6px;
        }
        .tab-btn.active {
          background: white;
          border-bottom: 2px solid white;
          color: #2e7d32;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #e8f5e9;
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 16px;
        }
        .inventory-item-actions button {
          background: #2e7d32;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          margin-right: 6px;
        }
        .inventory-item-actions .delete-btn {
          background: #d32f2f;
        }
        .modal-bg {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal {
          background: white;
          padding: 24px;
          border-radius: 10px;
          width: 400px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .modal input,
        .modal select {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .variety-box {
          background: #f9f9f9;
          padding: 14px;
          border-radius: 8px;
          margin-top: 10px;
          border: 1px solid #ddd;
        }
      `}</style>

      <h1>Inventory Dashboard</h1>

      {/* TABS */}
      <div className="tabs-row">
        <button
          className={`tab-btn ${activeTab === "seedlings" ? "active" : ""}`}
          onClick={() => setActiveTab("seedlings")}
        >
          Seedlings
        </button>

        <button
          className={`tab-btn ${activeTab === "produce" ? "active" : ""}`}
          onClick={() => setActiveTab("produce")}
        >
          Produce
        </button>

        <button
          className={`tab-btn ${activeTab === "merch" ? "active" : ""}`}
          onClick={() => setActiveTab("merch")}
        >
          Merch
        </button>
      </div>

      {/* SEEDLINGS */}
      {activeTab === "seedlings" && (
        <>
          <div className="section-header">
            <span>Seedlings</span>
            <button onClick={() => openAdd("inventory")}>Add Seedling</button>
          </div>

          {/* Seedlings List */}
          {seedlings.map((item) => (
            <div key={item.id} className="inventory-item">
              <div className="inventory-item-info">
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                {item.image && <img src={item.image} alt={item.name} />}
              </div>

              <div className="inventory-item-actions">
                <button onClick={() => openEdit(item, "inventory")}>Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => openDelete(item, "inventory")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Grouped Varieties Under Each Seedling */}
          <div className="section-header" style={{ marginTop: "40px" }}>
            <span>Varieties</span>
          </div>

          {groupedVarieties.map((group) => (
            <div key={group.seedling.id} className="admin-group">
              <h2>{group.seedling.name}</h2>

              {group.varieties.map((v) => (
                <div key={v.id} className="inventory-item">
                  <div className="inventory-item-info">
                    <h4>{v.name}</h4>
                    {v.price && <p>Price: ${v.price}</p>}
                    {v.image && <img src={v.image} alt={v.name} />}
                  </div>

                  <div className="inventory-item-actions">
                    <button onClick={() => openEdit(v, "varieties")}>Edit</button>
                    <button
                      className="delete-btn"
                      onClick={() => openDelete(v, "varieties")}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              <button
                className="add-variety-btn"
                onClick={() => openAdd("varieties", group.seedling.id)}
              >
                + Add Variety
              </button>

            </div>
          ))}
        </>
      )}

      {/* PRODUCE */}
      {activeTab === "produce" && (
        <>
          <div className="section-header">
            <span>Produce</span>
            <button onClick={() => openAdd("produce")}>Add Produce</button>
          </div>

          {produce.map((item, index) => (
            <div key={`${item.id}-${index}`} className="inventory-item">
              <div className="inventory-item-info">
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                {item.image && <img src={item.image} alt={item.name} />}
              </div>

              <div className="inventory-item-actions">
                <button onClick={() => openEdit(item, "produce")}>Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => openDelete(item, "produce")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* MERCH */}
      {activeTab === "merch" && (
        <>
          <div className="section-header">
            <span>Merch</span>
            <button onClick={() => openAdd("merch")}>Add Merch</button>
          </div>

          {merch.map((item, index) => (
            <div key={`${item.id}-${index}`} className="inventory-item">
              <div className="inventory-item-info">
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                {item.image && <img src={item.image} alt={item.name} />}
              </div>

              <div className="inventory-item-actions">
                <button onClick={() => openEdit(item, "merch")}>Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => openDelete(item, "merch")}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* EDIT MODAL */}
      {editingItem && (
  <div className="modal-bg">
    <div className="modal">
      <h3>Edit {editingItem.name}</h3>

      {/* Text fields (exclude image so it doesn't get overwritten) */}
      {Object.keys(form)
        .filter((key) => key !== "image")
        .map((key, index) => (
          <input
            key={`${key}-${index}`}
            placeholder={key}
            value={form[key]}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}

      {/* Image preview */}
      {form.image && (
        <img
          src={form.image}
          alt="preview"
          style={{
            width: "100%",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        />
      )}

      {/* Upload controls */}
      <input
        type="file"
        onChange={(e) => setUploadFile(e.target.files[0] || null)}
      />

      <select
        value={uploadFolder}
        onChange={(e) => setUploadFolder(e.target.value)}
      >
        <option value="">Select folder</option>
        <option value="seedlings/main">Seedlings Main</option>
        <option value="seedlings/varieties">Seedlings Varieties</option>
        <option value="produce">Produce</option>
        <option value="merch">Merch</option>
      </select>

      <button onClick={handleUpload}>Upload Image</button>

      <button onClick={saveEdit}>Save</button>
      <button onClick={() => setEditingItem(null)}>Cancel</button>
    </div>
  </div>
)}

      {/* DELETE CONFIRM */}
      {deleteConfirm && (
        <div className="modal-bg">
          <div className="modal">
            <h3>Delete {deleteConfirm.name}</h3>
            <p>This action cannot be undone.</p>

            <button className="delete-btn" onClick={confirmDelete}>
              Confirm Delete
            </button>
            <button onClick={() => setDeleteConfirm(null)}>Cancel</button>
          </div>
        </div>
      )}

      {/* ADD MODAL */}
      {addMode && (
        <div className="modal-bg">
          <div className="modal">
            <h3>Add {addMode.collectionName}</h3>

            <input
              placeholder="name"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />

            <input
              placeholder="price"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, price: e.target.value }))
              }
            />

            <input
              placeholder="category"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
            />

            <input
              placeholder="description"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
            />

            <input
              type="file"
              onChange={(e) => setUploadFile(e.target.files[0] || null)}
            />

            <select
              value={uploadFolder}
              onChange={(e) => setUploadFolder(e.target.value)}
            >
              <option value="">Select folder</option>
              <option value="seedlings/main">Seedlings Main</option>
              <option value="seedlings/varieties">Seedlings Varieties</option>
              <option value="produce">Produce</option>
              <option value="merch">Merch</option>
            </select>

            <button onClick={handleUpload}>Upload Image</button>

            <button onClick={saveAdd}>Add</button>
            <button onClick={() => setAddMode(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
