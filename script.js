const textInput = document.getElementById("text-input");
const charCount = document.getElementById ("char-count")

let num = 0;
textInput.addEventListener("input", () => {
  
  ++num
  charCount.textContent = `Character Count: ${textInput.value.length}/50`
  if (textInput.value.length >= 50) {
    charCount.style.color = "red";
     textInput.value = textInput.value.slice(0, 50);
  }
})