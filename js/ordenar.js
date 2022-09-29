//Creamos un nuevo Objeto
var Orden  = new Object();

//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
	var btncalc = document.getElementById('mostrar')
	btncalc.addEventListener('click', createObject);

}


function createObject(){
    Orden.precioS1  = getSizePrice(form);
    Orden.lista = listar(form);
    Orden.precioT = updatePizzaTotal(form);
    Orden.comentario = document.getElementById('comments').value;
    mostrar(Orden);
}


function mostrar(obj){
    var info = document.getElementById('costo');

    tblBook += "<table class=\"bookinfo\">\n";
    tblBook += "<thead>\n\t</tr>\n";
    tblBook += "\t\t<th>Descripción</th>\n";
    tblBook += "\t\t<th>Precio</th>\n";
    tblBook += "\t</tr>\n</thead>\n";
    tblBook += "<tbody>\n";
    tblBook += "\t<tr>\n";
    tblBook += "\t\t<td>" + getSizePrice(document.frmOrden) + "</td>\n";
    for(var i = 0, len = obj.lista.length; i<len; i++){
        tblBook += "\t\t<td>" + book.lista[i].value + "</td>\n";
    }
    tblBook += "\t\t<td>" + book.editorial + "</td>\n";
    tblBook += "\t\t<td>" + book.edicion + "</td>\n";
    tblBook += "\t\t<td>" + book.pais + "</td>\n";
    tblBook += "\t\t</tr>\n</tbody>\n";
    tblBook += "</table>\n";
    info.innerHTML = tblBook;
}

function init(){
    //var showinfo = document.getElementById("mostrar");

    createObject(document.frmOrden);
}

function listar(form){
    var val = document.getElementsByTagName('checkbox');
    var list;
    for(var i= 0, len = val.length; i<len; i++)
    if(val[i].checked == true){
        list[i] = val[i];
    }
}

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
    
    
    

function mostrarcomen(){
	document.getElementById("comments").style.display = 'block';
}
