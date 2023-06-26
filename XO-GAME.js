//change text color every .3 sec

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var myheader = document.querySelector("h1")
function changeh1(){
    cinput=getRandomColor()
    myheader.style.color = cinput;
}
setInterval("changeh1()",300)

// var cell1=document.querySelector("#one")        // if we want to work on each square alone
// cell1.addEventListener("click",game())


var sq=document.querySelectorAll("td")            //select all the squares in variable

for (let i = 0; i < sq.length; i++) {              // action givern for every square
    sq[i].addEventListener("click",game)
}
function game(){                               // manage the clicks with 'this'
        if(this.textContent == ''){
            this.textContent="X"
            this.style.color="white"
    }
    else if(this.textContent == 'X'){
            this.textContent="O"
            this.style.color="aqua"
    }
        else{
            this.textContent=""
    }
}

var res=document.querySelector("#r")                 // mange the restart button
res.addEventListener("click",function(){
    for(var i=0;i<sq.length;i++){
        sq[i].textContent=''
    }
})


