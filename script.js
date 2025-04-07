function callMe(){
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": "john doe",
  "phone": "12345"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://userapi-vzog.onrender.com/users", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}

callMe();
