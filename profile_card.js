const createProfile = document.getElementById("createProfile");
const cards = document.getElementById("cards");

const img = document.getElementById("img");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const occupation = document.getElementById("occupation");
const bio = document.getElementById("bio");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

createProfile.onclick = function(){
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

let valid = true;
let getName = name.value.trim();
let getEmail = email.value.trim();
let getPhone = phone.value.trim();
let getOccupation = occupation.value.trim();
let getBio = bio.value.trim();

if(getName ===""){
    nameError.textContent = "Name is required";
    valid = false;
}
else if(!nameRegex.test(getName)){
    nameError.textContent = "Invalid name format";
    valid = false;
}

if(getEmail ===""){
    emailError.textContent = "Email is required";
    valid = false;
}
else if(!emailRegex.test(getEmail)){
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
}

if(getPhone ===""){
    phoneError.textContent = "Phone is required";
    valid = false;
}
else if(!phoneRegex.test(getPhone)){
    phoneError.textContent = "Please enter a valid phone number.";
    valid = false;
}
if(getOccupation ===""){
    occupationError.textContent = "Occupation is required";
    valid = false;
}
if(getBio ===""){
    bio.textContent = "No bio provided...";
}



let getImg;
if(img.files[0]) {
    getImg = URL.createObjectURL(img.files[0]);
}else{
    getImg = "default_picture.jpg";
}
if(!valid){
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
    <span class="material-symbols-outlined">
print
</span>
    </div>
`;cards.innerHTML = "";
cards.appendChild(newCard);
}



