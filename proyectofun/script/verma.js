let corteSeleccionado = null; // Variable para almacenar el corte seleccionado
const traerposi = [];
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data)
      resolve(data);
    }, 2500);
  });
}

function requestData() {
  getData().then((data) => {
    console.log(data);
    processData(data);
    mostrarTabla();
  });
}

function processData(data) {
  data.forEach((item) => {
    const corte = {
      id: item.id,
      imagenURL: item.imagenURL,
      tipo_corte: item.tipo_corte,
      peluquero: item.peluquero,
      preciocortesenciloo: item.preciocortesenciloo,
      preciocortepremium: item.preciocortepremium,
      duracion: item.duracion,
    };
    traerposi.push(corte);
  });
}

function mostrarTabla() {
  console.log("Mostrar tabla");
  // Puedes agregar lógica de redirección aquí, por ejemplo, redirigir a una página específica
  window.location.href = "file:///C:/Users/foron/OneDrive/Escritorio/trabajos%202023%20uni/proyectofun/lista.html";
  // O puedes mostrar/ocultar elementos en lugar de redireccionar, según tus necesidades

  // También puedes mantener el código actual relacionado con la tabla aquí si es necesario
  actualizarBotonesPaginacion();
}

function actualizarCorte() {
  // Obtener los valores actualizados del formulario
  console.log("Actualizar corte");
  const id = document.getElementById('id').value;
  const marca = document.getElementById('marca').value;
  const peluquero = document.getElementById('peluquero').value;
  const precioSencillo = document.getElementById('precioSencillo').value;
  const precioPremium = document.getElementById('precioPremium').value;
  const duracion = document.getElementById('duracion').value;

  // Actualizar el corte seleccionado con los nuevos valores
  if (corteSeleccionado) {
    corteSeleccionado.id = id;
    corteSeleccionado.tipo_corte = marca;
    corteSeleccionado.peluquero = peluquero;
    corteSeleccionado.preciocortesenciloo = precioSencillo;
    corteSeleccionado.preciocortepremium = precioPremium;
    corteSeleccionado.duracion = duracion;

    // Volver a mostrar la tabla con los datos actualizados
    mostrarTabla();
  }
}

//document.getElementById('actualizar').addEventListener('click', actualizarCorte);
//document.getElementById('volver').addEventListener('click', mostrarTabla);

// Iniciar la carga de datos al cargar la página

// requestData();

        


