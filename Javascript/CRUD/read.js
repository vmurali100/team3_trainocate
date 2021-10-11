function getDataFromServer() {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function () {
    if (sendInfo.readyState == 4 && sendInfo.status == 200) {
      console.log(sendInfo.response)
    }
  };
  sendInfo.open("GET", "http://localhost:3000/users");
  sendInfo.send();
}

getDataFromServer()