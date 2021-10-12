var products;

function getDataFromServer(){
    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if (sendInfo.readyState == 4 && sendInfo.status==200) {
            console.log(JSON.parse(sendInfo.response));
            products = JSON.parse(sendInfo.response);    
            displayData();
        }
    }
    sendInfo.open("GET","http://localhost:3000/products");
    sendInfo.send();
}

function displayData(){
    products.forEach(function (product, i){
        // Creating a tr
        var myTr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = product.name;
        myTr.appendChild(td1);

        var td2 = document.createElement("td");
        td2.innerHTML = product.category;
        myTr.appendChild(td2);

        var td3 = document.createElement("td");
        td3.innerHTML = product.price;
        myTr.appendChild(td3);

        var editTd = document.createElement("td");
        var editBttn = document.createElement("button");
        editBttn.setAttribute("onclick", "editProduct("+i+")");
        editBttn.innerHTML = "EDIT";
        editTd.appendChild(editBttn);
        myTr.appendChild(editTd);

        var deleteTd = document.createElement("td");
        var deleteBttn = document.createElement("button");
        deleteBttn.setAttribute("onclick", "deleteProduct("+i+")");
        deleteBttn.innerHTML = "DELETE";
        deleteTd.appendChild(deleteBttn);
        myTr.appendChild(deleteTd);

        document.querySelector("tbody").appendChild(myTr);
    })
}

getDataFromServer();
