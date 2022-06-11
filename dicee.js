function getX(){
    var x=Math.random()*6;
    x=Math.floor(x);
    x=x+1;
    return x;
}


var num1=getX();
var num2=getX();

var src1="images/dice"+num1+".png";
var src2="images/dice"+num2+".png";

document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);

var x;
if(num1>num2){
    x="⛳Player 1 wins";
}else if(num2>num1){
    x="Player 2 wins⛳";
}else{
    x="It's a draw!!!";
}
document.querySelector("h1").innerText=x;