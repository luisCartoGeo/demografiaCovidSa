var div= document.getElementById("po-pib") 
xv= ['Guayana<br>Francesa','Surinam','Guyana','Uruguay','Paraguay','Bolivia','Ecuador','Chile','Venezuela','Perú','Argentina','Colombia','Brasil'];
ypib=[0,2884,5471,53628,35670,36572,98808,252940,482359,202014,389288,271437,1444733]; 
yv= [298682.0,586632.0,786552.0,3473730.0,7132538.0,11673021.0,17643054.0,19116201.0,28435940.0,32971854.0,45195774.0,50882891.0,212559417.0];
 yt= ['298.6K','586.6K','786.5K','3.4M','7.1M','11.6M','17.6M','19.1M','28.4M','32.9M','45.1M','50.8M','212.5M'];

var trace1 = {
  x: xv,
  y: yv,
  opacity:1,
  name:"Población<br>2020",
  type: "bar",
  text: yt.map(String),
  textposition: 'auto',
  marker: {color:['#f7fbff','#f7fbff','#d8e7f5','#d8e7f5','#b0d2e8','#b0d2e8','#73b3d8','#3d93c4','#3d93c4','#1563aa','#1563aa',
'#08306b','#08306b'],line:{color:"black",width:1}}
};
var trace2 = {
  x: xv,
  y: ypib,
  name:"PIB 2020",
  yaxis:'y2',
  position:0,
  type: "line",
  textposition: 'auto',
  marker: {color:'red',line:{color:"red",width:2}}
};

var data = [trace1,trace2];
var layout = {
    legend: {y:1.2,
             yref:'paper',
            orientation:'v',
            font: {size: 8.5}
           },
    paper_bgcolor:'rgb(255,255,255)',
    plot_bgcolor:'rgb(255,255,255)',
    xaxis: { 
    showgrid: false,
      title: 'Paises',
      titlefont: {
          size:9,
          color: 'rgb(0,0,0)'
                  }
           },
   yaxis2:{
    title: 'PIB Millones USD',
    overlaying: 'y',
    side: 'right'
  },
   yaxis: { 
         gridcolor: 'rgb(211,211,211)',
         gridwidth: 1,
        title: 'N° de habitantes',
        titlefont: {
           size:9,
           color: 'rgb(0,0,0)'
                  }
           },
title: '<b>Población - PIB 2020 </b>', 
titlefont:{size:12,color:'rgb(0,0,0)'},
font:{size:9,color:'rgb(0,0,0)'},
autosize: true,
orientation:'v',
margin: { t: 30, b: 60, l: 50,r:100, autoexpand: false}};
Plotly.newPlot('po-pib', data, layout, {displayModeBar: false,responsive: true});
window.onresize = function() {
Plotly.relayout('po-pib', {
'xaxis.autorange': true,
'yaxis.autorange': true,
'margin': { t: 30, b: 60, l: 50,r:100, autoexpand: true}
});
};