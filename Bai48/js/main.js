const form = document.getElementById("registerForm");
const cancelBtn = document.getElementById("cancelBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Đăng ký thành công");
});

cancelBtn.addEventListener("click", () => form.reset());