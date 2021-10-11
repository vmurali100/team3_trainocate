function addUser (){
  var user =  captureData ();
// Step1 : with Ajax
var sendInfo = new XMLHttpRequest();
sendInfo.onreadystatechange = function (){
    if(sendInfo.readyState == 4 && sendInfo.status==201){
        console.log("User Added Successfully")
    }
}
sendInfo.open("POST","http://localhost:3000/users");
sendInfo.setRequestHeader("Content-Type","application/json");
sendInfo.send(JSON.stringify(user))
// Step2 : With Fetch 
}

function captureData (){
    var user = {
        fname : document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value
    }

    return user
}