/* index.js */

// 입력시 실행될 함수

function handleAdd() {
  const memoEl = document.getElementById("memo");

  // li 문서객체 생성
  const memoLiEl = document.getElementById("memoList");
  const liEl = document.createElement("li");
  const pEl = document.createElement("p");
  const btnRemove = document.createElement("button");

  //memo 입력값 가져오기 : .value
  pEl.textContent = memoEl.value;

  // btnRemove 삭제기능 구현
  btnRemove.textContent = "삭제";
  btnRemove.addEventListener("click", (remove) => {
    remove.target.parentElement.remove();
  });

  // DOM 요소에 클래스 추가하기
  liEl.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  pEl.classList.add("m-0");
  btnRemove.classList.add("btn", "btn-danger");

  // 입력값 출력하기
  liEl.appendChild(pEl);
  liEl.appendChild(btnRemove);
  memoLiEl.appendChild(liEl);
  memoEl.value = ""; // 추가 후 입력내용 비움(초기화)
}

// 입력(추가)버튼 선택
const addBtn = document.getElementById("addBtn");

// 입력(추가)버튼 이벤트
addBtn.addEventListener("click", () => {
  handleAdd();
});
