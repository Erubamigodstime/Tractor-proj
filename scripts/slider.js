let firstIndex = 0;
function slider() {
    setTimeout(slider, 1500);    
    let photo;
    const img = document.querySelectorAll('#sl');
    for (photo = 0; photo  < img.length;photo ++) {
        img[photo].style.display="none";        
    }
    firstIndex++
    if (firstIndex > img.length) {
        firstIndex = 1
    }
    img[firstIndex -1].style.display="block";
}

slider();