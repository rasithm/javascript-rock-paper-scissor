/*document.addEventListener("readystatechange",(event){
    if(event.target.readystatechange=="complete"){
        console.log("complete")
        initApp()
    }
    else {
        console.log("not completed")
    }
})
const initApp= () => {*/


const view1 = document.querySelector("#view1")
const view2 = document.querySelector("#view2")
const h2 = document.querySelector(".h2")
const nav = document.querySelector("nav")
view1.style.display="none"
view2.style.display="flex"
// eventlisnester 
const dosomething = () => {
    alert("dosomthing")
}
nav.addEventListener("click",dosomething,false) 
h2.addEventListener("click",(event)=>{
    console.log(event.target)
    h2.textContent="rasith"
})
//}