document.addEventListener("DOMContentLoaded", () => {
  const inputDisplay = document.getElementById("inputDisplay");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (value === "AC") {
        currentInput = "";
        inputDisplay.value = "0";
      } else if (value === "DEL") {
        currentInput = currentInput.slice(0, -1);
        inputDisplay.value = currentInput || "0";
      } else if (value === "=") {
          try {
              currentInput = eval(currentInput).toString()
              inputDisplay.value = currentInput
          } catch (error) {
              inputDisplay.value = "Error"
              currentInput = ""
          }
        }
      else {
          currentInput += value
          inputDisplay.value = currentInput
        }
    });
  });
});
