export function completeModule(id, mastery) {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  progress[id] = mastery;
  localStorage.setItem("progress", JSON.stringify(progress));
}

export function getProgress() {
  return JSON.parse(localStorage.getItem("progress")) || {};
}
