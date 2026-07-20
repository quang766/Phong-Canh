function changeImage(img){

    document.getElementById("mainImage").src = img.src;

    document.getElementById("caption").innerHTML = img.alt;

}