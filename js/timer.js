"use strict";!function(){function e(e){return document.querySelector('.main__timer input[name="'+e+'"]').value}function i(e,t,n,r){return e%10==1&&e%100!=11?t:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?n:r}function a(e,t,n){var r=document.querySelector(".timer__item."+e);if(r){var o=r.querySelector(".timer__item-digit"),i=r.querySelector(".timer__item-text");t<10&&(t="0"+t),o&&(o.innerText=t),i&&(i.innerText=n)}}var t=parseInt(e("year")),n=parseInt(e("month")),r=parseInt(e("date")),o=parseInt(e("hour")),u=parseInt(e("minute")),l=new Date(t,n-1,r,o,u,0),c=null;!function e(){var t=new Date,n=Math.round((l.getTime()-t.getTime())/1e3);n<=0?(null!==c&&clearInterval(c),function(){var e=document.querySelectorAll(".timer__container .timer__item"),t=document.querySelector(".timer__container .timer__end-text");e.forEach(function(e){e.style.display="none"}),t.style.display="block"}()):(null===c&&(c=setInterval(e,1e3)),function(e){var t=Math.floor(e/86400),n=e-86400*t;a("days",t,i(t,"день","дня","дней"));var r=Math.floor(n/3600);n-=3600*r,a("hours",r,i(r,"час","часа","часов"));var o=Math.floor(n/60);n-=60*o,a("minutes",o,i(o,"минута","минуты","минут")),a("seconds",n,i(n,"секунда","секунды","секунд"))}(n),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".timer__item");Array.from(e).forEach(function(e){e.style.display="flex"})}))}()}();