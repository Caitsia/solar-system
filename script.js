function createStars(){
    const container = document.querySelector("body");
    for(let i=0; i < 1000; i++){
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = ".1px";
        star.style.height =".1px";

        star.style.top = Math.random()* 100 + "%";
        star.style.left = Math.random()* 100 + "%";

        container.appendChild(star);
    }
}
createStars();

    const sun = document.getElementById('theSun');
    const card = document.getElementById('infoCard');
    const closeBtn = document.getElementById('closeCard');

    sun.addEventListener('click', () => {
        card.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        card.classList.add('hidden');
    });

