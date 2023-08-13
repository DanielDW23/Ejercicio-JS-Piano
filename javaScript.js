const teclas = [
    { teclaPulsada: "q", sonido: "sounds/DO4.mp3", clase: "do4", color: "white" },
    { teclaPulsada: "w", sonido: "sounds/REb4.mp3", clase: "reb4", color: "black" },
    { teclaPulsada: "e", sonido: "sounds/RE4.mp3", clase: "re4", color: "white" },
    { teclaPulsada: "r", sonido: "sounds/MIb4.mp3", clase: "mib4", color: "black" },
    { teclaPulsada: "t", sonido: "sounds/MI4.mp3", clase: "mi4", color: "white" },
    { teclaPulsada: "y", sonido: "sounds/FA4.mp3", clase: "fa4", color: "white" },
    { teclaPulsada: "u", sonido: "sounds/SOLb4.mp3", clase: "solb4", color: "black" },
    { teclaPulsada: "i", sonido: "sounds/SOL4.mp3", clase: "sol4", color: "white" },
    { teclaPulsada: "o", sonido: "sounds/LAb4.mp3", clase: "lab4", color: "black" },
    { teclaPulsada: "p", sonido: "sounds/LA4.mp3", clase: "la4", color: "white" },
    { teclaPulsada: "a", sonido: "sounds/SIb4.mp3", clase: "sib4", color: "black" },
    { teclaPulsada: "s", sonido: "sounds/SI4.mp3", clase: "si4", color: "white" },
    { teclaPulsada: "d", sonido: "sounds/DO5.mp3", clase: "do5", color: "white" }
];

let sonidoReproduciendose = false;

document.addEventListener("keydown",musica);
document.addEventListener("click",musica2);
document.addEventListener("keyup", detenerSonido);

let etiquetaAudio = document.createElement("audio");

function tocar(sonido) {
  etiquetaAudio.pause();
  etiquetaAudio.src = sonido;
  etiquetaAudio.play().catch((err) => console.error(err));
  sonidoReproduciendose = true;
}

function detenerSonido(event) {
    sonidoReproduciendose = false;
}

function musica(event) {
    for (let i = 0; i < teclas.length; i++) {
        const tecla = teclas[i];
        if (event.key.toLowerCase() === tecla.teclaPulsada && !sonidoReproduciendose) {
            const elementoTecla = document.querySelector("." + tecla.clase);
            // console.log(elementoTecla)
            tocar(tecla.sonido);
            elementoTecla.style.backgroundColor = "#aaa";
            setTimeout(() => {
                elementoTecla.style.backgroundColor = tecla.color;
            }, 200);
        }
    }
}

function musica2(event) {
    // console.log(event)
    for (let i = 0; i < teclas.length; i++) {
        const tecla = teclas[i];
        console.log(event.target.className)
        if (event.target.className === `blanca ${tecla.clase}` || event.target.className === `negra ${tecla.clase}`) {
            const elementoTecla = document.querySelector("." + tecla.clase);
            // console.log(elementoTecla)
            tocar(tecla.sonido);
            elementoTecla.style.backgroundColor = "#aaa";
            setTimeout(() => {
                elementoTecla.style.backgroundColor = tecla.color;
            }, 200);
            elementoTecla.appendChild(etiquetaAudio);
        }
    }
}


// document.addEventListener("keydown",musica);
// document.addEventListener("click",musica2);

// let tecla;
// let etiquetaAudio;

// function tocar(sonido){
//     etiquetaAudio = document.createElement("audio");
//     etiquetaAudio.setAttribute("src", sonido)
//     etiquetaAudio.play()
//     elementoTecla.appendChild(etiquetaAudio); 
// }

// function musica(event) {
//     console.log(event);
//     if (event.teclaPulsada == "q" ) {
//         tecla = document.querySelector(".do4");
//         tocar("sounds/DO4.mp3"); 
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
        
//     }
//     if (event.teclaPulsada == "w") {
//         tecla = document.querySelector(".reb4");
//         tocar("sounds/REb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.teclaPulsada == "e") {
//         tecla = document.querySelector(".re4");
//         tocar("sounds/RE4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.teclaPulsada == "r") {
//         tecla = document.querySelector(".mib4");
//         tocar("sounds/MIb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.teclaPulsada == "t") {
//         tecla = document.querySelector(".mi4");
//         tocar("sounds/MI4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.teclaPulsada == "y") {
//         tecla = document.querySelector(".fa4");
//         tocar("sounds/FA4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.teclaPulsada == "u") {
//         tecla = document.querySelector(".solb4");
//         tocar("sounds/SOLb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.teclaPulsada == "i") {
//         tecla = document.querySelector(".sol4");
//         tocar("sounds/SOL4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.teclaPulsada == "o") {
//         tecla = document.querySelector(".lab4");
//         tocar("sounds/LAb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.teclaPulsada == "p") {
//         tecla = document.querySelector(".la4");
//         tocar("sounds/LA4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.teclaPulsada == "a") {
//         tecla = document.querySelector(".sib4");
//         tocar("sounds/SIb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.teclaPulsada == "s") {
//         tecla = document.querySelector(".si4");
//         tocar("sounds/SI4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.teclaPulsada == "d") {
//         tecla = document.querySelector(".do5");
//         tocar("sounds/DO5.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
// }


// function musica2(event) {
//     console.log(event);
//     if (event.target.className  == "blanca do4" ) {
//         tecla = document.querySelector(".do4");
//         tocar("sounds/DO4.mp3"); 
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
        
//     }
//     if (event.target.className == "negra reb4") {
//         tecla = document.querySelector(".reb4");
//         tocar("sounds/REb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.target.className == "blanca re4") {
//         tecla = document.querySelector(".re4");
//         tocar("sounds/RE4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.target.className == "negra mib4") {
//         tecla = document.querySelector(".mib4");
//         tocar("sounds/MIb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.target.className == "blanca mi4") {
//         tecla = document.querySelector(".mi4");
//         tocar("sounds/MI4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.target.className == "blanca fa4") {
//         tecla = document.querySelector(".fa4");
//         tocar("sounds/FA4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.target.className == "negra solb4") {
//         tecla = document.querySelector(".solb4");
//         tocar("sounds/SOLb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.target.className == "blanca sol4") {
//         tecla = document.querySelector(".sol4");
//         tocar("sounds/SOL4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.target.className == "negra lab4") {
//         tecla = document.querySelector(".lab4");
//         tocar("sounds/LAb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.target.className == "blanca la4") {
//         tecla = document.querySelector(".la4");
//         tocar("sounds/LA4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.target.className == "negra sib4") {
//         tecla = document.querySelector(".sib4");
//         tocar("sounds/SIb4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "black";
//         }, 200);
//     }
//     if (event.target.className == "blanca si4") {
//         tecla = document.querySelector(".si4");
//         tocar("sounds/SI4.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
//     if (event.target.className == "blanca do5") {
//         tecla = document.querySelector(".do5");
//         tocar("sounds/DO5.mp3")
//         setTimeout(() => {
//             tecla.style.backgroundColor = "white";
//         }, 200);
//     }
// }
