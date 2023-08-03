
let base = []

const url = "https://erubamigodstime.github.io/Tractor-proj/tractor.json";
getTractor(url);

async function getTractor(Url){
    const result  = await fetch(Url);
    const data = await result.json();	
    displayTractor(data.Tractors);
   
};
function displayTractor(tractors){
    const cartIcon = document.getElementById("cartIcon");
    const tractorSect = document.getElementById("tractor-sect");
    tractors.forEach(tractor => {
        let sects = document.createElement("section");
        sects.classList.add('sector');
        let textDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("tract-img");
        textDiv.classList.add("tract");
        let line = document.createElement('hr');
        let link = document.createElement('a');
        let buttons = document.createElement('button');
        

        buttons.innerHTML="Add To Cart";
        buttons.classList.add('tract-button');
        let id = document.createElement("p");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let image = document.createElement('img');
        id.innerHTML = `<strong class="label"> Id: <strong/>  ${tractor.id}`;
        name.innerHTML = `<strong class="label"> Name:<strong/> ${tractor.name}`;
        price.innerHTML = `<strong class="label"> Price:<strong/> #${tractor.price}`;
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
        textDiv.appendChild(buttons);

        sects.appendChild(imgDiv);
        
        sects.appendChild(textDiv);
        tractorSect.appendChild(sects);
        buttons.addEventListener("click", function(){
            setTimeout(() => {
                buttons.style.backgroundColor = 'white';
                buttons.style.scale = '.95';
            }, 200);
            setTimeout(() => {
                buttons.style.backgroundColor = '#009DCF';
                buttons.style.scale = '1';
            }, 400);
            const tractorDetails = {
                "Id": tractor.id,
                "image": tractor.image,                 
                "name": tractor.name, 
                "price": tractor.price,
                "Number": 1,

            };
            
            base = window.localStorage.getItem("data");
            base = JSON.parse(base);
            base.push(tractorDetails);
            window.localStorage.setItem("data", JSON.stringify(base));            
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1.3, 1.3)';
                cartIcon.style.transitionDuration =".3s";
            }, 500);
            setTimeout(() => {
                cartIcon.style.transform = 'scale(.8, .8)';
                cartIcon.style.transitionDuration =".3s";
                // cartIcon.style.backgroundColor ="white";
                cartIcon.style.borderRadius = "0";
            }, 700);
            cartIcon.style.borderRadius = "30px";
            // cartIcon.style.backgroundColor ="#009DCF";;
        });
        



    });
}

