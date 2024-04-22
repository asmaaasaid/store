




// get  product
 getProduct();
var arrProduct = [];
 function getProduct(){
   var httpRequest = new XMLHttpRequest;
   httpRequest.open('GET','https://fakestoreapi.com/products?limit=12')
   httpRequest.send();
   httpRequest.addEventListener('readystatechange' , function(){
    if(httpRequest.readyState == 4 && httpRequest.status ==200){
      arrProduct = JSON.parse(httpRequest.response);
    //   console.log(arrProduct);
       displayProduct()
    }
   })
}

// get all product
function getAllProduct(){
    var httpRequest = new XMLHttpRequest;
    httpRequest.open('GET','https://fakestoreapi.com/products?sort=desc')
    httpRequest.send();
    httpRequest.addEventListener('readystatechange' , function(){
     if(httpRequest.readyState == 4 && httpRequest.status ==200){
       arrProduct = JSON.parse(httpRequest.response);
     //   console.log(arrProduct);
        displayProduct()
     }
    })
 }

 //  product category
 var links = document.querySelectorAll('.dropdown-item')
 for(var i=0 ; i<links.length ; i++){
    links[i].addEventListener('click' , function(e){
      console.log(e.target.text);
      var currentCategory = e.target.text;
      proCategory(currentCategory)
    })
 }
function proCategory(category){
    var httpRequest = new XMLHttpRequest;
    httpRequest.open('GET',`https://fakestoreapi.com/products/category/${category}`)
    httpRequest.send();
    httpRequest.addEventListener('readystatechange' , function(){
     if(httpRequest.readyState == 4 && httpRequest.status ==200){
       arrProduct = JSON.parse(httpRequest.response);
     //   console.log(arrProduct);
        displayProduct()
     }
    })
 }

 
// display product
function displayProduct(){
    var productContainer=``;
for(i=0 ; i<arrProduct.length ; i++){
    productContainer +=`
    <div class="col-lg-2 mb-4">
        <div class="all-product card p-2 ">
        <img src="${arrProduct[i].image}" class="w-100" alt="">
          <h5 class="card-title text-capitalize text-center">${arrProduct[i].category}</h5>
          <h5 class="card-title text-capitalize text-center">price: ${arrProduct[i].price}$</h5>
        </div>
    </div>
    `
}
document.getElementById('rowData').innerHTML=productContainer;
}

// navigation
// var navigateAbout = document.getElementById('navToAbout');
// navigateAbout.addEventListener('click' , function(){
//     // alert('as')
    
// });
function navigateAbout(){
    window.location.href='about.html';
}
function navigateHome(){
    window.location.href='index.html';
}
