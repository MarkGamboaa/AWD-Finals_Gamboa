let score = parseInt(localStorage.getItem("quizScore")) || 0;
let coins = parseInt(localStorage.getItem("gameCoins")) || score * 10;
let obtainedItems = JSON.parse(localStorage.getItem("obtainedItems")) || [];

document.getElementById("scoreDisplay").textContent = `Your last quiz score: ${score}`;
document.getElementById("currencyDisplay").textContent = `Game Coins: ${coins}`;

updateItemDisplay();

const items = [
  { name: "Magic Pencil", icon: "🖊️" },
  { name: "Golden Brain", icon: "🧠" },
  { name: "Hint Scroll", icon: "📜" },
  { name: "Time Booster", icon: "⏰" },
  { name: "XP Gem", icon: "💎" },
  { name: "Double Points", icon: "➕" },
  { name: "Secret Chest", icon: "🧰" }
];

document.getElementById("buyItemBtn").addEventListener("click", () => {
  if (coins >= 20) {
    const item = items[Math.floor(Math.random() * items.length)];
    obtainedItems.push(item);
    coins -= 20;

    localStorage.setItem("gameCoins", coins);
    localStorage.setItem("obtainedItems", JSON.stringify(obtainedItems));

    document.getElementById("currencyDisplay").textContent = `Game Coins: ${coins}`;
    updateItemDisplay();
  } else {
    showWarning("❌ Not enough coins!");
  }
});


document.getElementById("resetBtn").addEventListener("click", () => {
  localStorage.removeItem("quizScore");
  localStorage.removeItem("gameCoins");
  localStorage.removeItem("obtainedItems");
  location.reload();
});

function showWarning(message) {
  const warning = document.createElement("div");
  warning.className = "text-danger w-100 text-center mt-2";
  warning.textContent = message;
  document.getElementById("itemResult").appendChild(warning);

  setTimeout(() => warning.remove(), 2000);
}

function updateItemDisplay() {
  const container = document.getElementById("itemResult");
  container.innerHTML = "";

  obtainedItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-card";
    itemDiv.innerHTML = `
      <div class="item-icon">${item.icon}</div>
      <div class="item-name">${item.name}</div>
    `;
    container.appendChild(itemDiv);
  });
}

const badgeList = document.getElementById("badges");
const badgeThresholds = [
  { min: 5, label: "Rookie Brain", icon: "🧠", color: "primary" },
  { min: 10, label: "Quick Thinker", icon: "⚡", color: "info" },
  { min: 15, label: "Smart Scholar", icon: "🎓", color: "success" },
  { min: 20, label: "Mastermind", icon: "🧬", color: "warning" },
  { min: 25, label: "Quiz Legend", icon: "🏆", color: "danger" },
  { min: 30, label: "Hall of Fame", icon: "🌟", color: "dark" }
];

badgeThresholds.forEach(badge => {
  if (score >= badge.min) {
    const badgeEl = document.createElement("div");
    badgeEl.className = `badge-card bg-${badge.color}`;
    badgeEl.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-label">${badge.label}</div>
    `;
    badgeList.appendChild(badgeEl);
  }
});
