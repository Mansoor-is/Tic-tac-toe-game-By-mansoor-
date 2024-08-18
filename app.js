let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#RESET")
let turn=true; //player1 or player2
let ngame=document.querySelector("#ngame")
let mg=document.querySelector(".mgs")
let text=document.querySelector("#wtext")
const winp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

//reset button
const enable=()=>{
    for(let i of boxes){
        i.disabled=false; 
        i.innerText="";       
    }
}   
const rese=()=>{
    let turn=true;  
    mg.classList.add("hide")
    enable()
}
//full game 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerText="X"
            turn=false;
        }else{
        box.innerText="O"
        turn=true;}
        box.disabled=true;
        winner();
    })})
let db=()=>{
    for(let i of boxes){
        i.disabled=true;        
    }
}

let showwinner=(pa)=>{
    text.innerText=`Congratulation , Winner is ${pa}`
    mg.classList.remove("hide")
    db();

    }
let showdraw=()=>{
    text.innerText=`Draw`
    mg.classList.remove("hide")
    db();
}
let winner = () => {
    let isDraw = true;

    // Check for a winning combination
    for (let p of winp) {
        let val1 = boxes[p[0]].innerText;
        let val2 = boxes[p[1]].innerText;
        let val3 = boxes[p[2]].innerText;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("Winner:", val1);
                showwinner(val1);
                return; // Stop further checking if we have a winner
            }
        }
    }

    // Check if all boxes are filled for a draw
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false; // If any box is empty, it's not a draw yet
            break;
        }
    }

    // If no winner and all boxes are filled, it's a draw
    if (isDraw) {
        console.log("It's a draw");
        showdraw();
    }
};

ngame.addEventListener("click",rese)
reset.addEventListener("click",rese)
