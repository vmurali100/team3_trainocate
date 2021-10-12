function editProduct(i) {
    index = i;
    document.getElementById("name").value=products[i].name;
    document.getElementById("category").value=products[i].category;
    document.getElementById("price").value=products[i].price;
}

function updateProduct()
{
    let user = captureData();
    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if (sendInfo.readyState == 4 && sendInfo.status==200) {
            console.log("Product Updated Successfully");
        }
    }
    sendInfo.open("PUT","http://localhost:3000/products/"+products[index].id);
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user));

}