

$(function () {
  //navbar change color on scrolling
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
/* with one page site doesn't work so well  
  // Lägg till en stil i en tagg på den nuvarande hoppningssidan
    var local = window.location.href;
    var tda = $('#navbar-menu li a');
    for(var i = 0; i < tda.length;i++){
      var cd = tda.length;
        if(local.toLowerCase()==tda[i].href.toLowerCase()){
          tda[i].parentElement.className="current-menu";//如果当前地址和菜单栏的某个栏目地址相等，则用到样式current-
        }
    }
*/
});






//Canvas animation to doughnut chart
window.onload = function () {
CanvasJS.addColorSet("greenShades",
           [//colorSet Array

           "#E5CCCC",
           "#FFF3EE",
           "#CCE5CC",
           "#FFCFBB",
           "#CCE5CC"
           ]);

var chart = new CanvasJS.Chart("chartContainer", {
animationEnabled: true,
colorSet: "greenShades",
title:{
text: "A textil sorsa 2017-ben",
horizontalAlign: "left"
},
data: [{
type: "doughnut",
startAngle: 60,
//innerRadius: 60,
indexLabelFontSize: 17,
indexLabel: "{label} - #percent%",
toolTipContent: "<b>{label}:</b> {y} (#percent%)",
dataPoints: [
  { y: 57, label: "Szemét" },
  { y: 25, label: "Égető" },
  { y: 10, label: "Újrafeldolgozás" },
  { y: 8, label: "Újrahasznosítás"},
  // { y: 15, label: "Anyag"},
  // { y: 6, label: "Kiegészítők"}
]
}]
});
chart.render();

}
