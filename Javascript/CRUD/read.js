var users 
function getDataFromServer() {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function () {
    if (sendInfo.readyState == 4 && sendInfo.status == 200) {
      console.log(JSON.parse(sendInfo.response))
      users = JSON.parse(sendInfo.response)
      displayData()
    }
  };
  sendInfo.open("GET", "http://localhost:3000/users");
  sendInfo.send();
}

function displayData(){
    users.forEach(function (user,i){
        // Creating a tr
        var myTr = document.createElement("tr");

        var td1 = document.createElement("td")
        td1.innerHTML=user.fname;
        myTr.appendChild(td1)

        var td2 = document.createElement("td")
        td2.innerHTML=user.lname;
        myTr.appendChild(td2)

        var td3 = document.createElement("td")
        td3.innerHTML=user.email;
        myTr.appendChild(td3)

        var editTd = document.createElement("td")
        var editBttn=document.createElement("button")
        editBttn.setAttribute("onclick","editUser("+i+")")
        editBttn.innerHTML="EDIT"
        editTd.appendChild(editBttn)
        myTr.appendChild(editTd)


        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("onclick","deleteUser("+i+")")
        deleteBtn.innerHTML="DELETE"
        deleteTd.appendChild(deleteBtn)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}

getDataFromServer()