let tractorCart = document.getElementById('tractor-carts');
let text = document.getElementById('text');

let cart = JSON.parse(localStorage.getItem("data")) || [];
console.log(cart)



function diaplayCartItems(arrays) {
    if (arrays.length !== 0) {
        arrays.forEach(array => {
        let sects = document.createElement("section");
        sects.classList.add('sector');
        let textDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("tract-img");
        textDiv.classList.add("tract");
        let line = document.createElement('hr');
        let link = document.createElement('a');
        let btn = document.createElement('button');
        

        btn.innerHTML="Remove From Cart";
        btn.classList.add('tract-button');
        let id = document.createElement("p");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let image = document.createElement('img');
        id.innerHTML = `<strong class="label"> Id: <strong/>  ${array.Id}`;
        name.innerHTML = `<strong class="label"> Name:<strong/> ${array.name}`;
        price.innerHTML = `<strong class="label"> Price:<strong/> #${array.price}`;
        image.setAttribute('src', array.image);
        image.setAttribute('alt', array.name);
        image.setAttribute( 'width', '50');
        image.setAttribute( 'height', '150');
        image.setAttribute( 'loading', 'lazy');

        imgDiv.appendChild(image);
        imgDiv.appendChild(line);
        textDiv.appendChild(id);
        textDiv.appendChild(name);
        textDiv.appendChild(price);
        textDiv.appendChild(btn);

        sects.appendChild(imgDiv);        
        sects.appendChild(textDiv);
        tractorCart.appendChild(sects);
        btn.style.cursor ="pointer";
        btn.addEventListener("click", ()=>{
            tractorCart.removeChild(sects);            
            let arrayToFind = array;
            const index = arrays.findIndex(arr => JSON.stringify(arr) === JSON.stringify(arrayToFind));
            if (index >= 0 && index < arrays.length) {
                arrays.splice(index, 1);
                console.log(index);
            }            

            window.localStorage.setItem("data", JSON.stringify(arrays)); 
        });          
        });
       
        
        
    } 
    
    else{       
        tractorCart.innerHTML = `
        <div class="cart-text">
        <h2> Cart Is Empty</h2>
        <a href="index.html">
        <button class="indexbtn"> Back to Home</button>
        </a>
        </div>`;
        tractorCart.style.backgroundColor = '#F8F8F8';
    }
}



diaplayCartItems(cart);

// const listArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   const arrayToFind = [4, 5, 6];
  
//   const index = listArrays.findIndex(arr => JSON.stringify(arr) === JSON.stringify(arrayToFind));
  
//   if (index !== -1) {
//     console.log(`Array found at index: ${index}`);
//   } else {
//     console.log('Array not found in the list.');
//   }