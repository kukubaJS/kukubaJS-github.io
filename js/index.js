const body = document.body;
const btn = document.querySelectorAll('.button')[0];
const second = document.querySelector('.second')

btn.addEventListener('mouseenter', () => {
	body.classList.add('hover');
});

btn.addEventListener('mouseleave', () => {
	body.classList.remove('hover');
});

const feliz = document.querySelector('.feliz')
const ano_novo = document.querySelector('.ano_novo')
const bg = document.querySelector('.bg')
const canva = document.getElementById("canvas");

btn.addEventListener('click',function(){
  this.style.opacity = 0
  bg.style.opacity = 0

  setTimeout(()=>{
    second.style.display = 'block'
    init();
   
    setTimeout(()=>{
      second.style.opacity = 0
      setTimeout(()=>{
        feliz.style.display = 'block'
        ano_novo.style.opacity = 1
        ano_novo.style.display = 'flex'
        setTimeout(()=>{
          canva.style.opacity = 1
        },10000)
      },3000)
    },25000)
  },3000)
  setTimeout(()=>{
    
    console.log(2)
    
    
  },4000)
})
