const btns=document.querySelectorAll(".question-btn");


btns.forEach((btn)=>{
 btn.addEventListener('click',function(e){
  const question = e.currentTarget.parentElement.parentElement;
  console.log(question);
  question.classList.toggle("show-text");
  question.style.transition = "all 0.3s linear";
 })
})
