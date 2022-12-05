/* index.js */

// 입력시 실행될 함수

function handleAdd() {
  console.log("추가");
}

// 입력(추가)버튼 선택
const addBtn = document.getElementById("addBtn");

// 입력(추가)버튼 이벤트
addBtn.addEventListener("click", () => {
  handleAdd();
});
