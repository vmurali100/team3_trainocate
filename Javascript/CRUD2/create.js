function addProduct() {
    var product = captureData ();
    // step 1: w Ajax
    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if (sendInfo.readyState == 4 && sendInfo.status==201) {
            console.log("Product Added Successfully");
        }
    }
    sendInfo.open("POST","http://localhost:3000/products");
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(product));
    // step 2: w Fetch
}

function captureData()
{
    var product = {
        name : document.getElementById("name").value,
        category : document.getElementById("category").value,
        price : document.getElementById("price").value
    }
    console.log(product)

    return product;
}