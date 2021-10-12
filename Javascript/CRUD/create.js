function addUser() {
    var user = captureData ();
    // step 1: w Ajax
    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if (sendInfo.readyState == 4 && sendInfo.status==201) {
            console.log("User Added Successfully");
        }
    }
    sendInfo.open("POST","http://localhost:3000/users");
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user));
    // step 2: w Fetch
}

function captureData() {
    var user = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        email : document.getElementById("email").value
    }
    console.log(user)

    return user;
}