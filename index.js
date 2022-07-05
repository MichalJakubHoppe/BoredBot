const colors = ["blue","grey","pink","green","orange","raisin"]
const emojis=["🏃","📖","🤝","🏆"]
const activity = document.getElementById("some-activity")
const button = document.getElementById("btn")
const type = document.getElementById("some-type")
const emoji = document.getElementById("emoji")
 
 
button.addEventListener("click", function(){
  //fetching activity and type from API
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response=>response.json())
  .then(data=>{
    activity.innerHTML=`${data.activity}`
    type.innerHTML=`${data.type}`})
  //changing the title 
  document.getElementById("title").textContent = "😃 MotivatedBot 😃"
  //changing background color and emoji
  for(let i =0; i<colors.length;i++){
    let randomIndex = Math.floor(Math.random()*colors.length)
    document.body.style.background=`var(--${colors[randomIndex]})`
    let randomIndex2 = Math.floor(Math.random()*emojis.length)
    emoji.innerHTML=`${emojis[randomIndex2]}`
  }
})

  
  