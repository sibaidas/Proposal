const builder = document.getElementById("builder");
const proposal = document.getElementById("proposal");

const generate = document.getElementById("generate");

const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");
const loveLetter = document.getElementById("loveLetter");

const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");

const title = document.getElementById("title");
const letter = document.getElementById("letter");
const mainPhoto = document.getElementById("mainPhoto");

let secondPhoto = "";

generate.addEventListener("click", () => {

    if(
        yourName.value.trim()==="" ||
        partnerName.value.trim()==="" ||
        loveLetter.value.trim()==="" ||
        photo1.files.length===0 ||
        photo2.files.length===0
    ){
        alert("Please fill all fields.");
        return;
    }

    title.innerHTML = "Dear " + partnerName.value + " ❤️";

    letter.innerHTML = loveLetter.value.replace(/\n/g,"<br>");

    const reader1 = new FileReader();
    reader1.onload = function(e){
        mainPhoto.src = e.target.result;
    }
    reader1.readAsDataURL(photo1.files[0]);

    const reader2 = new FileReader();
    reader2.onload = function(e){
        secondPhoto = e.target.result;
    }
    reader2.readAsDataURL(photo2.files[0]);

    builder.style.display="none";
    proposal.style.display="block";

    setTimeout(setButtons,200);
});

function setButtons(){

    const yesBtn=document.getElementById("yes");
    const noBtn=document.getElementById("no");

    noBtn.addEventListener("mouseover",()=>{

        const x=Math.random()*(window.innerWidth-120);
        const y=Math.random()*(window.innerHeight-70);

        noBtn.style.position="fixed";
        noBtn.style.left=x+"px";
        noBtn.style.top=y+"px";

    });

    yesBtn.addEventListener("click",()=>{

        document.body.innerHTML=`

<style>

body{
margin:0;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
background:linear-gradient(135deg,#ff4b7d,#7b2cbf);
font-family:Arial,sans-serif;
padding:20px;
color:white;
}

.card{
max-width:700px;
background:rgba(255,255,255,.15);
backdrop-filter:blur(15px);
padding:35px;
border-radius:25px;
text-align:center;
box-shadow:0 10px 30px rgba(0,0,0,.3);
animation:fade 1s;
}

img{
width:200px;
height:200px;
border-radius:50%;
object-fit:cover;
border:5px solid white;
margin-bottom:20px;
}

@keyframes fade{
from{
opacity:0;
transform:translateY(30px);
}
to{
opacity:1;
transform:translateY(0);
}
}

</style>

<div class="card">

<img src="${secondPhoto}">

<h1>❤️ She Said YES ❤️</h1>

<h2>${partnerName.value}</h2>

<p style="font-size:20px;line-height:1.8;">

Today marks the beginning of a beautiful journey.

Thank you for trusting me with your heart.

I promise to always respect you,
support your dreams,
stand beside you,
and cherish every moment we create together.

May our story be filled with laughter,
