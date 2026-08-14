const createProfile = document.getElementById("createProfile");
const cards = document.getElementById("cards");

const img = document.getElementById("img");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const occupation = document.getElementById("occupation");
const bio = document.getElementById("bio");

createProfile.onclick = function(){
let getImg =""
    if(img.files.length){
        getImg =  URL.createObjectURL(img.files[0]);
    }
let getName = name.value
let getEmail = email.value
let getPhone = phone.value
let getOccupation = occupation.value
let getBio = bio.value
if (name.value.trim() === "" || email.value ==="" || occupation.value === ""){
    alert("please fill out your information")
    return;
}
    const newCard = document.createElement("div")
    newCard.classList.add("profile-card")
    newCard.innerHTML = `
    <img src = "${getImg}">
    <div class = "profile-info">
    <h2>${getName}</h2>
    <h5>${getOccupation}</h5>
    <hr>
    <p>✉️ ${getEmail}</p>
    <p>📱${getPhone}</p>
    <hr>
    <p>About me:</p>
    <p><strong>${getBio}</strong></p>
    </div>
`;cards.innerHTML = "";
cards.appendChild(newCard);
}



