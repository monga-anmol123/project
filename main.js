window.onload = function(){

    let task= document.getElementById("task");

    let add = document.getElementById("addtask");

    let show = document.getElementById("list");


    add.onclick = function() {
        let li= document.createElement('li');
        let p= task.value;

        li.innerHTML = p;

        let xbtn = document.createElement('button')
        xbtn.innerText="X";
        xbtn.id="btn";

        let upbtn = document.createElement('button');

        upbtn.innerText = '\u{2B06}'; 
        
        li.appendChild(xbtn);
        li.appendChild(upbtn);

        xbtn.onclick= function (event) {
            
            console.log(event.target.parentElement);
            let li=event.target.parentElement;

            li.remove();

          }

          upbtn.onclick = function(event){
                li.parentElement.insertBefore( li, li.previousElementSibling);
          }


         show.appendChild(li);   
    }

    




}