const createBtn = document.getElementById("createBtn");

const builder = document.getElementById("builder");
const proposal = document.getElementById("proposal");

const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");
const loveLetter = document.getElementById("loveLetter");

const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");

const proposalTitle = document.getElementById("proposalTitle");
const previewLetter = document.getElementById("previewLetter");
const previewPhoto = document.getElementById("previewPhoto");

let finalPhoto = "";

createBtn.onclick = function () {

    if (
        yourName.value.trim() === "" ||
        partnerName.value.trim() === "" ||
        loveLetter.value.trim() === "" ||
        photo1.files.length === 0 ||
        photo2.files.length === 0
    ) {
        alert("Please fill all fields.");
        return;
    }

    proposalTitle.innerHTML = "Dear " + partnerName.value + " ❤️";
    previewLetter.innerHTML = loveLetter.value;

    const firstImage = URL.createObjectURL(photo1.files[0]);
    previewPhoto.src = firstImage;

    finalPhoto = URL.createObjectURL(photo2.files[0]);

    builder.classList.add("hidden");
    proposal.classList.remove("hidden");
};

const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 70);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

const yesBtn = document.getElementById("yes");

yesBtn.addEventListener("click", function () {

document.body.innerHTML = `

<div style="
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
padding:20px;
background:linear-gradient(135deg,#ff4b7d,#7b2cbf);
font-family:Arial,sans-serif;
">

<div style="
max-width:700px;
background:rgba(255,255,255,.15);
backdrop-filter:blur(18px);
padding:35px;
border-radius:25px;
text-align:center;
color:white;
box-shadow:0 15px 35px rgba(0,0,0,.35);
">

<img src="${finalPhoto}" style="
width:200px;
height:200px;
border-radius:50%;
object-fit:cover;
border:5px solid white;
margin-bottom:20px;
">

<h1>❤️ She Said YES ❤️</h1>

<h2>${partnerName.value}</h2>

<p style="font-size:20px;line-height:1.8;white-space:pre-line;">

Today is the beginning of something beautiful.

Thank you for accepting my love.

I promise to respect you,
care for you,
support your dreams,
and stay beside you through every chapter
of our lives.

May our story always be filled with happiness,
trust,
and endless love.

❤️ Forever Starts Today ❤️

</p>

<h2>Forever Yours,<br>${yourName.value} ❤️</h2>

</div>

</div>

`;

});
