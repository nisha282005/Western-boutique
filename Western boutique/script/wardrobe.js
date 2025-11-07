function updateLook(type, selectElement) {
  const [file, label] = selectElement.value.split('|');

  if (type === 'top') {
    document.getElementById("topLayer").src = `../images/tops/${file}`;
    document.getElementById("topPreview").src = `../images/tops/${file}`;
    document.getElementById("topName").textContent = label;
  }

  if (type === 'bottom') {
    document.getElementById("bottomLayer").src = `../images/bottoms/${file}`;
    document.getElementById("bottomPreview").src = `../images/bottoms/${file}`;
    document.getElementById("bottomName").textContent = label;
  }
}
