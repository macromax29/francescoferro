
document.querySelectorAll('.photo').forEach(btn=>btn.addEventListener('click',()=>{const lb=document.getElementById('lightbox');if(!lb)return;lb.querySelector('img').src=btn.dataset.src;lb.hidden=false;document.body.style.overflow='hidden';}));
const lb=document.getElementById('lightbox');if(lb){const close=()=>{lb.hidden=true;document.body.style.overflow='';};lb.querySelector('.close').addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});}
