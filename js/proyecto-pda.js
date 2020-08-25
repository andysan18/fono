function Participante(nombre,correo){
    this.nombre = nombre;
    this.correo = correo;
};

function Usuario(id,nombre,correo,pass){
    this.id=id;
    this.nombre=nombre;
    this.correo=correo;
    this.pass=pass;
}

function Retroalimientacion(id,nombre_participante,puntaje,fecha,tit_lista,tit_act){
    this.id=id;
    this.nombre_participante=nombre_participante;
    this.puntaje=puntaje;
    this.fecha=fecha;
    this.tit_lista=tit_lista;
    this.tit_act=tit_act;
}

function Mensaje(id,titulo,contenido,fecha){
    this.id=id;
    this.titulo=titulo;
    this.contenido=contenido;
    this.fecha=fecha;
}

function Actividad(id,titulo,descripcion,enunciado,consonante,respuesta){
    this.id=id;
    this.titulo=titulo;
    this.descripcion=descripcion;
    this.enunciado=enunciado;
    this.consonante=consonante;
    this.respuesta=respuesta;
    this.alternativas = [];
}

Actividad.prototype.agregarAlternativa = function(alternativa,alternativa2,alternativa3){
    this.alternativas.push(alternativa);
    this.alternativas.push(alternativa2);
    this.alternativas.push(alternativa3);
}

function ListaActividades(id,titulo,descripcion,fecha){
    this.id=id;
    this.titulo=titulo;
    this.descripcion=descripcion;
    this.fecha=fecha;
}

function InsertarActividad(act){

    var lista = ["btn1","btn2","btn3","btn4"];
    lista = lista.sort(function() {return Math.random() - 0.5});
    console.log(lista)

    document.getElementById(lista[0]).style.backgroundImage = "url('alternativas/"+act.alternativas[0]+".jpg')";
    document.getElementById(lista[1]).style.backgroundImage = "url('alternativas/"+act.alternativas[1]+".jpg')";
    document.getElementById(lista[2]).style.backgroundImage = "url('alternativas/"+act.alternativas[2]+".jpg')";
    document.getElementById(lista[3]).style.backgroundImage = "url('alternativas/"+act.respuesta+".jpg')";
    document.getElementById("enunciado").innerHTML= act.enunciado;
}

var actTest = new Actividad(1,"Actividad Test","Actividad usada para testear","Selecciona la palabra que comienza con la letra P","p","perro");


function Test(){
    var alternativas = lista();
    alternativas.removeItem(actTest.respuesta);
    var resp1 = respuestaAzar(alternativas);
    alternativas.removeItem(resp1);
    var resp2 = respuestaAzar(alternativas);
    alternativas.removeItem(resp2);
    var resp3 = respuestaAzar(alternativas);
    alternativas.removeItem(resp3);

    actTest.agregarAlternativa(resp1,resp2,resp3);    

    InsertarActividad(actTest);
}

Array.prototype.removeItem = function (a) {
    for (var i = 0; i < this.length; i++) {
     if (this[i] == a) {
      for (var i2 = i; i2 < this.length - 1; i2++) {
       this[i2] = this[i2 + 1];
      }
      this.length = this.length - 1;
      return;
     }
    }
};

function comprobarRespuesta(click){
    styleClick = click.currentStyle || window.getComputedStyle(click, false);
    urlClick = styleClick.backgroundImage.slice(4, -1).replace(/"/g, "");

    document.getElementById("botonOculto").style.backgroundImage = "url('alternativas/"+actTest.respuesta+".jpg')";
    var respuesta = document.getElementById("botonOculto");
    styleRespuesta = respuesta.currentStyle || window.getComputedStyle(respuesta, false);
    urlRespuesta = styleRespuesta.backgroundImage.slice(4, -1).replace(/"/g, "");

    if(urlClick == urlRespuesta){
        document.getElementById("actividad").style.visibility = 'hidden';
        document.getElementById("respuestaBuena").style.visibility = 'visible';    
        document.getElementById("siguiente").style.visibility = 'visible';
        document.getElementById("gif").style.visibility = 'visible';
        document.getElementById('correcto').play();
    }else{
        document.getElementById("actividad").style.visibility = 'hidden';
        document.getElementById("respuestaMala").style.visibility = 'visible';
        document.getElementById("gif3").style.visibility = 'visible';
        document.getElementById('incorrecto').play(); 
    }

    console.log('Image URL accion: ' + urlClick);

    console.log('Image URL respuesta: ' + urlRespuesta);
}

function respuestaAzar(lista){
    var listado = lista;
    aleatorio = Math.floor(Math.random()*(listado.length));
    seleccion = listado[aleatorio];

    return seleccion;
}

function reintentar(){
    document.getElementById("actividad").style.visibility = 'visible';
    document.getElementById("respuestaBuena").style.visibility = 'hidden';
    document.getElementById("respuestaMala").style.visibility = 'hidden';    
    document.getElementById("gif3").style.visibility = 'hidden';
}

function lista(){
    var lista = new Array('arbol','auto','ballena','barco','casa','corona','helicoptero','perro');
    return lista;
}
