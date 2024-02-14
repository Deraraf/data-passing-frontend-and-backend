const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");

getBtn.addEventListener("click", getInfo);
postBtn.addEventListener("click", postInfo);
const baseUrl = "http://localhost:5000/";
async function getInfo(e) {
  e.preventDefault();

  const res = await fetch(baseUrl + "info/derara?key=hello", {
    method: "GET",
  });
  console.log(res);
  const data = await res.json();
  input.value = data.info;
}
async function postInfo(e) {
  e.preventDefault();
  if (input.value == "") {
    return;
  }
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ parcel: input.value }),
  });
}
