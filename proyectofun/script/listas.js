const data = [
  {
    id: 1,
    imagenURL: "https://scontent.fclo7-1.fna.fbcdn.net/v/t39.30808-6/283772575_4803023089825527_1317114978276749500_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGX52SiXMgYO0_Urfww6GKpV_juvMUdTjNX-O68xR1OM0r0_ztv2ga2DIE2FKqCVI5jT_RL28_Ppfx3fDKLizf8&_nc_ohc=phd_MJHUC-YAX-GHb81&_nc_ht=scontent.fclo7-1.fna&oh=00_AfB7OP09LstbOloa7o8OlXE4_alJxuN7icZn_JktinM0JA&oe=656A4625",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "BAKI",
    preciocortesenciloo: 10000,
    preciocortepremium: 50000,
    duracion: "minutos",
    tipo_transporte: "moto",
    nombre_barberia: "barber shop"
  },
  {
    id: 2,
    imagenURL: "https://scontent.fclo7-1.fna.fbcdn.net/v/t1.6435-9/195107782_1154343445041754_3016465557201895549_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeFXPFPm9x1FnI1CyHVF-VbA1-0aRt-eY2_X7RpG355jbzzrNT6705wySJrPnq8ArKhEWb8YOrky9K35bPEH5z-o&_nc_ohc=Wlnl5TQBK9gAX_U99Zd&_nc_ht=scontent.fclo7-1.fna&oh=00_AfBBkey7k_-c4Il0P_541hmEIiX-9nTFy8_U6l3z0pwFMg&oe=658CD2E8",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "MICHAEL",
    preciocortesenciloo: 10000,
    preciocortepremium: 50000,
    duracion: "minutos",
    tipo_transporte: "moto",
    nombre_barberia: "barber shop2"
  },
  {
    id: 3,
    imagenURL: "https://scontent.fclo7-1.fna.fbcdn.net/v/t39.30808-6/405729817_317192507930893_9161036952439127011_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFmTwTIcZWZmDBLvn-5upF0uDHXbz2-JsC4MddvPb4mwA6bmPPIp40I7oM_pAVSKqWKwHMYhyD8STQUZjPdMQ7I&_nc_ohc=1NewfIypdMwAX8Z9Es-&_nc_ht=scontent.fclo7-1.fna&oh=00_AfC2F6CB9TdjbW6hpYZmDj7a1haM__4euwyePl_2rLyB6A&oe=656B0AC4",
    sexo: "hombre",
    tipo_corte: "cobie",
    peluquero: "tiago",
    preciocortesenciloo: 10000,
    preciocortepremium: 50000,
    duracion: "minutos",
    tipo_transporte: "moto",
    nombre_barberia: "barber cosmico"
  },
  {
    id: 4,
    imagenURL: "data:image/jpeg;base64,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",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "diomedez dias",
    preciocortesenciloo: 10000,
    preciocortepremium: 50000,
    duracion: "minutos",
    tipo_transporte: "moto",
    nombre_barberia: "barber mafia"
  },
  {
    id: 5,
    imagenURL: "https://scontent.fclo7-1.fna.fbcdn.net/v/t1.6435-9/128640332_3258084324319495_1731324588547633899_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEQ-0NQf1zf44Fc6yARB5eKxvDH49ymRp7G8Mfj3KZGnpO4vhpCn6u5ArTyjjefFzyqa0k3_xDbr60cN7LDjqPl&_nc_ohc=AX9i01gDDtYAX9pv68y&_nc_ht=scontent.fclo7-1.fna&oh=00_AfAUhhF7aLnSGeQENeNW07ekcKMMiShszceWJ_Iq_uxodg&oe=658CD1B6",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "CRISTIAN",
    preciocortesenciloo: 10000,
    preciocortepremium: 50000,
    duracion: "minutos",
    tipo_transporte: "moto",
    nombre_barberia: "barber chanclas"
  },

  {
    id: 6,
    imagenURL: "data:image/jpeg;base64,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",
    sexo: "hombre",
    tipo_corte: "capas",
    peluquero: "armando ocoro",
    preciocortesenciloo: 15200,
    preciocortepremium: 63000,
    duracion: "minutos 30",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Elegante 4"
  },
  {
    id: 7,
    imagenURL: "https://e1.pxfuel.com/desktop-wallpaper/481/62/desktop-wallpaper-mia-khalifa.jpg",
    sexo: "mujer",
    tipo_corte: "modern",
    peluquero: "María Fernández",
    preciocortesenciloo: 15400,
    preciocortepremium: 63500,
    duracion: "minutos33",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Vanguardia"
  },
  {
    id: 8,
    imagenURL: "https://i.pinimg.com/originals/eb/86/be/eb86be80a454eb8c1c32bef2f3c3b819.jpg",
    sexo: "hombre",
    tipo_corte: "ondulado",
    peluquero: "yeison",
    preciocortesenciloo: 15600,
    preciocortepremium: 64000,
    duracion: "minutos34",
    tipo_transporte: "auto",
    nombre_barberia: "Rizos Exquisitos"
  },
  {
    id: 9,
    imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqq-y6jrL1mBJNvexYlzAt4RW4WIrXD4N--g&usqp=CAU",
    sexo: "mujer",
    tipo_corte: "fade italiano",
    peluquero: "esperanza gomez",
    preciocortesenciloo: 15800,
    preciocortepremium: 64500,
    duracion: "minutos35",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Chic"
  },
  {
    id: 10,
    imagenURL: "data:image/jpeg;base64,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",
    sexo: "hombre",
    tipo_corte: "largo",
    peluquero: "yordi p",
    preciocortesenciloo: 16000,
    preciocortepremium: 65000,
    duracion: "minutos36",
    tipo_transporte: "bici",
    nombre_barberia: "Cabello Divino"
  },
  {
    id: 11,
    imagenURL: "https://ejemplo.com/corte37.png",
    sexo: "mujer",
    tipo_corte: "degradado",
    peluquero: "Laura Díaz",
    preciocortesenciloo: 16200,
    preciocortepremium: 65500,
    duracion: "minutos37",
    tipo_transporte: "auto",
    nombre_barberia: "Texturas Modernas"
  },
  {
    id: 12,
    imagenURL: "https://ejemplo.com/corte38.png",
    sexo: "hombre",
    tipo_corte: "pixie",
    peluquero: "Miguel Soto",
    preciocortesenciloo: 16400,
    preciocortepremium: 66000,
    duracion: "minutos38",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Encantador"
  },
  {
    id: 13,
    imagenURL: "https://ejemplo.com/corte39.png",
    sexo: "mujer",
    tipo_corte: "rastas",
    peluquero: "Isabel Martínez",
    preciocortesenciloo: 16600,
    preciocortepremium: 66500,
    duracion: "minutos39",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Rastafari"
  },
  {
    id: 14,
    imagenURL: "https://ejemplo.com/corte40.png",
    sexo: "mujer",
    tipo_corte: "bob",
    peluquero: "Luisa Pérez",
    preciocortesenciloo: 16800,
    preciocortepremium: 67000,
    duracion: "minutos40",
    tipo_transporte: "auto",
    nombre_barberia: "Corte Elegante"
  },
  {
    id: 15,
    imagenURL: "https://ejemplo.com/corte41.png",
    sexo: "hombre",
    tipo_corte: "undercut",
    peluquero: "Manuel Ramírez",
    preciocortesenciloo: 17000,
    preciocortepremium: 67500,
    duracion: "minutos41",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Rebelde"
  },
  {
    id: 16,
    imagenURL: "https://ejemplo.com/corte42.png",
    sexo: "mujer",
    tipo_corte: "corte asimétrico",
    peluquero: "Natalia Herrera",
    preciocortesenciloo: 17200,
    preciocortepremium: 68000,
    duracion: "minutos42",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Innovador"
  },
  {
    id: 17,
    imagenURL: "https://ejemplo.com/corte43.png",
    sexo: "hombre",
    tipo_corte: "mohawk",
    peluquero: "Óscar Gómez",
    preciocortesenciloo: 17400,
    preciocortepremium: 68500,
    duracion: "minutos43",
    tipo_transporte: "auto",
    nombre_barberia: "Estilo Audaz"
  },
  {
    id: 18,
    imagenURL: "https://ejemplo.com/corte44.png",
    sexo: "mujer",
    tipo_corte: "shaggy",
    peluquero: "Patricia Castro",
    preciocortesenciloo: 17600,
    preciocortepremium: 69000,
    duracion: "minutos44",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Despeinado"
  },
  {
    id: 19,
    imagenURL: "https://ejemplo.com/corte45.png",
    sexo: "hombre",
    tipo_corte: "slicked",
    peluquero: "Ricardo Vargas",
    preciocortesenciloo: 17800,
    preciocortepremium: 69500,
    duracion: "minutos45",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Clásico"
  },
  {
    id: 20,
    imagenURL: "https://ejemplo.com/corte46.png",
    sexo: "mujer",
    tipo_corte: " lob",
    peluquero: "Sandra Mora",
    preciocortesenciloo: 18000,
    preciocortepremium: 70000,
    duracion: "minutos46",
    tipo_transporte: "auto",
    nombre_barberia: "Corte Versátil"
  },
  {
    id: 21,
    imagenURL: "https://ejemplo.com/corte47.png",
    sexo: "hombre",
    tipo_corte: "quiff",
    peluquero: "Tomás Torres",
    preciocortesenciloo: 18200,
    preciocortepremium: 70500,
    duracion: "minutos47",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Elegante"
  },
  {
    id: 22,
    imagenURL: "https://ejemplo.com/corte48.png",
    sexo: "mujer",
    tipo_corte: "bowl",
    peluquero: "Valeria Sánchez",
    preciocortesenciloo: 18400,
    preciocortepremium: 71000,



    duracion: "minutos48",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Moderno"
  },
  {
    id: 23,
    imagenURL: "https://ejemplo.com/corte49.png",
    sexo: "mujer",
    tipo_corte: "faded",
    peluquero: "Ximena Ríos",
    preciocortesenciloo: 18600,
    preciocortepremium: 71500,
    duracion: "minutos49",
    tipo_transporte: "auto",
    nombre_barberia: "Estilo Sofisticado"
  },
  {
    id: 24,
    imagenURL: "https://ejemplo.com/corte50.png",
    sexo: "hombre",
    tipo_corte: "bob",
    peluquero: "Yahir Navarro",
    preciocortesenciloo: 18800,
    preciocortepremium: 72000,
    duracion: "minutos50",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Contemporáneo"
  },

  {
    id: 25,
    imagenURL: "https://ejemplo.com/corte32.png",
    sexo: "hombre",
    tipo_corte: "capas",
    peluquero: " ramiro",
    preciocortesenciloo: 15200,
    preciocortepremium: 63000,
    duracion: "minutos32",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Elegante"
  },
  {
    id: 26,
    imagenURL: "https://ejemplo.com/corte33.png",
    sexo: "mujer",
    tipo_corte: "modern",
    peluquero: "María Fernández",
    preciocortesenciloo: 15400,
    preciocortepremium: 63500,
    duracion: "minutos33",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Vanguardia"
  },
  {
    id: 27,
    imagenURL: "https://ejemplo.com/corte34.png",
    sexo: "hombre",
    tipo_corte: "ondulado",
    peluquero: "Roberto Mendoza",
    preciocortesenciloo: 15600,
    preciocortepremium: 64000,
    duracion: "minutos34",
    tipo_transporte: "auto",
    nombre_barberia: "Rizos Exquisitos"
  },
  {
    id: 28,
    imagenURL: "https://ejemplo.com/corte35.png",
    sexo: "mujer",
    tipo_corte: "capas",
    peluquero: "Ana Jiménez",
    preciocortesenciloo: 15800,
    preciocortepremium: 64500,
    duracion: "minutos35",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Chic"
  },
  {
    id: 29,
    imagenURL: "https://ejemplo.com/corte36.png",
    sexo: "hombre",
    tipo_corte: "largo",
    peluquero: "Carlos González",
    preciocortesenciloo: 16000,
    preciocortepremium: 65000,
    duracion: "minutos36",
    tipo_transporte: "bici",
    nombre_barberia: "Cabello Divino"
  },
  {
    id: 30,
    imagenURL: "https://ejemplo.com/corte37.png",
    sexo: "mujer",
    tipo_corte: "texturizado",
    peluquero: "Laura Díaz",
    preciocortesenciloo: 16200,
    preciocortepremium: 65500,
    duracion: "minutos37",
    tipo_transporte: "auto",
    nombre_barberia: "Texturas Modernas"
  },
  {
    id: 31,
    imagenURL: "https://ejemplo.com/corte38.png",
    sexo: "hombre",
    tipo_corte: "texturisado ",
    peluquero: "Miguel Soto",
    preciocortesenciloo: 16400,
    preciocortepremium: 66000,
    duracion: "minutos38",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Encantador"
  },
  {
    id: 32,
    imagenURL: "https://ejemplo.com/corte32.png",
    sexo: "hombre",
    tipo_corte: "capas",
    peluquero: "Juan García",
    preciocortesenciloo: 15200,
    preciocortepremium: 63000,
    duracion: "minutos32",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Elegante"
  },
  {
    id: 33,
    imagenURL: "https://ejemplo.com/corte33.png",
    sexo: "mujer",
    tipo_corte: "modern",
    peluquero: "María Fernández",
    preciocortesenciloo: 15400,
    preciocortepremium: 63500,
    duracion: "minutos33",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Vanguardia"
  },
  {
    id: 34,
    imagenURL: "https://ejemplo.com/corte34.png",
    sexo: "hombre",
    tipo_corte: "ondulado",
    peluquero: "Roberto Mendoza",
    preciocortesenciloo: 15600,
    preciocortepremium: 64000,
    duracion: "minutos34",
    tipo_transporte: "auto",
    nombre_barberia: "Rizos Exquisitos"
  },
  {
    id: 35,
    imagenURL: "https://ejemplo.com/corte35.png",
    sexo: "mujer",
    tipo_corte: "fade",
    peluquero: "Ana Jiménez",
    preciocortesenciloo: 15800,
    preciocortepremium: 64500,
    duracion: "minutos35",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Chic"
  },
  {
    id: 36,
    imagenURL: "https://ejemplo.com/corte36.png",
    sexo: "hombre",
    tipo_corte: "largo",
    peluquero: "Carlos González",
    preciocortesenciloo: 16000,
    preciocortepremium: 65000,
    duracion: "minutos36",
    tipo_transporte: "bici",
    nombre_barberia: "Cabello Divino"
  },
  {
    id: 37,
    imagenURL: "https://ejemplo.com/corte37.png",
    sexo: "mujer",
    tipo_corte: "texturizado",
    peluquero: "Laura Díaz",
    preciocortesenciloo: 16200,
    preciocortepremium: 65500,
    duracion: "minutos37",
    tipo_transporte: "auto",
    nombre_barberia: "Texturas Modernas"
  },
  {
    id: 38,
    imagenURL: "https://ejemplo.com/corte38.png",
    sexo: "hombre",
    tipo_corte: "pixie",
    peluquero: "Miguel Soto",
    preciocortesenciloo: 16400,
    preciocortepremium: 66000,
    duracion: "minutos38",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Encantador"
  },
  {
    id: 39,
    imagenURL: "https://ejemplo.com/corte39.png",
    sexo: "mujer",
    tipo_corte: "rastas",
    peluquero: "Isabel Martínez",
    preciocortesenciloo: 16600,
    preciocortepremium: 66500,
    duracion: "minutos39",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Rastafari"
  },
  {
    id: 40,
    imagenURL: "https://ejemplo.com/corte40.png",
    sexo: "mujer",
    tipo_corte: "degradado",
    peluquero: "Luisa Pérez",
    preciocortesenciloo: 16800,
    preciocortepremium: 67000,
    duracion: "minutos40",
    tipo_transporte: "auto",
    nombre_barberia: "Corte Elegante"
  },
  {
    id: 41,
    imagenURL: "https://ejemplo.com/corte41.png",
    sexo: "hombre",
    tipo_corte: "undercut",
    peluquero: "Manuel Ramírez",
    preciocortesenciloo: 17000,
    preciocortepremium: 67500,
    duracion: "minutos41",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Rebelde"
  },
  {
    id: 42,
    imagenURL: "https://ejemplo.com/corte42.png",
    sexo: "mujer",
    tipo_corte: "corte asimétrico",
    peluquero: "Natalia Herrera",
    preciocortesenciloo: 17200,
    preciocortepremium: 68000,
    duracion: "minutos42",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Innovador"
  },
  {
    id: 43,
    imagenURL: "https://ejemplo.com/corte43.png",
    sexo: "hombre",
    tipo_corte: "mohawk",
    peluquero: "Óscar Gómez",
    preciocortesenciloo: 17400,
    preciocortepremium: 68500,
    duracion: "minutos43",
    tipo_transporte: "auto",
    nombre_barberia: "Estilo Audaz"
  },
  {
    id: 44,
    imagenURL: "https://ejemplo.com/corte44.png",
    sexo: "mujer",
    tipo_corte: "corte shaggy",
    peluquero: "Patricia Castro",
    preciocortesenciloo: 17600,
    preciocortepremium: 69000,
    duracion: "minutos44",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Despeinado"
  },
  {
    id: 45,
    imagenURL: "https://ejemplo.com/corte45.png",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "Ricardo Vargas",
    preciocortesenciloo: 17800,
    preciocortepremium: 69500,
    duracion: "minutos45",
    tipo_transporte: "moto",
    nombre_barberia: "Estilo Clásico"
  },
  {
    id: 46,
    imagenURL: "https://ejemplo.com/corte46.png",
    sexo: "mujer",
    tipo_corte: "degradado",
    peluquero: "Sandra Mora",
    preciocortesenciloo: 18000,
    preciocortepremium: 70000,
    duracion: "minutos46",
    tipo_transporte: "auto",
    nombre_barberia: "Corte Versátil"
  },
  {
    id: 47,
    imagenURL: "https://ejemplo.com/corte47.png",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "Tomás Torres",
    preciocortesenciloo: 18200,
    preciocortepremium: 70500,
    duracion: "minutos47",
    tipo_transporte: "bici",
    nombre_barberia: "Estilo Elegante"
  },
  {
    id: 48,
    imagenURL: "https://ejemplo.com/corte48.png",
    sexo: "mujer",
    tipo_corte: "corte bowl",
    peluquero: "Valeria Sánchez",
    preciocortesenciloo: 18400,
    preciocortepremium: 71000,



    duracion: "minutos48",
    tipo_transporte: "moto",
    nombre_barberia: "Corte Moderno"
  },
  {
    id: 49,
    imagenURL: "https://ejemplo.com/corte49.png",
    sexo: "mujer",
    tipo_corte: "degradado",
    peluquero: "Ximena Ríos",
    preciocortesenciloo: 18600,
    preciocortepremium: 71500,
    duracion: "minutos49",
    tipo_transporte: "auto",
    nombre_barberia: "Estilo Sofisticado"
  },
  {
    id: 50,
    imagenURL: "https://ejemplo.com/corte50.png",
    sexo: "hombre",
    tipo_corte: "degradado",
    peluquero: "Yahir Navarro",
    preciocortesenciloo: 18800,
    preciocortepremium: 72000,
    duracion: "minutos50",
    tipo_transporte: "bici",
    nombre_barberia: "Corte Contemporáneo"
  }

];

/*
data es el original
pero trabajas siempre con dataFiltered
si estás aplicando filtros usas dataFiltered
de lo contrario usas data
*/

let dataFiltered = [];


let paginaActual = 0;
const elementosPorPagina = 10;



function mostrarTabla() {
 
  
  filtroan();
  const tablaContainer = document.getElementById('tabla1');
  tablaContainer.innerHTML = '';

  const inicio = paginaActual * elementosPorPagina;
  const fin = inicio + elementosPorPagina;
  const data1 = dataFiltered.slice(inicio, fin);
console.log(data1)
  for (let i = 0; i < data1.length; i++) {
    const corte = data1[i];

    let tablaHTML = '';

    tablaHTML += '<tr>';
    tablaHTML += '<td>' + corte.id + '</td>';
    tablaHTML += '<td><img class="imagenRedonda" src="' + corte.imagenURL + '" alt="Imagen del producto"></td>';
    tablaHTML += '<td>' + corte.tipo_corte + '</td>';
    tablaHTML += '<td>' + corte.peluquero + '</td>';
    tablaHTML += '<td>' + corte.preciocortesenciloo + '</td>';
    tablaHTML += '<td>' + corte.preciocortepremium + '</td>';
    tablaHTML += '<td>' + corte.duracion + '</td>';
    tablaHTML += '<td><button class="boton" onclick="mostrarmodal(' + i + ')"> ver mas </button></td>';
    tablaHTML += '</tr>';

    tablaContainer.innerHTML += tablaHTML;
  }

  const informacionPagina = document.getElementById('informacion-pagina');
  const totalPaginas = Math.ceil(dataFiltered.length / elementosPorPagina);
  const mensaje = 'Página ' + (paginaActual + 1) + ' de ' + totalPaginas + '.';
  informacionPagina.textContent = mensaje;

  const informacionPagina2 = document.getElementById('informacion-pagina2');
  const totalElementos = dataFiltered.length;
  const mensaje2 = ' elementos desde ' + (inicio + 1) + ' a ' + fin + ' de ' + totalElementos;
  informacionPagina2.textContent = mensaje2;

  actualizarBotonesPaginacion();
}

function cambiarPagina(direccion) {
  paginaActual = paginaActual+ direccion;

  if (paginaActual < 0) {
    paginaActual = 0;
  }

  const ultimaPagina = Math.ceil(dataFiltered.length / elementosPorPagina) - 1;

  if (paginaActual > ultimaPagina) {
    paginaActual = ultimaPagina;
  }

  mostrarTabla();
}

document.getElementById('atras').addEventListener('click', function () {
  cambiarPagina(-1);
});

document.getElementById('siguiente').addEventListener('click', function () {
  cambiarPagina(1);
});

function actualizarBotonesPaginacion() {
  const totalPaginas = Math.ceil(dataFiltered.length / elementosPorPagina);
  const btnAnterior = document.getElementById('atras');
  const btnSiguiente = document.getElementById('siguiente');

  btnAnterior.disabled = paginaActual === 0;
  btnSiguiente.disabled = paginaActual === totalPaginas - 1;
}

document.getElementById('consultar').addEventListener('click', function () {
filtrarPorCapas();
  paginaActual = 0; // Reiniciar la página al aplicar un filtro
  mostrarTabla();
});

mostrarTabla();

document.getElementById('limpiar').addEventListener('click', limpiarFiltros);

function limpiarFiltros() {
  // Limpiar el valor del input de tipo de corte
  const tipoCorInput = document.getElementById('tipocor');
  if (tipoCorInput) {
    tipoCorInput.value = '';
  }

  // Desmarcar los radios de sexo
  const mujer = document.getElementById('mujer');
  const hombre = document.getElementById('hombre');

  if (mujer && hombre) {
    mujer.checked = false;
    hombre.checked = false;
  }

  // Reiniciar la página y mostrar la tabla principal
  paginaActual = 0;
  mostrarTabla();
}

function filtrarPorCapas() {
  const tipoCorte = document.getElementById('tipocor').value.toLowerCase();
/* data.filter: filter es un método de los arrays en JavaScript. Toma una función 
como argumento y crea un nuevo array con todos los elementos que cumplen con la 
condición dada por esa función.  */
 

dataFiltered = data.filter(data => 
    data.tipo_corte.toLowerCase().includes(tipoCorte)

  );
  mostrarTabla();
}


function filtrarPorSexo() {
  const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
if (sexoSeleccionado) {
    const sexo = sexoSeleccionado.value;
  
    dataFiltered = data.filter(corte => corte.sexo === sexo);
  }
  mostrarTabla();
} 

function filtroan() {
  const tipoCorte = document.getElementById('tipocor').value.toLowerCase();

  // Filtrar por tipo de corte
  const filtroTipoCorte = data.filter(corte =>
    corte.tipo_corte.toLowerCase().includes(tipoCorte)
  );

  // Filtrar por sexo si hay una selección
  const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
  let filtroSexo = filtroTipoCorte;

  if (sexoSeleccionado) {
    const sexo = sexoSeleccionado.value;
    filtroSexo = filtroTipoCorte.filter(corte => corte.sexo === sexo);
  }

  // Asignar el resultado a dataFiltered
  dataFiltered = filtroSexo;
}
;

let indice; // Declarar la variable a nivel global

function mostrarmodal(i) {
  indice = i; // Asignar el valor al nivel global
  const elemento = data[i];
  const modal = document.getElementById('myModal');

  // Llenar el modal con la información del producto
  document.getElementById('idp').value = elemento.id;
  document.getElementById('img').src = elemento.imagenURL;
  document.getElementById('sexos').value = elemento.sexo;
  document.getElementById('ticor').value = elemento.tipo_corte;
  document.getElementById('pelu').value = elemento.peluquero;
  document.getElementById('sencillo').value = elemento.preciocortesenciloo;
  document.getElementById('premiun').value = elemento.preciocortepremium;
  document.getElementById('tiempo').value = elemento.duracion;
  document.getElementById('transp').value = elemento.tipo_transporte;
  document.getElementById('barberia').value = elemento.nombre_barberia;

  // Mostrar el modal
  modal.classList.add('modalVisible');
}

function modificarmodal() {
  // Obtener el nuevo valor del ID desde el input
  const nuevoId = document.getElementById('idp').value;
  const nuevosexo= document.getElementById('sexos').value;
  // Modificar el ID en el array data usando la variable global
  data[indice].id = nuevoId;
  data[indice].sexo= nuevosexo;
  const elementossele = data[indice];

  
  // Cerrar el modal después de modificar el ID
  console.log(data[indice])
  mostrarTabla();
}


function cerrarModal() {
  // Ocultar el modal
  const modal = document.getElementById('myModal');
  modal.classList.remove('modalVisible');
  modificarmodal();
}


/*function actualizarElemento(index) {
  // Obtener el valor actualizado de la marca
  const nuevoid = document.getElementById('idp').value;
  console.log(nuevoid);
 
 
  // Actualizar la marca en el objeto productosfiltrados (asumiendo que dataFiltered es un array que tiene la misma longitud que data)
  dataFiltered[index] = nuevoid;
  let elementossele = dataFiltered[index];
  // Buscar y actualizar en el array original 'data'
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === elementossele.id) {
      data[i] = elementossele;
      
      dataFiltered[index] = data[i];
     
    }
    console.log("esta"+dataFiltered[index])
  }
  
}
document.getElementById('cerrar').addEventListener('click', function () {
 
    cerrarModal();
    
   
    actualizarElemento();
  });
  
  document.getElementById('actualizar').addEventListener('click', function () {
    // Obtener el índice actual desde el campo oculto 'idp'
   
    actualizarElemento();
    
    
    
  });



  // Actualizar el producto cuando se hace clic en "Actualizar Producto"

// Agrega el manejador de eventos al botón "ver mas" en el bucle for
/*document.getElementById('carrar').addEventListener('click', function () {
  actualizarProducto(indice);
});

// Cerrar el modal cuando se hace clic en "Cerrar Modal"
document.getElementById('actualizar').addEventListener('click', function () {
  cerrarModal();
});*/



/*

document.getElementById('consultar').addEventListener('click', function () {
  // Obtener el valor seleccionado tanto para hombres como para mujeres
  
  const tipo = document.querySelector('input[name="sexo"]:checked').value;

  // Utilizar el nombre correcto de la función de filtrado (filtrarPorSexo)
  const resultadosFiltrados = filtrarPorSexo(tipo);

  // Mostrar los resultados en la tabla
  mostrarResultados(resultadosFiltrados);
});

document.getElementById('consultar').addEventListener('click', function () {
  const tipoCorte = document.getElementById('tipocor').value;
  const sexo = document.querySelector('input[name="sexo"]:checked');

  
    const tipoSexo = sexo.value;
 
    // Filtrar por tipo de corte y sexo
    const resultadosFiltrados = filtrarPorTipoYSexo(tipoCorte, tipoSexo);
  
    // Mostrar los resultados en la tabla
    mostrarResultados(resultadosFiltrados);
  
});

function filtrarPorTipoYSexo(tipoCorte, sexo) {
  const nombreTipoCorte = tipoCorte.toLowerCase();
  const resultadosFiltrados = [];

  for (let i = 0; i < data.length; i++) {
    const corte = data[i];
    const tipo = corte.tipo_corte.toLowerCase();

    if (tipo.includes(nombreTipoCorte) && corte.sexo === sexo) {
      resultadosFiltrados.push(corte);
    }
  }

  return resultadosFiltrados;
}
document.getElementById('limparf').addEventListener('click', function () {
  limpiarFiltros();
});

function limpiarFiltros() {
  // Limpiar el valor del input de tipo de corte
  document.getElementById('tipocor').value = '';

  // Desmarcar los radios de sexo
  document.getElementById('mujer').checked = false;
  document.getElementById('hombre').checked = false;

  // Mostrar la tabla principal
  mostrarTabla();
}





//con esto muestro el filtro

function mostrarResultados(resultados) {
  const tablaContainer = document.getElementById('tabla1');
  tablaContainer.innerHTML = '';

  for (let i = 0; i < resultados.length; i++) {
    const corte = resultados[i];

    let tablaHTML = '';

    tablaHTML += '<tr>';
    tablaHTML += '<td>' + corte.id + '</td>';
    tablaHTML += '<td>' + corte.imagenURL + '</td>';
    tablaHTML += '<td>' + corte.tipo_corte + '</td>';
    tablaHTML += '<td>' + corte.peluquero + '</td>';
    tablaHTML += '<td>' + corte.preciocortesenciloo + '</td>';
    tablaHTML += '<td>' + corte.preciocortepremium + '</td>';
    tablaHTML += '<td>' + corte.duracion + '</td>';
    tablaHTML += '<td><button class="boton" onclick="verMasDetalles('+ corte +')> ver mas </button>   </td>';
    tablaHTML += '</tr>';

    tablaContainer.innerHTML += tablaHTML;



  }
}*/