let currentLevel = 1;

function checkAnswer() {
  const input = document.getElementById("answer-input").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (currentLevel === 1) {
    if (input === "tanvi") {
      currentLevel = 2;
      document.getElementById("title").innerText = "Level 2: The Choice";
      document.getElementById("description").innerText = "Which treat is objectively superior?";
      document.getElementById("interactive-area").innerHTML = `
        <button onclick="selectOption(true)">Basque Cheesecake</button>
        <button onclick="selectOption(false)">Plain Vanilla Ice Cream</button>
      `;
      feedback.innerText = "Access Level 1 Cleared!";
    } else {
      feedback.innerText = "Access denied. Try typing your name!";
    }
  }
}

function selectOption(isCorrect) {
  const feedback = document.getElementById("feedback");
  
  if (isCorrect) {
    currentLevel = 3;
    document.getElementById("title").innerText = "Level 3: Clearance Granted";
    document.getElementById("description").innerText = "Congratulations, Tanvi! You've successfully cleared all security layers.";
    document.getElementById("interactive-area").innerHTML = `
      <div style="font-size: 1.1rem; line-height: 1.6; text-align: left; background: #0f172a; padding: 15px; border-radius: 8px;">
        🏆 <strong>Reward Unlocked:</strong><br>
        1x Exquisite Basque Cheesecake Session.<br><br>
        <em>Claimable at a time & place of your choice.</em>
      </div>
    `;
    feedback.innerText = "Mission Accomplished.";
  } else {
    feedback.innerText = "Incorrect choice. Re-evaluating decision skills...";
  }
}
