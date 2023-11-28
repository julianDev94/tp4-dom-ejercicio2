const formularioPersona = document.querySelector("#formPerson");
console.log(formularioPersona);

class Persona {
  #_nombre;
  #_edad;
  #_dni;
  #_sexo;
  #_peso;
  #_altura;
  #_anioNac;

  constructor(
    nombreParam,
    edadParam,
    dniParam,
    sexoParam,
    pesoParam,
    alturaParam,
    anioNacParam
  ) {
    this.#_nombre = nombreParam;
    this.#_edad = edadParam;
    this.#_dni = dniParam;
    this.#_sexo = sexoParam;
    this.#_peso = pesoParam;
    this.#_altura = alturaParam;
    this.#_anioNac = anioNacParam;
  }

  get obtenerNombre() {
    return this.#_nombre;
  }

  set nuevoNombre(nombre) {
    if (nombre !== "") {
      this.#_nombre = nombre;
    } else {
      alert("Ingrese un nombre por favor");
    }
  }

  get obtenerEdad() {
    return this.#_edad;
  }

  set nuevaEdad(edad) {
    if (edad > 0 && Number.isInteger(edad)) {
      this.#_edad = edad;
    } else {
      alert("Ingrese una edad válida por favor");
    }
  }

  get obtenerDNI() {
    return this.#_dni;
  }

  set nuevoDNI(dni) {
    if (Number.isInteger(dni)) {
      this.#_dni = dni;
    } else {
      alert("Ingrese un dni válido por favor");
    }
  }

  get obtenerSexo() {
    return this.#_sexo;
  }

  set nuevoSexo(sexo) {
    if (sexo === "H" || sexo === "M") {
      this.#_sexo = sexo;
    } else {
      alert("Ingrese el sexo por favor");
    }
  }

  get obtenerPeso() {
    return this.#_peso;
  }

  set nuevoPeso(peso) {
    if (peso > 0) {
      this.#_peso = peso;
    } else {
      alert("Ingrese un peso por favor");
    }
  }

  get obtenerAltura() {
    return this.#_altura;
  }

  set nuevoAltura(altura) {
    if (altura > 0) {
      this.#_altura = altura;
    } else {
      alert("Ingrese un nombre por favor");
    }
  }

  get obtenerAnioNac() {
    return this.#_anioNac;
  }

  set nuevoAnioNac(anioNac) {
    if (anioNac >= 1930) {
      this.#_anioNac = anioNac;
    } else {
      alert("Ingrese un año de nacimiento válido por favor");
    }
  }

  mostrarGeneracion() {
    if (this.obtenerAnioNac >= 1930 && this.obtenerAnioNac <= 1948) {
      alert(
        `La persona pertenece a la generación Silent Generation y su rango caracteristicos es Austeridad`
      );
    } else {
      if (this.obtenerAnioNac >= 1949 && this.obtenerAnioNac <= 1968) {
        alert(
          `La persona pertenece a la generación Baby Boom y su rango caracteristicos es Ambición`
        );
      }
      if (this.obtenerAnioNac >= 1969 && this.obtenerAnioNac <= 1980) {
        alert(
          `La persona pertenece a la generación X y su rango caracteristicos es Obsesión por el éxito`
        );
      }
      if (this.obtenerAnioNac >= 1981 && this.obtenerAnioNac <= 1993) {
        alert(
          `La persona pertenece a la generación Y y su rango caracteristicos es Frustación`
        );
      }
      if (this.obtenerAnioNac >= 1994 && this.obtenerAnioNac <= 2010) {
        alert(
          `La persona pertenece a la generación Z y su rango caracteristicos es Irreverencia`
        );
      }
    }
  }

  esMayorEdad() {
    if (this.obtenerEdad >= 18) {
      alert(`La persona es mayor de edad`);
    } else {
      alert(`La persona no es mayor de edad`);
    }
  }

  mostrarDatos() {
    document.write(`<h3>Datos de la persona</h3>`);
    document.write(`<p>Nombre: ${this.obtenerNombre}</p>`);
    document.write(`<p>Edad: ${this.obtenerEdad}</p>`);
    document.write(`<p>DNI: ${this.obtenerDNI}</p>`);
    document.write(`<p>Sexo: ${this.obtenerSexo}</p>`);
    document.write(`<p>Peso: ${this.obtenerPeso}</p>`);
    document.write(`<p>Altura: ${this.obtenerAltura}</p>`);
    document.write(`<p>Fecha Nacimiento: ${this.obtenerAnioNac}</p>`);
  }
}



const obtenerDatos = (e) => {
  e.preventDefault();

  const nombreInput = document.getElementById("nombreControl");
  console.log(nombreInput.value);
  const edadInput = document.getElementById("edadControl");
  console.log(edadInput.value);
  const dniInput = document.getElementById("dniControl");
  console.log(dniInput.value);
  const pesoInput = document.getElementById("pesoControl");
  console.log(pesoInput.value);
  const sexoInput = obtenerSexo();
  console.log(sexoInput);
  const alturaInput = document.getElementById("alturaControl");
  console.log(alturaInput.value);
  const anioInput = document.getElementById("anioControl");
  console.log(anioInput.value);
  const persona1 = new Persona(nombreInput.value, edadInput.value, dniInput.value,sexoInput, pesoInput.value,alturaInput.value,anioInput.value);
  console.log(persona1);
  if(formularioPersona[8]){
    persona1.mostrarGeneracion();
  }else if(formularioPersona[9]){
    persona1.esMayorEdad();
  }
};

function obtenerSexo(){
  const radios = document.getElementsByName('flexRadio');
  let valorSelec;
  for(let i = 0; i< radios.length; i++){
    if(radios[i].checked && radios[i].id == 'flexRadio1'){
      valorSelec = 'M';
      break
    }else if(radios[i].checked && radios[i].id == 'flexRadio2'){
      valorSelec = 'F';
      break;
    }
  }
  return valorSelec;
}


formularioPersona.addEventListener("submit", obtenerDatos);
