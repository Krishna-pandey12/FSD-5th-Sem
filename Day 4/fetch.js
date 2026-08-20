const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    console.log(data.products);

    data.products.map((product) => {
        document.write(product.title + "<br>");
    });
};

getProducts();



// const data=arr.map((res)=>document.write(res))   

// const getProducts=()=>{
//    const res= fetch("https://dummyjson.com/products")
//    const data = res.json()
//    console.log(data.products);
// }
// getProducts
// .then()
//  fetch("https://dummyjson.com/products")
//    .then((res)=>res.json())
//    .then((data)=>console.log(data))
//    .catch((error)=>console.log(error))

// const data=arr.map((res)=>document.write(res))   