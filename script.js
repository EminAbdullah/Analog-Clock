

function timeFnc(){
    let now = new Date();
    let akrep = document.querySelector(".akrep");
    
    let yelkovan = document.querySelector(".yelkovan");
    let second = document.querySelector(".second");
    akrep.style =`transform: rotate(${now.getHours() *30 +((now.getMinutes() *6) /12)}deg)`;

    yelkovan.style =`transform: rotate(${now.getMinutes() *6 +((now.getSeconds() *6) /60)}deg)`;
    
    
    second.style=`transform: rotate(${now.getSeconds() *6}deg)`;
   
    
};

setInterval(timeFnc, 1000);
timeFnc();







