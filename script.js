
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Dark/Light Theme";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "10px";
toggleBtn.style.right = "10px";
toggleBtn.style.padding = "10px";
toggleBtn.style.zIndex = "1000";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
