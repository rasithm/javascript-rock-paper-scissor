document.addEventListener("readystatechange",(event)=>{
    if(event.target.readystatechange=="complete"){
        console.log("complete")
        initApp()
    }
    else{
        console.log("not complete")
    }
})
const initApp = () =>{
let game = confirm("shall we play rock,paper and scissor")
if(game){

    // player press ok 

   let user= prompt("please enter rock,paper and scissor")
   // input convert lowercase and put in trim
   
   let player = user.toLowerCase().trim()
   console.log(player)
   console.log(player.length)
   // math function 
   let math = Math.floor(Math.random() *3)+1
   console.log(math)
   // assume value for math
   let computer = math==1 ? "rock" : math==2 ? "paper" : math==3 ? "scissor" : "unknown";
   console.log(computer)
    console.log(player)
    // if condition for prompt
    if(player){
      
        // player enter value
        if (player == "rock" || player=="scissor" || player=="paper"){
        // gives logic result
            let result = player == computer ? "tie" 
            :  player == "rock" && computer == "scissor" ? "player wins" 
            : player == "rock" && computer == "paper" ? "computer wins"
            : player == "paper" && computer == "rock"?"player wins"
            :player == "paper" && computer == "scissor"?"computer wins"
            :player == "scissor" && computer == "paper"? "player wins" 
            : player == "scissor" && computer == "rock" ? "computer wins" 
            : "gives invalid result"
            console.log("player eneter")
            alert(result)
                let playagain =confirm("play again")?
                    location.reload():
                    alert("thanks for your visit")
                
            }

        
        // player enter wrong value
        else{
            alert("please enter correct value ")
            location.reload()
        }
    }
    
    // else condition for propmt
    // player press ok and press cancel
    else {
        
        let again = confirm("play again") 
        // player play again page reload
         again ?
            location.reload()
        
        // player not intrest to play
        :
            alert("thanks for try to play")
        
    
    }
}

 // player press cancel
else {
    alert("can you play later")
    console.log("player can't play this game")
}
let fun = Math.floor(Math.random()*3)+1
console.log(game)
console.log(fun)
}
