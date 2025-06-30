//solar system low fedelity prototype
alert("conected orbit attempt")
var solarsystem = document.getElementById("canvas");
var context = solarsystem.getContext("2d");
class Planet{
    constructor(radius, orbitRadius, speed, color){
        this.radius = radius; //determians the size of the planet
        this.orbitRadius = orbitRadius; //determans the distance from the sun
        this.speed  = speed; // speed in which the planet orbitsthe sun
        this.color = color; // color of the prototype planet
        this.angle = 0; //angle relitive to the origin (the sun) used for calculating the planet's potition
        this.x = solarsystem.width /2 + this.orbitRadius //creates the starting x position
        this.y = solarsystem.height / 2 + this.orbitRadius //creates the starting y position
    }
    update(){
        context.clearRect(0, 0, canvas.width, canvas.height);

        this.angle += this.speed; //changes the angle of the planet's postion according to it's velocity. making it appear 
        this.x = solarsystem.width /2 + this.orbitRadius * Math.cos(this.angle);// convering angle into change in distance
        this.y = solarsystem.height / 2 + this.orbitRadius * Math.sin(this.angle);
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();

}    
}
let sun = {
    x: solarsystem.width/2,
    y: solarsystem.height/2,
    radius: 40,
    color: "yellow"
};
function drawSun(){// draws sun seperately since it does not require a change in position or orbit radius 
    context.beginPath();
    context.fillStyle = sun.color;
    context.arc(sun.x, sun.y, sun.radius, 0, 2*Math.PI, true);
    context.fill();
    context.stroke();

}
var pause = false
solarsystem.addEventListener("click", function(e){
    const rect = solarsystem.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    //checks if mouse in inside the planet
    const ex = mouseX - earth.x;
    const ey = mouseY - earth.y;
    const edistance = Math.sqrt(ex*ex + ey * ey);
    if(edistance < earth.radius){
        console.log("clicked The Earth");
        window.location.href = "earth.html"
    }
    const mcx = mouseX - mercury.x;
    const mcy = mouseY - mercury.y;
    const mcdistance = Math.sqrt(mcx*mcx + mcy*mcy);
    if(mcdistance < mercury.radius){
        console.log("clicked Mercury");
        window.location.href = "mercury.html"

    }
    const vx = mouseX - venus.x;
    const vy = mouseY - venus.y;
    const vdistance = Math.sqrt(vx*vx + vy * vy);
    if(vdistance < venus.radius){
        console.log("clicked Venus");
        window.location.href = "venus.html"

    }
    const mrx = mouseX - mars.x;
    const mry = mouseY - mars.y;
    const mrdistance = Math.sqrt(mrx*mrx + mry * mry);
    if(mrdistance < mars.radius){
        console.log("clicked Mars");
        window.location.href = "mars.html"
    }
    const jx = mouseX - jupiter.x;
    const jy = mouseY - jupiter.y;
    const jdistance = Math.sqrt(jx*jx + jy * jy);
    if(jdistance < jupiter.radius){
        console.log("clicked Jupiter");
        window.location.href = "jupiter.html"
    }
    const sx = mouseX - saturn.x;
    const sy = mouseY - saturn.y;
    const sdistance = Math.sqrt(sx*sx + sy * sy);
    if(sdistance < saturn.radius){
        console.log("clicked Saturn");
        window.location.href = "saturn.html"
    }
    const ux = mouseX - uranus.x;
    const uy = mouseY - uranus.y;
    const udistance = Math.sqrt(ux*ux + uy * uy);
    if(udistance < uranus.radius){
        console.log("clicked Uranus");
        window.location.href = "uranus.html"

    }
    const nx = mouseX - neptune.x;
    const ny = mouseY - neptune.y;
    const ndistance = Math.sqrt(nx*nx + ny * ny);
    if(ndistance < neptune.radius){
        console.log("clicked Neptune");
        window.location.href = "neptune.html"
    }
    else if(pause){
        console.log("simulation clicked!");//checks to see if the click event listiner was working
        pause = false //would resume the simulation if already paused
        console.log(pause);//checks the booleen value of pause
    }
    else{
        pause = true;//pauses the simulation by changing the booleen value
        console.log(pause);//checks the booleen value of pause

    }
});
solarsystem.addEventListener("mousemove", function(e){
    const rect = solarsystem.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    //checks if mouse in inside the planet
    const dx = mouseX - earth.x;
    const dy = mouseY - earth.y;
    const distance = Math.sqrt(dx*dx + dy * dy);
    if(distance < earth.radius){
        console.log("hovering over the earth")
    }
    
});

//adds individual attributes to each planet
var mercury =  new Planet(8, 50, 0.05, "tan");
var venus =    new Planet(11, 67, 0.02, "pink");
var earth =    new Planet(12, 100, 0.02, "teal");
var mars  =    new Planet(11, 125, 0.015, "red");
var jupiter =  new Planet(25, 250, 0.01, "gray");
var saturn  =  new Planet(20, 300, 0.012, "tan");
var uranus  =  new Planet(15, 350, 0.005, "skyblue");
var neptune =  new Planet(15, 375, 0.004, "blue");
var planets = [mercury, earth, venus, mars, jupiter, saturn, uranus, neptune]
//checks that all attributes are callable 
console.log("the earth's size is " + earth.radius + " position is " + earth.x + ", " + earth.y + ". and it's color is " + earth.color);

function orbit(){ 
    if(!pause){//continues the simulation unless paused
        for(i in planets){ //loops through each planet in an array to avoid redundant code
            planets[i].update();//updates the position of the planets
        }
    }
    drawSun(); //draws sun after update so that it's not cleared fromm the canvas in update
    for(i in planets){
        planets[i].draw(context);//draws each planet in the array 
    }

    requestAnimationFrame(orbit)//nested function to keep the orbit ongoing

};
orbit();
