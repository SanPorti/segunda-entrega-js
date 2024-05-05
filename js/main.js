

const alumnos = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 22,
        genero: "Masculino",
    },
    {
        nombre: "Pedro",
        apellido: "Gomez",
        edad: 19,
        genero: "Masculino",
    },
    {
        nombre: "Maria",
        apellido: "Fernandez",
        edad: 18,
        genero: "Femenino",
    },
    {
        nombre: "Joaquin",
        apellido: "Vazquez",
        edad: 27,
        genero: "Masculino",
    },
    {
        nombre: "Fernanda",
        apellido: "Salinas",
        edad: 31,
        genero: "Femenino",
    },
    {
        nombre: "Eva",
        apellido: "Salazar",
        edad: 25,
        genero: "Femenino",
    },

];

class Alumno {
    constructor(nombre, apellido, edad, genero,) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }
}

function crearOtroAlumno() {
    let crearOtro = confirm(`Desea crear otro alumno?`);
    if (crearOtro) {
        crearAlumno();
    } else {
        alert(`Gracias por tu consulta.`)
    }
}

function crearAlumno() {
    const nombreAlumno = prompt("Ingrese el Nombre del nuevo alumno:");
    const apellidoAlumno = prompt("Ingrese el Apellido del nuevo alumno:");
    const edadAlumno = parseInt(prompt("Ingrese la Edad del nuevo alumno:"));
    const generoAlumno = prompt("Ingrese el genero del nuevo alumno:");
    const nuevoAlumno = new Alumno(nombreAlumno, apellidoAlumno, edadAlumno, generoAlumno);
    alumnos.push(nuevoAlumno);
    alert(`Alumno creado con exito, ver por consola`);
    console.log(alumnos);
    crearOtroAlumno();
}

function nombreApellido() {
    const alumnosPorNombreApellido = alumnos.map((el) => ({ nombre: el.nombre, apellido: el.apellido }));
    alert("Ver Nombres y Apellidos por consola");
    console.log(alumnosPorNombreApellido);
}

function filtrarAlumno () {
    const filtrarPorEdad = parseInt(prompt("Ingrese la edad que desee filtrar"));
    const alumnosFiltrados = alumnos.filter ((el) => el.edad === filtrarPorEdad); 
    if (alumnosFiltrados.length > 0) {
        alert("Estos son los alumnos que coinciden con tu busqueda, miralo por consola.")
        console.log(alumnosFiltrados);
    } else {
        alert("No hay alumnos que coincidan con tu busqueda.")
    }
}

let numero;

do {
    alert(`Bienvenido al sistema de gestion de alumnos!
    1. Si desea agregar alumno. 
    2. Si desea eliminar el ultimo alumno agregado.
    3. Si quiere conocer el nombre y apellido de los alumnos. 
    4. Si desea filtrar alumnos por edad.
    0. Para salir.`)
    numero = parseInt(prompt("Ingrese la opcion elegida:"))
    switch (numero) {
        case 0:
            alert("Gracias por tu consulta.")
            break;
        case 1:
            crearAlumno();
            break;
        case 2:
            alumnos.pop();
            alert("Ultimo alumno eliminado con exito, ver por consola");
            console.log(alumnos);
            break;
        case 3:
            nombreApellido();
            break;
        case 4:
            filtrarAlumno();
            break;
        default:
            alert("La opcion elegida no es valida, lea atentamente.")
            break;
    }
} while (numero !== 0);