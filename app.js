// get element
let startBtn=document.querySelector("#startBtn")
let inputuser = document.querySelector("#inputuser")
let checkBtn= document.querySelector("#checkbtn")
let chancebtn=document.querySelector("#chance")
let text=document.querySelector("#text")

// add event on startgame
startBtn.addEventListener("click" ,StartGame)

// function start game:gerftan adad random bin0 ta 100
function StartGame(){
  randomnumber =Math.floor(Math.random() * 100)
 alert(randomnumber);
}
// add event on answer
checkBtn.addEventListener("click" ,answercheck)

// meghdar chance 
let chance =5

// function answer
function answercheck(){
// value input ra dar anser gharar bede
let anser=inputuser.value

// agar chance ==0 bood in pigham namayesh bede
if(chance == 0){
    alert("I'm sorry, you don't have another chance😥");
}
// darghir insorat input khali bood in pigham namayesh bede
else if ( anser == ""){
    alert("Enter a number❌");
}

// agar adad == randomnum bood in pigham namayesh bede
else if(Number(anser)==randomnumber ){
    alert("Well done, you guessed right😍✅");
}
// agar adad < randomnum bood in pigham namayesh bede
else if(Number(anser)<randomnumber ){
    text.innerText ="Wow❌, the number is higher"
    chance--
}
// agar adad >randomnum bood in pigham namayesh bede
else if(Number(anser)>randomnumber ){
    text.innerText ="Wow❌, the number is lower"
    chance--
}

chancebtn.innerHTML= `Chance: ${chance}`



}