const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
resultsDiv.style.display = "none";

const checkNumber = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (phoneRegex.test(input)) {
    displayResult(`Valid US number: ${input}`);
  } else {
    displayResult(`Invalid US number: ${input}`);
  }
};
function displayResult(message) {
  resultsDiv.textContent = message;
  resultsDiv.style.display = "block";
}

checkBtn.addEventListener("click", () => {
  checkNumber(userInput.value);
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumber(userInput.value);
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
  resultsDiv.style.display = "none";
});
