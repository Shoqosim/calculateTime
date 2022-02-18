
const elHour = document.querySelector('.hour');
const elSecondHour = document.querySelector('.second_hour');
const elMinut = document.querySelector('.minut');
const elSecondMinut = document.querySelector('.second_minut');
const elMillisekund = document.querySelector('.millisekund');
const elSecondMillisekund = document.querySelector('.second_millisekund');
const elButton = document.querySelector('.button');
const elStopButton = document.querySelector('.stop_button');


// this function is calculate time 

function calculateTime() {

    setInterval(()=>{
        elSecondMillisekund.textContent++;
        
        if(elSecondMillisekund.textContent>8){
            
            elSecondMillisekund.textContent=0;        
        }
    },10)

    setInterval(()=>{
        elMillisekund.textContent++;

        if(elMillisekund.textContent>9){
            elMillisekund.textContent=0;
        }
    },100)

    setInterval(()=>{
        elSecondMinut.textContent++;

        if(elSecondMinut.textContent>9){
            elSecondMinut.textContent=0;
        }
    },1000)

    setInterval(()=>{
        elMinut.textContent++;

        if(elMinut.textContent>5){
            elMinut.textContent=0;
        }
    },10000)

    setInterval(()=>{
        elSecondHour.textContent++;

        if(elSecondHour.textContent>9){
            elSecondHour.textContent=0;
        }
    },60000)

    setInterval(()=>{
        elHour.textContent++;

        if(elHour.textContent>9){
            elHour.textContent=0;
        }
    },600000)
}

elButton.addEventListener('click',(evt)=>{
    calculateTime();  
})

elStopButton.addEventListener('click',(evt)=>{
  elHour.innerHTML='0'
  elSecondHour.innerHTML='0'
  elMinut.innerHTML='0'
  elSecondMinut.innerHTML='0' 
  elMillisekund.innerHTML='0'
  elSecondMillisekund.innerHTML='0'
})
