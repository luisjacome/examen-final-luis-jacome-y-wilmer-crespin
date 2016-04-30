var html="";
var local1 = { ciudad:"Guayaquil",numSalas: 5, direccion:" 9 de octubre"};
var local2 ={ ciudad:"Quito",numSalas: 8, direccion:" Parque Bicentenario"};
var local3 ={ciudad:"Playas",numSalas: 10, direccion:"km 1 y medio via data"};
var local4 ={ciudad:"Libertad",numSalas: 7, direccion:"Paseo Shoping"};
var local5 ={ciudad:"Cuenca",numSalas: 6, direccion:"avda los cuencanos"};

var local =[]; 
 local.push(local1);local.push(local2);local.push(local3);local.push(local4);local.push(local5);




for (var i=0; i < local.length; i ++)
{
listHTML = '<ul><li>' + local[i].ciudad + '<br>'+local[i].numSalas+ '<br>'+local[i].direccion+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-locales"); 
				infoDiv.innerHTML+=listHTML;
			}