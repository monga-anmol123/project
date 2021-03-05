const col = [ " green" , "blue" , "orange" , "yellow"]; 

function selectone() {
    let v =col[Math.floor(Math.random() * col.length)]
    document.getElementById("target").style.backgroundColor = v ;
    document.getElementById("change").innerText= v;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function selectonehex() {
    let v = getRandomColor();
    document.getElementById("target").style.backgroundColor = v ;
    document.getElementById("change").innerText= v;
}

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return "RGB("+ +r + "," + +g + "," + +b + ")";
  }

function selectonesimp() {
    let v = getRandomColor();
    let p = hexToRGB(v);    
    document.getElementById("target").style.backgroundColor = v ;
    document.getElementById("change").innerText= p;
}
