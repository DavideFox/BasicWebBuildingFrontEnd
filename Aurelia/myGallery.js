var gallery = document.getElementsByClassName("gallery");
var counter = 0;

showImage(gallery[0]);

function showImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    var imgText = document.getElementById("imgtext");
    imgText.innerHTML = imgs.alt;
    var imgCredits = document.getElementById("imgcredits");
    imgCredits.innerHTML = imgs.getAttribute("data-credits");
    counter = parseInt(imgs.id);
}

function plusSlides(i) {
    // console.log("prima",counter);
    let n = counter + i;
    if (n >= gallery.length ) {
        counter = 0;
    } else if (n < 0) {
        counter = gallery.length - 1;
    } else {
        counter = n;
    }
    // console.log("dopo",counter);
    showImage(gallery[counter]);
}