



let cardData=[
    {
        'image':"./img/puma/shoes.png",
        'text':'Mercedes-AMG PETRONAS Maco SL 2.0 Unisex Driving Shoes',
        'price': '₹5,999'
    },
    {
        'image':"./img/CART/PUMA-Caven-2.png",
        'text':'PUMA Caven 2.0 75 Years Unisex Sneakers',
        'price': '₹7,999'
    },
    {
        'image':"./img/CART/s1.png",
        'text':'PUMA x HARRDY SANDHU SlipstreamHi Unisex Sneakers',
        'price': '₹8,999'
    },
    {
        'image':"./img/CART/s4.png",
        'text':'Caven 2.0 Unisex Sneakers',
        'price': '₹12,999'
    },
    {
        'image':"./img/CART/s5.png",
        'text':'Caven 2.0 Unisex Sneakers',
        'price': '₹1,999'
    },
    {
        'image':"./img/CART/s6.png",
        'text':'SOFTRIDE Pro Coast Unisex Running Shoes',
        'price': '₹20,999'
    },
    {
        'image':"./img/CART/s7.png",
        'text':'Cliff Unisex Sneakers',
        'price': '₹2,999'
    },
    {
        'image':"./img/CART/s8.png",
        'text':'Court Ultra 75 Years Unisex Sneakers',
        'price': '₹22,999'
    },
    {
        'image':"./img/CART/s9.png",
        'text':'sInfusion Unisex Training Shoes',
        'price': '₹6,999'
    },
    {
        'image':"./img/CART/s10.png",
        'text':'Trinity Lite Mens Sneakers',
        'price': '₹68,999'
    },
    {
        'image':"./img/CART/s11.png",
        'text':"Basket Classic 75th Anniversary Edition Men's Sneakers",
        'price': '₹45,999'
    },
    {
        'image':"./img/CART/s12.png",
        'text':'Exotek NITRO Unisex Sneakers',
        'price': '₹4,999'
    },
    // {
    //     'image':"./img/CART/s13.png",
    //     'text':'MB.02 Lo Unisex Basketball Shoes',
    //     'price': '₹8,999'
    // },
    // {
    //     'image':"./img/CART/s14.png",
    //     'text':'MB.02 Lo Unisex Basketball Shoes',
    //     'price': '₹7,999'
    // },
];



//toggle and search

let isnavOpen = false;
let issearchOpen = false;
const smnav = document.getElementById("smnav");
const togglebtn = document.getElementById("togglebtn");
const searchbox = document.getElementById("search-box");
const hidden = document.getElementById('hiddenPart');
const searchForm = document.getElementById('searchform');
const searchInput = document.getElementById('search-item');

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
        // searchForm.reset();
        
    }
}

// //  clear search
const clearSearch=()=>{
    togglesearch();
    displayResults(search(""));
    searchForm.reset();
}

// const handleSearch = (e) =>{
//     e.preventDefault();
//     togglesearch();
// }



// searching method

const search = (query) =>{
    query = query.toLowerCase();
    const results = [];

    for(const item of cardData){
        const itemName = item.text.toLowerCase();
        const itemPrice = item.price;
        if(itemName.includes(query) || itemPrice.includes(query)){
            results.push(item);
        }
    }

    return results;
    // const search_box = document.getElementById("search-item").value.toUpperCase();

}







const displayResults=(Data)=>{
        // const searchResults = document.getElementById('searchResults');
        let result ="";
        for(const item of Data){
      result +=  `
    
    <div class=" w-full bg-white rounded-md p-4 border cursor-pointer border-gray-200 hover:scale-105 transition-all duration-300" id="card" >
      <div class=" flex flex-col gap-4">
        <div class=" w-full ">
          <img src="${item.image}" alt="" />
        </div>
        <div class="flex flex-col space-y-3 w-full px-1">
          <h1 class="font-semibold text-lg">${item.text}</h1>
          <h2 class="text-base ">${item.price}</h2>
        </div>
      </div>
    </div>
   
    `
        }

        document.querySelector('.searchResults').innerHTML = result;
        
        // let loadMore = `
    
        // <div class=" w-full bg-white rounded-md p-4 border cursor-pointer border-gray-200" id="card" >
        //   <div class=" flex flex-col gap-4">
        //     <div class=" w-[209px] h-[209px] ">
            
        //     </div>
        //     <div class="flex flex-col space-y-3 w-full px-1">
        //         h1
        //     </div>
        //   </div>
        // </div>
       
        // `

        // document.querySelector('.searchResults').appendChild = loadMore;
}

// event listner for the input field

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    togglesearch();
})

searchInput.addEventListener('input', (e)=>{
    const input = e.target.value
    console.log('input  : ',input);
    const query = searchInput.value;
    const data = search(input);
    displayResults(data);
});





// dynamic shoes randering


// let output="";
// for(let item of cardData){
//     output+= `
//     <!-- card 1 -->
//     <div class=" w-full bg-white rounded-md p-4 border hover:scale-105 transition-all duration-300 border-gray-200 " id="card" >
//       <div class=" flex flex-col gap-4 ">
//         <div class=" w-full ">
//           <img src="${item.image}" alt="" />
//         </div>

//         <!-- card-content  -->
//         <div class="flex flex-col space-y-3 w-full px-1">
//           <h1 class="ttext-lg">${item.text}</h1>
//           <h2 class="text-base ">${item.price}</h2>
//         </div>
//       </div>
//     </div>
   
//     `
// }




// load more data from json file

const loadMoreData = async ()=>{
    try {
        
        console.log('inside try')
        const res = await fetch('./product.json')
        console.log('respose :',res)
        const data = await res.json()
        console.log('data :', data)
        
        cardData = [...cardData,...data]
        displayResults(cardData)
        const load = document.getElementById('load')
        load.classList.add('hidden')
        //     let result ="";
        //     for(const item of data){
            //   result +=  `
    
            // <div class=" w-full bg-white rounded-md p-4 border cursor-pointer border-gray-200 hover:scale-105 transition-all duration-300" id="card" >
            //   <div class=" flex flex-col gap-4">
    //     <div class=" w-full ">
    //       <img src="${item.image}" alt="" />
    //     </div>
    //     <div class="flex flex-col space-y-3 w-full px-1">
    //       <h1 class="font-semibold text-lg">${item.text}</h1>
    //       <h2 class="text-base ">${item.price}</h2>
    //     </div>
    //   </div>
    // </div>
    
    // `
    //     }
    
    //     document.querySelector('.searchResults').appendChild = result;
    
} catch (error) {
    console.error(error)
    
}
}


// on first load
displayResults(cardData);
