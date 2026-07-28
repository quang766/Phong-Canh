function changeImage(img) {

    console.log("Hiển thị ảnh");

    document.getElementById("mainImage").src = img.src;
    document.getElementById("caption").innerHTML = img.alt;
}

function unDo() {

    console.log("Rời khỏi ảnh");

    document.getElementById("mainImage").src =
        "https://picsum.photos/id/1018/800/450";

    document.getElementById("caption").innerHTML =
        "Bầu trời đầy mây và thung lũng";
}

function pageLoaded() {

    console.log("Trang đã tải");

    let images = document.querySelectorAll(".thumbnails img");

    for (let i = 0; i < images.length; i++) {

        console.log("Ảnh " + i);

        images[i].setAttribute("tabindex", "0");
    }
}
