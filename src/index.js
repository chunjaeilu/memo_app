/* index.js */

// 입력시 실행될 함수

function handleAdd(content = "") {
  const memoEl = document.getElementById("memo");

  // DOM 문서객체 생성
  const memoLiEl = document.getElementById("memoList");
  const liEl = document.createElement("li");
  const pEl = document.createElement("p");
  const btnRemove = document.createElement("button");
  //memo 입력값 가져오기 : .value
  // || : or, 기본값 설정하기, 입력된 value값이 없으면 매개변수 content값을 기본값으로 입력
  pEl.textContent = memoEl.value || content;

  // 입력값 없으면 return
  if (memoEl.value == "" && content == "") {
    return;
  }

  // DOM 요소에 클래스 추가하기
  liEl.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  pEl.classList.add("m-0");
  btnRemove.classList.add("btn", "btn-danger");
  // liEl.setAttribute("class", "class1 class2 class3");

  // 입력값 출력하기
  liEl.appendChild(pEl);
  liEl.appendChild(btnRemove);
  memoLiEl.appendChild(liEl);
  memoEl.value = ""; // 추가 후 입력내용 비움(초기화)

  // btnRemove 삭제기능
  btnRemove.textContent = "삭제";
  btnRemove.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
} // handleAdd();

// 입력(추가)버튼 선택
const addBtn = document.getElementById("addBtn");

// 입력(추가)버튼 이벤트
addBtn.addEventListener("click", () => {
  handleAdd();
});

// 기본데이터 추가
handleAdd("밥하기");
handleAdd("빨래하기");
handleAdd("청소하기");
handleAdd("강아지 산책 시키기");
