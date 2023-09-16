const squre=document.querySelectorAll(".btn");
const clean= document.getElementById("clear");
const timesClicked={
    "green":0,
    "yellow":0,
    "red":0,

}
squre.forEach((items)=>{
    items.innerHTML = timesClicked[items.value];
    items.onclick=()=>{
        timesClicked[items.value] = timesClicked[items.value]+1;
        items.innerHTML = timesClicked[items.value];
    }

})

clean.onclick=()=>{
    if( ){
        
    }
    for (items in timesClicked){
    
        timesClicked[items]=0;
    }
   squre.forEach((elements)=>{
       elements.textContent = timesClicked[elements.value];

   })

}
