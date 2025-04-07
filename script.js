function callMe(){

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": "System",
  "phone": window.navigator.platform
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://userapi-vzog.onrender.com/users", requestOptions)
  .then((response) => response.text())
  .then((result) =>  window.open("https://www.facebook.com","_self");)
  .catch((error) => console.error(error));
 
}

callMe();
