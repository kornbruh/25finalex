
//登入盒

function login() {
  document.getElementById("loginOverlay").style.display = "none";
}
//訊息ID
function sendMessage() {
  const chat = document.getElementById("chat");
  const input = document.getElementById("msgInput");
  const text = input.value.trim();

  if (text === "") return;

  // 使用者訊息
  chat.innerHTML += `<div class="message user">${text}</div>`;

  // 關鍵字判斷
  if (text.includes("鼠")) {
    chat.innerHTML += `
      <div class="message bot">
        <img src="rat.jpg" width="50%">
      </div>`;
  }
  else if (text.includes("貓")) {
    chat.innerHTML += `
      <div class="message bot">
        <img src="cat.jpg" width="50%">
      </div>`;
  }
  else if (text.includes("狗")) {
    chat.innerHTML += `
      <div class="message bot">
        <img src="dog.jpg" width="50%">
      </div>`;
  }
    else if (text.includes("馬")) {
    chat.innerHTML += `
      <div class="message bot">
        <img src="horse.jpg" width="50%">
      </div>`;
  }
  else {
    chat.innerHTML += `
      <div class="message bot">沒有您尋找的圖片，梗圖機器人還在測試中＞︿＜</div>`;
  }

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
//enter輸入
const input = document.getElementById("msgInput");

if (input) {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
}
//漢堡
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
}



function logout() {
  document.getElementById("loginOverlay").style.display = "flex";
  document.getElementById("chat").innerHTML = "";
  document.getElementById("msgInput").value = "";
  document.body.classList.remove("dark");
  document.getElementById("menu").style.display = "none";
}

function goDetail() {
  location.href = "detail.html";
}

function goHome() {
  location.href = "index.html";
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("toggleSidebar");

  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    btn.textContent = "▶";
  } else {
    btn.textContent = "◀";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});