import"./logAllInteractions-7c4f95cf.js";import"./fps-meter-db9f2547.js";import{b as r}from"./blockFor-149404f6.js";function i(t){requestAnimationFrame(()=>{setTimeout(t,100)})}i(()=>{const t=document.querySelector("score-keeper"),e=t.button;function n(o){requestAnimationFrame(()=>{setTimeout(o,0)})}e.addEventListener("click",()=>{t.incrementAndUpdateUI(),n(()=>{r(1e3)})})});
