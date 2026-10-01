const form = document.getElementById("classifiedForm");

document.getElementById("searchBtn").addEventListener("click", () => alert("Search"));
document.getElementById("helpBtn").addEventListener("click", () =>
  alert("Help: Hãy chọn mục cần tìm, sau đó nhấn Search.")
);
document.getElementById("cancelBtn").addEventListener("click", () => form.reset());