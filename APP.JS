let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn"); 
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => 
{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
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

const showWinner=(winner)=>{
    msg.innerText=`Cogratulations, Winner is 
    ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
// const gameDraw=()=>{

// }
const checkWinner=()=>
{
    for(let pattern of winPattern)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                showWinner(pos1Val);
            }
            // else if(pos1Val!==pos2Val && pos2Val!==pos3Val)
            // {
            //     msg.innerText="GAME DRAW PLEASE TRY AGAIN";
            //     msgContainer.classList.remove("hide");
            // }
        }
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);