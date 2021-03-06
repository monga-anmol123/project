let count = 0;

let p = document.querySelectorAll(".btn");
let k = document.getElementById("val");




p.forEach(function(item){
    console.log(item);
    // item.addEventListner("click" , function(){
    //     console.log("hello");
    // })

    item.addEventListener("click" , function(e){
        if(e.target.classList.contains('inc'))
            {count++;
            }
        
     if(e.target.classList.contains('dec'))
            { count--;

            }
    if(e.target.classList.contains('res'))
            {
                count=0;
            }     
    
            k.textContent = count;
    if(count<0)
        k.style.color="red";
    if(count>=0)
            k.style.color="green";
        }) ; 





});
