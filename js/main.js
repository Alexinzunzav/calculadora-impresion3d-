

// se leen los elementos form, botones y switch
const form = document.getElementById("calculadora");
form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
    
const btnCalcular = document.getElementById("calcular");

const btnComenzar = document.getElementById("btn-comenzar");
btnComenzar.addEventListener("click", (e) => {
  window.location.href = "#calculadora-section";
});

let switchCotizacion = document.getElementById(
    "flexSwitchCheckDefault"
    );

switchCotizacion.addEventListener("change", (e) => {
    if (e.target.checked) {
      btnCalcular.innerText = "Calcular y agregar";
    } else {
      btnCalcular.innerText = "Calcular";
    }
});


// ****Definición de funciones****

// guardar arr en localStorage
guardarArr = () => {
  // Se capturan los datos de la cotizacion guardados en la localstorage
  const cotizacionesJSON = JSON.stringify(cotizaciones);
  const cotizacionesLS = localStorage.setItem('CotizacionesImpresion3D', cotizacionesJSON);

}
//imprimir el nombre y el costo de la pieza a fabricar en la cotizacion
imprimirEnCotizacion = () => {
  // Se capturan los datos de la cotizacion guardados en la localstorage
  let datosCapturados = localStorage.getItem('CotizacionesImpresion3D');
  let cotizacionesArr = JSON.parse(datosCapturados);

  //Se seleccioan el ultimo obj
  const cotizacionesArrReversed = cotizacionesArr.reverse();
  let ultimaCotizacion = cotizacionesArrReversed[0];
  
  //se crean y agregan los datos a li en el html
  let cotizacionList = document.getElementById("cotizacion-list");
  let cotizacionItem = document.createElement('li');
  cotizacionItem.innerText = ultimaCotizacion.nombre + ": " +  Math.round(ultimaCotizacion.costoTotal);
  cotizacionList.append(cotizacionItem);

  let btnEliminar = document.createElement('button');
  cotizacionItem.append(btnEliminar);
  btnEliminar.innerText = "Eliminar";
  btnEliminar.onclick = () => {
    cotizacionList.removeChild(cotizacionItem);
  } 
}

//Calcular total cotizaciones
calcularTotal = () => {
  let total = 0;

  cotizaciones.forEach((resultadoCalculo) => {
    total += resultadoCalculo.costoTotal;
  });

  let totalhtml = document.getElementById("total");
  totalhtml.innerText = "Total: $" + Math.round(total);

  
}

// Calcular costo total
let calculoCostoTotal3D = () => {
  let nombre = document.getElementById("nombre").value;
  let pesoPieza = parseInt(document.getElementById("peso").value);
  let filamento3d = parseInt(document.getElementById("filamento").value);
  let tiempoImpresion = parseInt(document.getElementById("tiempo").value);
  let manoObra = parseInt(document.getElementById("mano-obra").value);
  let impresora = 299990;
  let electricidad = 144;
 

  let switchCotizacion = document.getElementById(
    "flexSwitchCheckDefault"
  ).checked;
  
  if (!switchCotizacion) {
     // calcula los datos del html
    let costoTotal = (filamento3d * pesoPieza) / 1000 + manoObra + electricidad * tiempoImpresion + impresora / 150;  

    //luego los imprime en el html
    let costohtml = document.getElementById("costo");
    costohtml.innerText = "Costo: $" + Math.round(costoTotal);
    console.log(costoTotal);
  } else {
      // calcula los datos del html
      let costoTotal = (filamento3d * pesoPieza) / 1000 + manoObra + electricidad * tiempoImpresion + impresora / 150;  

      //luego los imprime en el html
      let costohtml = document.getElementById("costo");
      costohtml.innerText = "Costo: $" + Math.round(costoTotal);
      console.log(costoTotal);

      //Se define un nuevo objeto con los datos obtenidos
      const resultadoCalculo = new cotizacionServicio3d(
        nombre,
        pesoPieza,
        filamento3d,
        tiempoImpresion,
        manoObra,
        impresora,
        electricidad,
        costoTotal
      );

      //se pushea al array
      cotizaciones.push(resultadoCalculo);
      console.log(resultadoCalculo);
       
      //se ejecuta la funcion para guardar el arr en el localStorage
      guardarArr();
      
      //se ejecuta la funcion para agregar items en cotizaciones
      imprimirEnCotizacion();

      calcularTotal();
  }
 
}






btnCalcular.onclick = () => {
  calculoCostoTotal3D();
}
