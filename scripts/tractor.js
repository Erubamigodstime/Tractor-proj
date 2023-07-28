const hamburger = document.querySelector('#hamburger');
const navLink = document.querySelector('#navLink');

function toggleMenu() {
    navLink.classList.toggle("open");
    hamburger.classList.toggle("open");
    
}
hamburger.onclick = toggleMenu;

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

const url = "https://erubamigodstime.github.io/Tractor-proj/tractor.json";
getTractor(url);

async function getTractor(Url){
    const result  = await fetch(Url);
    const data = await result.json();	
    displayTractor(data.Tractors);
   
};
function displayTractor(tractors){
    const tractorSect = document.getElementById("tractor-sect");
    tractors.forEach(tractor => {
        let sects = document.createElement("section");
        sects.classList.add('sector');
        let textDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("tract-img");
        textDiv.classList.add("tract");
        let line = document.createElement('hr')
        let id = document.createElement("p");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let image = document.createElement('img');
        id.innerHTML = `<strong class="label"> Id: <strong/>  ${tractor.id}`;
        name.innerHTML = `<strong class="label"> Name:<strong/> ${tractor.name}`;
        price.innerHTML = `<strong class="label"> Price:<strong/> ${tractor.price}`;
        image.setAttribute('src', tractor.image);
        image.setAttribute('alt', tractor.name);
        image.setAttribute( 'width', '50');
        image.setAttribute( 'height', '150');
        image.setAttribute( 'loading', 'lazy');

        imgDiv.appendChild(image);
        imgDiv.appendChild(line);
        textDiv.appendChild(id);
        textDiv.appendChild(name);
        textDiv.appendChild(price);
        sects.appendChild(imgDiv);
        
        sects.appendChild(textDiv);
        tractorSect.appendChild(sects);



    });
}