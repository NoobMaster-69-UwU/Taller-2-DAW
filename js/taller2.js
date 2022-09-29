//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
n = n || 2;
var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
while (str.length <= n) {
str = "0" + str;
}
var pt = str.length - n;
return str.slice(0,pt) + "." + str.slice(pt);
}
function getRadioVal(form, name) {
var radios = form.elements[name];
var val;
for (var i=0, len=radios.length; i<len; i++) {
if (radios[i].checked == true) {
val = radios[i].value;
break;
}
}
return val;
}
//Calcula el subtotal de ingredientes seleccionados
function getToppingsTotal(e) {
var form = this.form;
var val = parseFloat(form.elements['nm_extra'].value);
if ( this.checked == true ) {
val += parseFloat(this.value);
} else {
val -= parseFloat(this.value);
}
form.elements['nm_extra'].value = formatDecimal(val);
updatePizzaTotal(form);
}
//Obtiene el subtotal del valor de la pizza de acuerdo al tamaño
function getSizePrice(e) {
this.form.elements['tipo'].value = parseFloat(this.value);
updatePizzaTotal(this.form);
}
//Calcula el precio total a cancelar por la pizza tomando en cuenta
//los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
function updatePizzaTotal(form) {
var sz_tot = parseFloat(form.elements['tipo'].value);
var tops_tot = parseFloat(form.elements['nm_extra'].value);
form.elements['total'].value = formatDecimal(sz_tot + tops_tot);
}
(function() {
var form = document.getElementById('ordenForm');
var el = document.getElementById('extras');
// Determinar los ingredientes seleccionados en las casillas de verificación
var tops = el.getElementsByTagName('input');
for (var i=0, len=tops.length; i<len; i++) {
if (tops[i].type === 'checkbox') {
tops[i].onclick = getToppingsTotal;
}
}
var sz = form.elements['combo'];
for (var i=0, len=sz.length; i<len; i++) {
sz[i].onclick = getSizePrice;
}
// set sz_tot to value of selected
form.elements['tipo'].value = formatDecimal(parseFloat(getRadioVal(form, 'combo')));
updatePizzaTotal(form);
})();


function comentario(){
	var comen = document.getElementById("areacomen");

	if(comen.addEventListener){
	comen.addEventListener("click", visible, false);
	}
	else if(comen.attachEvent){
	comen.attachEvent("onclick", visible);
	}
}


