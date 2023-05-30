// 로그인 시 팝업 구현
function showPopup() {
  var popup = document.getElementById("popup");
  popup.innerHTML = "로그인 되었습니다.";
  popup.style.display = "block";
  setTimeout(hidePopup, 3000); // 3초 후 팝업을 숨깁니다.
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

window.onload = function () {
  showPopup();
};

// search-icon 누를 시 search 텍스트 박스 display

function showSearch() {
  var x = document.getElementById("searchbox");
  const searchInput = document.getElementById("search-input");
  if (x.style.display === "none") {
    x.style.display = "block";
    searchInput.focus();
  } else {
    x.style.display = "none";
  }
}

// search 버튼 누를 시 자동 커서
const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  search.focus();
});

//드롭다운 메뉴
var menu = document.querySelector(".women");
var dropdown = menu.querySelector(".dropdown-content");

menu.addEventListener("mouseover", function() {
  dropdown.style.display = "block";
});

menu.addEventListener("mouseout", function() {
  dropdown.style.display = "none";
});