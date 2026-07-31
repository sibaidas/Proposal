const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {

document.body.innerHTML = `

<style>

body{
margin:0;
padding:0;
font-family:Arial,sans-serif;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
background:linear-gradient(135deg,#ff4b7d,#ff85a2);
overflow:hidden;
}

.letter{
max-width:750px;
margin:20px;
padding:35px;
background:rgba(255,255,255,.18);
backdrop-filter:blur(15px);
border-radius:25px;
color:white;
text-align:center;
box-shadow:0 0 25px rgba(255,255,255,.3);
animation:fade 1.5s ease;
}

.photo{
width:180px;
height:180px;
border-radius:50%;
object-fit:cover;
border:5px solid white;
margin-bottom:20px;
}

h1{
font-size:40px;
}

p{
font-size:20px;
line-height:1.9;
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

<div class="letter">

<img src="photo2.jpg" class="photo">

<h1>❤️ She Said YES ❤️</h1>

<p>

<b>My Dearest Soniya,</b>

<br><br>

Today will always remain one of the most beautiful days of my life.

Your "Yes" is not just an answer—
it is a beautiful beginning to a journey I hope we will walk together.

<br><br>

Thank you for trusting me with your heart.

I may not be perfect,
and I cannot promise that life will always be easy,
but I promise to always respect you,
support your dreams,
listen to you,
and stand beside you through happiness and challenges alike.

<br><br>

I want to celebrate your victories,
wipe away your tears,
laugh with you,
grow with you,
and create countless beautiful memories together.

<br><br>

Every sunrise will remind me how lucky I am,
because somewhere in this world,
there is a wonderful person named <b>Soniya Nath</b>,
who chose me.

<br><br>

Thank you for saying <b>YES</b>.

This is not the end of a proposal...

<b>It is the beginning of our beautiful story. ❤️</b>

</p>

<h2 style="margin-top:30px;">
Forever Yours,<br>
❤️ Sibai ❤️
</h2>

</div>

`;

});
