var bigPic = document.querySelector("#cup"); // 큰 이미지 가져오기
var smallPics = document.querySelectorAll(".small"); // 작은 이미지 가져옴

for (var i = 0; i < smallPics.length; i++) {
    smallPics[i].onclick = showBig;
}

function showBig() {
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
}
