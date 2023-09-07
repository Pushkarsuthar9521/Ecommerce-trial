



const cardData=[
    {
        'image':"./img/puma/shoes.png",
        'text':'Mercedes-AMG PETRONAS Maco SL 2.0 Unisex Driving Shoes',
        'price': '₹5,999'
    },
    {
        'image':"./img/cart/PUMA-Caven-2.png",
        'text':'PUMA Caven 2.0 75 Years Unisex Sneakers',
        'price': '₹7,999'
    },
    {
        'image':"./img/cart/s1.png",
        'text':'PUMA x HARRDY SANDHU SlipstreamHi Unisex Sneakers',
        'price': '₹8,999'
    },
    {
        'image':"./img/cart/s4.png",
        'text':'Caven 2.0 Unisex Sneakers',
        'price': '₹12,999'
    },
    {
        'image':"./img/cart/s5.png",
        'text':'Caven 2.0 Unisex Sneakers',
        'price': '₹1,999'
    },
    {
        'image':"./img/cart/s6.png",
        'text':'SOFTRIDE Pro Coast Unisex Running Shoes',
        'price': '₹20,999'
    },
    {
        'image':"./img/cart/s7.png",
        'text':'Cliff Unisex Sneakers',
        'price': '₹2,999'
    },
    {
        'image':"./img/cart/s8.png",
        'text':'Court Ultra 75 Years Unisex Sneakers',
        'price': '₹22,999'
    },
    {
        'image':"./img/cart/s9.png",
        'text':'sInfusion Unisex Training Shoes',
        'price': '₹6,999'
    },
    {
        'image':"./img/cart/s10.png",
        'text':'Trinity Lite Mens Sneakers',
        'price': '₹68,999'
    },
    {
        'image':"./img/cart/s11.png",
        'text':"Basket Classic 75th Anniversary Edition Men's Sneakers",
        'price': '₹45,999'
    },
    {
        'image':"./img/cart/s12.png",
        'text':'Exotek NITRO Unisex Sneakers',
        'price': '₹4,999'
    },
    {
        'image':"./img/cart/s13.png",
        'text':'MB.02 Lo Unisex Basketball Shoes',
        'price': '₹8,999'
    },
    {
        'image':"./img/cart/s14.png",
        'text':'MB.02 Lo Unisex Basketball Shoes',
        'price': '₹7,999'
    },
];



//toggle and search

let isnavOpen = false;
let issearchOpen = false;
const smnav = document.getElementById("smnav");
const togglebtn = document.getElementById("togglebtn");
const searchbox = document.getElementById("search-box");
const hidden = document.getElementById('hiddenPart');

const togglenav= ()=>{
    if(!isnavOpen){
        isnavOpen=true;
    smnav.classList.add("translate-x-0");
    smnav.classList.remove("translate-x-full");
    }
    else{
        isnavOpen=false;
        smnav.classList.add("translate-x-full");
        smnav.classList.remove("translate-x-0");
    }
}

const togglesearch= ()=>{
    if(!issearchOpen){
        issearchOpen=true;
    searchbox.classList.add("translate-y-0");
    searchbox.classList.remove("-translate-y-[50vh]");
    hidden.classList.add("hidden");
 
    }
    else{
        issearchOpen=false;
        searchbox.classList.add("-translate-y-[50vh]");
        searchbox.classList.remove("translate-y-0");
        hidden.classList.remove("hidden");
        // output='';
    }
}


// searching method

const search = (query) =>{
    query = query.toLowerCase();
    const results = [];

    for(const item of cardData){
        const itemName = item.text.toLowerCase();
        if(itemName.includes(query)){
            results.push(item);
        }
    }

    return results;

    // const search_box = document.getElementById("search-item").value.toUpperCase();
    

}


const displayResults=(results)=>{
        // const searchResults = document.getElementById('searchResults');
        let output1 ="";
        for(const result of results){
      output1 +=  `
    <!-- card 1 -->
    <div class=" w-full bg-white rounded-md p-4 border border-gray-200" id="card" >
      <div class=" flex flex-col gap-4">
        <div class=" w-full ">
          <img src="${result.image}" alt="" />
        </div>

        <!-- card-content  -->
        <div class="flex flex-col space-y-3 w-full px-1">
          <h1 class="ttext-lg">${result.text}</h1>
          <h2 class="text-base ">${result.price}</h2>
        </div>
      </div>
    </div>
   
    `
        }

        document.querySelector('.searchResults').innerHTML = output1;
}

// event listner for the input field
const searchInput = document.getElementById('search-item');
searchInput.addEventListener('input', ()=>{
    const query = searchInput.value;
    const results = search(query);
    displayResults(results);
});





// dynamic shoes randering


let output="";
for(let item of cardData){
    output+= `
    <!-- card 1 -->
    <div class=" w-full bg-white rounded-md p-4 border hover:scale-105 transition-all duration-300 border-gray-200 " id="card" >
      <div class=" flex flex-col gap-4 ">
        <div class=" w-full ">
          <img src="${item.image}" alt="" />
        </div>

        <!-- card-content  -->
        <div class="flex flex-col space-y-3 w-full px-1">
          <h1 class="ttext-lg">${item.text}</h1>
          <h2 class="text-base ">${item.price}</h2>
        </div>
      </div>
    </div>
   
    `
}




 document.querySelector('.cardContainer').innerHTML = output;





