function changeImage(img) {

    console.log("Đổi ảnh");

    document.getElementById("mainImage").src = img.src;
    document.getElementById("caption").innerHTML = img.alt;
}

function pageLoaded() {

    console.log("Trang đã tải");

    let images = document.querySelectorAll(".thumbnails img");

    for (let i = 0; i < images.length; i++) {

        console.log("Thêm tabindex cho ảnh " + (i + 1));

        images[i].setAttribute("tabindex", "0");
    }
}
