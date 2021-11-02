//STEP 4. Client-side socket connection
let socket = io('/private');
let r;
let g;
let b;

window.addEventListener('load',()=>{
    let roomName = window.prompt('Enter room name:')
    console.log()
})

socket.on('connect',()=>{
    console.log('Connected');
})

//STEP 8. listen for data form the server
socket.on('darw-data',(data)=>{
    console.log(data);
    drawObj(data);
})

// STEP 1.
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255)

    r = random(255);
    g = random(255);
    b = random(255);
}

function mouseMoved(){
    // fill(0);
    // ellipse(mouseX,mouseY,30);

    //data object
    let mousePos = {
        x: mouseX,
        y: mouseY,
        "red" : r,
        "green" : g,
        "blue" : b
    }
    // console.log(mousePos);
    //STEP 5. emit the data
    socket.emit('data',mousePos);
}

function drawObj(pos){
    fill(pos.red,pos.green,pos.blue);
    ellipse(pos.x,pos.y,30);
}