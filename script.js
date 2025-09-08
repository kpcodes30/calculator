const displayPanel = document.querySelector(".display-panel");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    try {
      const value = button.textContent;
      if (value === "=") {
        displayPanel.textContent = eval(displayPanel.textContent);
      } else if (value === "C") {
        displayPanel.textContent = "";
      } else {
        displayPanel.textContent += value;
      }
    } catch (error) {
      displayPanel.textContent = "Error";
    }
  });
});
