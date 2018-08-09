var randomnumber = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber);


var dotPosition = document.getElementsByClassName('innerSquare');
console.log(dotPosition);
// debugger;

if (randomnumber ==1) {
  dotPosition[4].className = "innerSquare dot";
}

if (randomnumber ==2) {
  dotPosition[0].className = "innerSquare dot";
  dotPosition[8].className = "innerSquare dot";
}

if (randomnumber ==3) {
  dotPosition[0].className = "innerSquare dot";
  dotPosition[8].className = "innerSquare dot";
  dotPosition[4].className = "innerSquare dot";
}
if (randomnumber ==4) {
  dotPosition[0].className = "innerSquare dot";
  dotPosition[2].className = "innerSquare dot";
  dotPosition[6].className = "innerSquare dot";
  dotPosition[8].className = "innerSquare dot";
}
if (randomnumber ==5) {
  dotPosition[0].className = "innerSquare dot";
  dotPosition[2].className = "innerSquare dot";
  dotPosition[6].className = "innerSquare dot";
  dotPosition[8].className = "innerSquare dot";
  dotPosition[4].className = "innerSquare dot";
}
if (randomnumber ==6) {
  dotPosition[0].className = "innerSquare dot";
  dotPosition[2].className = "innerSquare dot";
  dotPosition[3].className = "innerSquare dot";
  dotPosition[5].className = "innerSquare dot";
  dotPosition[6].className = "innerSquare dot";
  dotPosition[8].className = "innerSquare dot";
}
