function editUser(i) {
  index = i;
  document.getElementById("fname").value = users[i].fname;
  document.getElementById("lname").value = users[i].lname;
  document.getElementById("email").value = users[i].email;
}

function updateUser() {
  let user = captureData();
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function () {
    if (sendInfo.readyState == 4 && sendInfo.status == 200) {
        console.log("User Updated")
    }
  };
  sendInfo.open("PUT", "http://localhost:3000/users/" + users[index].id);
  sendInfo.setRequestHeader("Content-Type", "application/json");
  sendInfo.send(JSON.stringify(user));
}
