let colorSection = document.getElementById("color-section");
const colorPicker = document.getElementById("color-picker");
const colorSelect = document.getElementById("color-select");
const colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const colorPickerValue = colorPicker.value.replace("#", "");
  const colorSelectValue = colorSelect.value;
  colorSection.innerHTML = "";
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${colorSelectValue}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors;
      console.log(colors);
      colorSection.innerHTML = "";

      for (let color of colors) {
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("color-container");

        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color.hex.value;
        colorDiv.style.height = "100%";
        colorDiv.style.width = "100%";

        const colorText = document.createElement("p");
        colorText.textContent = color.hex.value;
        colorText.classList.add("color-text");

        colorText.addEventListener("click", () => {
          navigator.clipboard.writeText(color.hex.value);
          alert(`Copied ${color.hex.value} to clipboard!`);
        });

        colorContainer.append(colorDiv, colorText);
        colorSection.appendChild(colorContainer);
      }
    });
});
