function deleteProduct(i) {
    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if (sendInfo.readyState == 4 && sendInfo.status==200) {
            console.log(JSON.parse(sendInfo.response));
            users = JSON.parse(sendInfo.response);    
            displayData();
        }
    }
    sendInfo.open("DELETE","http://localhost:3000/products/"+products[i].id);
    sendInfo.send();

}