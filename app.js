let button = document.querySelectorAll("#btn")
let resetbnt = document.querySelector("#secbtn")
let newgame = document.querySelector("#butn")


const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let turn = true

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos0 = button[pattern[0]].innerText;
        let pos1 = button[pattern[1]].innerText;
        let pos2 = button[pattern[2]].innerText;

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0 == pos1 && pos1 == pos2){
                window.location.href="index2.html";
            }
        }
    }
}

button.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        if(turn ==true){
            btn.innerText = "X"
            turn = false
            btn.disabled = true;
        }
        else{
            btn.innerText ="O";
            turn = true;
            btn.disabled = true;
        }
        checkwinner();
    })
})

