//arrow toggle for sub Lists
const arrow=document.querySelectorAll(".arrow");
for(var i=0;i<arrow.length;i++){
  arrow[i].addEventListener("click",(e)=>{
    let arrowParent=e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  })
}
//to close the sidebar when i clicked the menu button.
let sidebar=document.querySelector(".sidebar");
let sidebarBtn=document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click",()=>{
  sidebar.classList.toggle("close");
})
//to Toggle between darkMode and LightMode.
let moon=document.querySelector(".bx-moon");
moon.addEventListener("click",function darkMode(){
  if(moon.classList.contains("bx-moon")){
    moon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
  }
  else{
    moon.classList.toggle("bx-moon");
    document.body.classList.toggle("dark-mode");
  }
})
function incrementWithAnimation(elementSelector, finalValue) {
  const pElement = document.querySelector(elementSelector);
  let currentValue = 0;
  const incrementAmount = 0.3; // Adjust this value to control the speed
  const frameRate = 60; // Adjust this value to control the frame rate (frames per second)
  function updateValue() {
    pElement.textContent = `${currentValue.toFixed(1)}%`;
    currentValue += incrementAmount;
    if (currentValue <= finalValue) {
      setTimeout(() => {
        x=requestAnimationFrame(updateValue);
      }, 1000 / frameRate);
    }
  }
  requestAnimationFrame(updateValue);
}
// Example: Increment the value of box1Inside to 90% with animation
incrementWithAnimation('.inside .one', 80);
incrementWithAnimation('.inside .two', 90);
incrementWithAnimation('.inside .three', 90);
incrementWithAnimation('.inside .four', 85);