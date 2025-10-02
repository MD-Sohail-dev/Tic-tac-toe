let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let messege = document.querySelector("#msg");
let count=0;
let turnO = true;// playerX playerO

//const Array2D = [[1,2,3],[4,9,2],[4,7,0]];
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){//playerO
            box.innerText="O";
            turnO=false;
        }else{//playerX
            box.innerText="X";
            turnO=true;
        }
        count++;
        box.disabled=true;
        let isWinner = checkWinner();
         if(count===9 && !isWinner){
                messege.innerHTML="No one is winner !";
                msgContainer.classList.remove("hide");
                disableBoxes();
                 }
    })
   
});

let disableBoxes = () => {
    for(let b of boxes){
        b.disabled=true;
    }
}

let enableBoxes = () => {
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}
 
let ShowWinner = (winner)=>{
     messege.innerHTML=`Congratulation! winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
}

let checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
                 if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("winner",pos2Val);
                    ShowWinner(pos1Val);
                    return true;
                 }
        }
       
    }
    return false;
}




const resetGame = ()=>{
    turnO = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);

 
     