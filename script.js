const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {

    document.querySelector(".container").innerHTML = `
        <h1>❤️ Thank You, Soniya ❤️</h1>

        <img src="photo2.jpg" class="photo">

        <p class="quote">
        "From today and for every tomorrow,
        I promise to cherish your smile,
        respect your heart,
        and love you with all that I am."
        </p>

        <h2>I Love You Forever 🌹</h2>
    `;

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");
        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=(Math.random()*4+3)+"s";

        document.body.appendChild(heart);
    }

});
