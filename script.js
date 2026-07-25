let boxes=document.querySelectorAll(".box");
let resetButton=document.getElementById("reset-btn");
let newButton=document.getElementById("new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const EnabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
      msg.innerText= `Congratulations , Winner is ${winner}`;
      msgcontainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner=()=>{
    for(let pattern of winningpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=="" && pos1Val===pos2Val && pos2Val===pos3Val){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Player won the game");
                showWinner(pos1Val);
            }
        }
    }
}
const resetGame=()=>{
turnO=true;
EnabledBoxes();
 msgcontainer.classList.add("hide");
}
newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
