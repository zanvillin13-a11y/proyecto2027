/* ============================================================
   SENATI - JAVASCRIPT PARA DESARROLLO WEB
   PARTE III. SOLUCIONES DE LOS 60 EJERCICIOS DE PRÁCTICA
   Cada ejercicio está marcado con su número y bloque de origen.
   Criterio: nota >= 11 se considera aprobatoria (según el manual).
   Ejecutar dentro de <script> en index.html y revisar la consola (F12).
   ============================================================ */


/* ============================================================
   BLOQUE A - NIVEL BÁSICO: console.log(), prompt(), variables y tipos de datos
   ============================================================ */

// --- Ejercicio 1: Datos personales ---
let nombre1 = prompt("Ingrese su nombre");
let apellido1 = prompt("Ingrese su apellido");
let edad1 = Number(prompt("Ingrese su edad"));
console.log("Presentación del estudiante");
console.log("Nombre completo:", nombre1, apellido1);
console.log("Edad:", edad1, "años");


// --- Ejercicio 2: Curso y sección ---
let curso2 = prompt("Ingrese el nombre del curso");
let seccion2 = prompt("Ingrese la sección");
console.log("Curso: " + curso2 + " | Sección: " + seccion2);


// --- Ejercicio 3: Edad futura ---
let edad3 = Number(prompt("Ingrese su edad actual"));
let edadFutura3 = edad3 + 5;
console.log("Dentro de 5 años tendrá:", edadFutura3, "años");


// --- Ejercicio 4: Doble de un número ---
let numero4 = Number(prompt("Ingrese un número"));
let doble4 = numero4 * 2;
console.log("El doble es:", doble4);


// --- Ejercicio 5: Triple de un número ---
let numero5 = Number(prompt("Ingrese un número"));
let triple5 = numero5 * 3;
console.log("El triple es:", triple5);


// --- Ejercicio 6: Mitad de un número ---
let numero6 = Number(prompt("Ingrese un número"));
let mitad6 = numero6 / 2;
console.log("La mitad es:", mitad6);


// --- Ejercicio 7: Tipo de dato ---
let nombre7 = "Ana";
let edad7 = 22;
let activo7 = true;
console.log("Tipo de nombre:", typeof nombre7);
console.log("Tipo de edad:", typeof edad7);
console.log("Tipo de activo:", typeof activo7);


// --- Ejercicio 8: Constante PI ---
const PI8 = 3.1416;
let radio8 = Number(prompt("Ingrese el radio del círculo"));
let circunferencia8 = 2 * PI8 * radio8;
console.log("Circunferencia:", circunferencia8);


// --- Ejercicio 9: Conversión numérica ---
let numeroA9 = Number(prompt("Ingrese el primer número"));
let numeroB9 = Number(prompt("Ingrese el segundo número"));
console.log("Suma:", numeroA9 + numeroB9);


// --- Ejercicio 10: Mensaje personalizado ---
let nombre10 = prompt("Ingrese su nombre");
let especialidad10 = prompt("Ingrese su especialidad");
console.log("Bienvenido(a) a SENATI, " + nombre10 + ". Especialidad: " + especialidad10);


/* ============================================================
   BLOQUE B - OPERADORES ARITMÉTICOS
   ============================================================ */

// --- Ejercicio 11: Operaciones básicas ---
let a11 = Number(prompt("Ingrese el primer número"));
let b11 = Number(prompt("Ingrese el segundo número"));
console.log("Suma:", a11 + b11);
console.log("Resta:", a11 - b11);
console.log("Multiplicación:", a11 * b11);
console.log("División:", a11 / b11);


// --- Ejercicio 12: Área de un cuadrado ---
let lado12 = Number(prompt("Ingrese el lado del cuadrado"));
let area12 = lado12 * lado12;
console.log("Área:", area12);


// --- Ejercicio 13: Perímetro de un cuadrado ---
let lado13 = Number(prompt("Ingrese el lado del cuadrado"));
let perimetro13 = lado13 * 4;
console.log("Perímetro:", perimetro13);


// --- Ejercicio 14: Área de un triángulo ---
let base14 = Number(prompt("Ingrese la base"));
let altura14 = Number(prompt("Ingrese la altura"));
let area14 = (base14 * altura14) / 2;
console.log("Área del triángulo:", area14);


// --- Ejercicio 15: Área de un círculo ---
const PI15 = 3.1416;
let radio15 = Number(prompt("Ingrese el radio"));
let area15 = PI15 * radio15 ** 2;
console.log("Área del círculo:", area15);


// --- Ejercicio 16: Promedio de tres notas ---
let n1_16 = Number(prompt("Nota 1"));
let n2_16 = Number(prompt("Nota 2"));
let n3_16 = Number(prompt("Nota 3"));
let promedio16 = (n1_16 + n2_16 + n3_16) / 3;
console.log("Promedio:", promedio16);


// --- Ejercicio 17: Promedio de cuatro calificaciones ---
let n1_17 = Number(prompt("Nota 1"));
let n2_17 = Number(prompt("Nota 2"));
let n3_17 = Number(prompt("Nota 3"));
let n4_17 = Number(prompt("Nota 4"));
let promedio17 = (n1_17 + n2_17 + n3_17 + n4_17) / 4;
console.log("Promedio:", promedio17.toFixed(2));


// --- Ejercicio 18: Sueldo semanal ---
let pagoHora18 = Number(prompt("Pago por hora"));
let horas18 = Number(prompt("Horas trabajadas"));
let sueldo18 = pagoHora18 * horas18;
console.log("Sueldo semanal:", sueldo18);


// --- Ejercicio 19: Precio con IGV ---
const IGV19 = 0.18;
let precio19 = Number(prompt("Ingrese el precio sin IGV"));
let montoIGV19 = precio19 * IGV19;
let precioFinal19 = precio19 + montoIGV19;
console.log("IGV:", montoIGV19);
console.log("Precio final:", precioFinal19);


// --- Ejercicio 20: Conversión de minutos ---
let minutos20 = Number(prompt("Ingrese la cantidad de minutos"));
let horas20 = Math.floor(minutos20 / 60);
let minutosRestantes20 = minutos20 % 60;
console.log("Horas:", horas20, "Minutos:", minutosRestantes20);


/* ============================================================
   BLOQUE C - COMPARACIONES Y CONDICIONALES
   ============================================================ */

// --- Ejercicio 21: Mayor de edad ---
let edad21 = Number(prompt("Ingrese su edad"));
if (edad21 >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}


// --- Ejercicio 22: Aprobado o reprobado ---
let nota22 = Number(prompt("Ingrese la nota"));
if (nota22 >= 11) {
  console.log("APROBADO");
} else {
  console.log("REPROBADO");
}


// --- Ejercicio 23: Positivo o negativo ---
let n23 = Number(prompt("Ingrese un número"));
if (n23 > 0) {
  console.log("Positivo");
} else if (n23 < 0) {
  console.log("Negativo");
} else {
  console.log("Cero");
}


// --- Ejercicio 24: Par o impar ---
let n24 = Number(prompt("Ingrese un número entero"));
if (n24 % 2 === 0) {
  console.log("Par");
} else {
  console.log("Impar");
}


// --- Ejercicio 25: Mayor de dos números ---
let a25 = Number(prompt("Primer número"));
let b25 = Number(prompt("Segundo número"));
if (a25 > b25) {
  console.log(a25, "es mayor");
} else if (b25 > a25) {
  console.log(b25, "es mayor");
} else {
  console.log("Son iguales");
}


// --- Ejercicio 26: Mayor de tres números ---
let a26 = Number(prompt("Número A"));
let b26 = Number(prompt("Número B"));
let c26 = Number(prompt("Número C"));
if (a26 >= b26 && a26 >= c26) {
  console.log("Mayor:", a26);
} else if (b26 >= a26 && b26 >= c26) {
  console.log("Mayor:", b26);
} else {
  console.log("Mayor:", c26);
}


// --- Ejercicio 27: Menor de tres números ---
let a27 = Number(prompt("Número A"));
let b27 = Number(prompt("Número B"));
let c27 = Number(prompt("Número C"));
if (a27 <= b27 && a27 <= c27) {
  console.log("Menor:", a27);
} else if (b27 <= a27 && b27 <= c27) {
  console.log("Menor:", b27);
} else {
  console.log("Menor:", c27);
}


// --- Ejercicio 28: Clasificación de nota ---
let nota28 = Number(prompt("Ingrese la nota"));
if (nota28 >= 18) {
  console.log("Excelente");
} else if (nota28 >= 14) {
  console.log("Bueno");
} else if (nota28 >= 11) {
  console.log("Regular");
} else {
  console.log("Reprobado");
}


// --- Ejercicio 29: Descuento por compra ---
let compra29 = Number(prompt("Monto de la compra"));
let descuento29 = 0;
if (compra29 > 200) {
  descuento29 = compra29 * 0.15;
}
console.log("Descuento:", descuento29);
console.log("Total a pagar:", compra29 - descuento29);


// --- Ejercicio 30: Acceso por edad y DNI ---
let edad30 = Number(prompt("Ingrese su edad"));
let tieneDNI30 = confirm("¿Tiene DNI?"); // confirm() devuelve true/false
if (edad30 >= 18 && tieneDNI30 === true) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}


/* ============================================================
   BLOQUE D - CONDICIONALES INTEGRADOS Y VALIDACIÓN
   ============================================================ */

// --- Ejercicio 31: Cuatro calificaciones ---
let n1_31 = Number(prompt("Nota 1"));
let n2_31 = Number(prompt("Nota 2"));
let n3_31 = Number(prompt("Nota 3"));
let n4_31 = Number(prompt("Nota 4"));
let promedio31 = (n1_31 + n2_31 + n3_31 + n4_31) / 4;
console.log("Promedio:", promedio31);
if (promedio31 >= 11) {
  console.log("APROBADO");
} else {
  console.log("REPROBADO");
}


// --- Ejercicio 32: Validar nota ---
let nota32 = Number(prompt("Ingrese una nota"));
if (nota32 < 0 || nota32 > 20) {
  console.log("ERROR: la nota debe estar entre 0 y 20");
} else {
  console.log("Nota válida:", nota32);
}


// --- Ejercicio 33: Tarifa por horas ---
let horas33 = Number(prompt("Ingrese las horas de servicio"));
let total33 = 0;
if (horas33 <= 5) {
  total33 = horas33 * 10;
} else {
  total33 = 5 * 10 + (horas33 - 5) * 15;
}
console.log("Total a pagar:", total33);


// --- Ejercicio 34: Bono de trabajador ---
let sueldo34 = Number(prompt("Ingrese el sueldo"));
let anios34 = Number(prompt("Ingrese los años de servicio"));
let bono34 = 0;
if (anios34 >= 5) {
  bono34 = sueldo34 * 0.08;
}
console.log("Bono:", bono34);
console.log("Sueldo total:", sueldo34 + bono34);


// --- Ejercicio 35: Temperatura ---
let temperatura35 = Number(prompt("Ingrese la temperatura"));
if (temperatura35 < 10) {
  console.log("Frío");
} else if (temperatura35 <= 24) {
  console.log("Templado");
} else if (temperatura35 <= 34) {
  console.log("Cálido");
} else {
  console.log("Muy caliente");
}


// --- Ejercicio 36: Calculadora simple ---
let num1_36 = Number(prompt("Ingrese el número 1"));
let num2_36 = Number(prompt("Ingrese el número 2"));
let operador36 = prompt("Ingrese el operador (+, -, *, /)");
if (operador36 === "+") {
  console.log("Resultado:", num1_36 + num2_36);
} else if (operador36 === "-") {
  console.log("Resultado:", num1_36 - num2_36);
} else if (operador36 === "*") {
  console.log("Resultado:", num1_36 * num2_36);
} else if (operador36 === "/") {
  console.log("Resultado:", num1_36 / num2_36);
} else {
  console.log("Operador no válido");
}


// --- Ejercicio 37: División segura ---
let dividendo37 = Number(prompt("Ingrese el dividendo"));
let divisor37 = Number(prompt("Ingrese el divisor"));
if (divisor37 === 0) {
  console.log("ERROR: no se puede dividir entre cero");
} else {
  console.log("Resultado:", dividendo37 / divisor37);
}


// --- Ejercicio 38: Usuario y clave ---
const USUARIO38 = "senati";
const CLAVE38 = "js2026";
let usuario38 = prompt("Ingrese su usuario");
let clave38 = prompt("Ingrese su contraseña");
if (usuario38 === USUARIO38 && clave38 === CLAVE38) {
  console.log("Acceso concedido");
} else {
  console.log("Usuario o contraseña incorrectos");
}


// --- Ejercicio 39: Categoría por edad ---
let edad39 = Number(prompt("Ingrese la edad"));
if (edad39 <= 11) {
  console.log("Niño");
} else if (edad39 <= 17) {
  console.log("Adolescente");
} else if (edad39 <= 59) {
  console.log("Adulto");
} else {
  console.log("Adulto mayor");
}


// --- Ejercicio 40: Nota final ponderada ---
let practica40 = Number(prompt("Ingrese la nota de práctica"));
let parcial40 = Number(prompt("Ingrese la nota del examen parcial"));
let final40 = Number(prompt("Ingrese la nota del examen final"));
let notaFinal40 = practica40 * 0.30 + parcial40 * 0.30 + final40 * 0.40;
console.log("Nota final:", notaFinal40.toFixed(2));
if (notaFinal40 >= 18) {
  console.log("Excelente");
} else if (notaFinal40 >= 14) {
  console.log("Bueno");
} else if (notaFinal40 >= 11) {
  console.log("Regular");
} else {
  console.log("Reprobado");
}


/* ============================================================
   BLOQUE E - ESTRUCTURA REPETITIVA while
   ============================================================ */

// --- Ejercicio 41: Contar del 1 al 20 ---
let i41 = 1;
while (i41 <= 20) {
  console.log(i41);
  i41++;
}


// --- Ejercicio 42: Cuenta regresiva ---
let i42 = 20;
while (i42 >= 1) {
  console.log(i42);
  i42--;
}


// --- Ejercicio 43: Pares con while ---
let i43 = 2;
while (i43 <= 50) {
  console.log(i43);
  i43 += 2;
}


// --- Ejercicio 44: Impares con while ---
let i44 = 1;
while (i44 <= 49) {
  console.log(i44);
  i44 += 2;
}


// --- Ejercicio 45: Validar calificación ---
let nota45 = Number(prompt("Ingrese una nota de 0 a 20"));
while (nota45 < 0 || nota45 > 20) {
  console.log("Nota incorrecta");
  nota45 = Number(prompt("Ingrese nuevamente la nota"));
}
console.log("Nota válida:", nota45);


// --- Ejercicio 46: Contraseña correcta ---
const CLAVE46 = "senati2026";
let clave46 = prompt("Ingrese la contraseña");
while (clave46 !== CLAVE46) {
  console.log("Contraseña incorrecta");
  clave46 = prompt("Intente nuevamente");
}
console.log("Acceso correcto");


// --- Ejercicio 47: Suma progresiva ---
let i47 = 1;
let suma47 = 0;
while (i47 <= 100) {
  suma47 += i47;
  i47++;
}
console.log("Suma total:", suma47);


// --- Ejercicio 48: Tabla con while ---
let numero48 = Number(prompt("Ingrese un número"));
let i48 = 1;
while (i48 <= 12) {
  console.log(numero48 + " x " + i48 + " = " + (numero48 * i48));
  i48++;
}


// --- Ejercicio 49: Promedio con cantidad ---
let cantidad49 = Number(prompt("¿Cuántas notas se ingresarán?"));
let contador49 = 1;
let suma49 = 0;
while (contador49 <= cantidad49) {
  let nota49 = Number(prompt("Ingrese la nota " + contador49));
  suma49 += nota49;
  contador49++;
}
console.log("Promedio:", suma49 / cantidad49);


// --- Ejercicio 50: Aprobados y reprobados ---
let cantidad50 = Number(prompt("Cantidad de estudiantes"));
let contador50 = 1;
let aprobados50 = 0;
let reprobados50 = 0;
while (contador50 <= cantidad50) {
  let nota50 = Number(prompt("Nota del estudiante " + contador50));
  if (nota50 >= 11) {
    aprobados50++;
  } else {
    reprobados50++;
  }
  contador50++;
}
console.log("Aprobados:", aprobados50);
console.log("Reprobados:", reprobados50);


/* ============================================================
   BLOQUE F - ESTRUCTURA REPETITIVA for Y RETOS COMPLEJOS
   ============================================================ */

// --- Ejercicio 51: Números del 1 al 100 ---
for (let i51 = 1; i51 <= 100; i51++) {
  console.log(i51);
}


// --- Ejercicio 52: Múltiplos de 5 ---
for (let i52 = 5; i52 <= 100; i52 += 5) {
  console.log(i52);
}


// --- Ejercicio 53: Suma de pares ---
let suma53 = 0;
for (let i53 = 1; i53 <= 100; i53++) {
  if (i53 % 2 === 0) {
    suma53 += i53;
  }
}
console.log("Suma de pares:", suma53);


// --- Ejercicio 54: Factorial ---
let n54 = Number(prompt("Ingrese un número entero positivo"));
let factorial54 = 1;
for (let i54 = 1; i54 <= n54; i54++) {
  factorial54 *= i54;
}
console.log("Factorial:", factorial54);


// --- Ejercicio 55: Número primo ---
let n55 = Number(prompt("Ingrese un número"));
let divisores55 = 0;
for (let i55 = 1; i55 <= n55; i55++) {
  if (n55 % i55 === 0) {
    divisores55++;
  }
}
if (divisores55 === 2) {
  console.log("Es primo");
} else {
  console.log("No es primo");
}


// --- Ejercicio 56: Tablas del 1 al 10 (ciclos anidados) ---
for (let tabla56 = 1; tabla56 <= 10; tabla56++) {
  console.log("TABLA DEL", tabla56);
  for (let i56 = 1; i56 <= 10; i56++) {
    console.log(tabla56 + " x " + i56 + " = " + (tabla56 * i56));
  }
}


// --- Ejercicio 57: Mayor de N notas ---
let cantidad57 = Number(prompt("Cantidad de notas"));
let mayor57 = -Infinity;
for (let i57 = 1; i57 <= cantidad57; i57++) {
  let nota57 = Number(prompt("Ingrese la nota " + i57));
  if (nota57 > mayor57) {
    mayor57 = nota57;
  }
}
console.log("La nota mayor es:", mayor57);


// --- Ejercicio 58: Menor y mayor de N números ---
let cantidad58 = Number(prompt("Cantidad de números"));
let menor58 = Infinity;
let mayor58 = -Infinity;
for (let i58 = 1; i58 <= cantidad58; i58++) {
  let numero58 = Number(prompt("Ingrese el número " + i58));
  if (numero58 > mayor58) {
    mayor58 = numero58;
  }
  if (numero58 < menor58) {
    menor58 = numero58;
  }
}
console.log("Menor:", menor58);
console.log("Mayor:", mayor58);


// --- Ejercicio 59: Reporte de aula ---
let cantidad59 = Number(prompt("Cantidad de estudiantes"));
let totalAprobados59 = 0;
let totalReprobados59 = 0;
for (let e59 = 1; e59 <= cantidad59; e59++) {
  let nombreEst59 = prompt("Nombre del estudiante " + e59);
  let n1_59 = Number(prompt("Nota 1 de " + nombreEst59));
  let n2_59 = Number(prompt("Nota 2 de " + nombreEst59));
  let n3_59 = Number(prompt("Nota 3 de " + nombreEst59));
  let n4_59 = Number(prompt("Nota 4 de " + nombreEst59));
  let promedio59 = (n1_59 + n2_59 + n3_59 + n4_59) / 4;
  console.log("Estudiante:", nombreEst59, "- Promedio:", promedio59.toFixed(2));
  if (promedio59 >= 11) {
    console.log("Estado: APROBADO");
    totalAprobados59++;
  } else {
    console.log("Estado: REPROBADO");
    totalReprobados59++;
  }
}
console.log("Total aprobados:", totalAprobados59);
console.log("Total reprobados:", totalReprobados59);


// --- Ejercicio 60: Sistema integrador SENATI ---
let cantidad60 = Number(prompt("Cantidad de estudiantes"));
let totalAprobados60 = 0;
let totalReprobados60 = 0;
let sumaPromedios60 = 0;

for (let e60 = 1; e60 <= cantidad60; e60++) {
  let nombreEst60 = prompt("Nombre del estudiante " + e60);

  let n1_60 = Number(prompt("Nota 1 de " + nombreEst60));
  while (n1_60 < 0 || n1_60 > 20) {
    n1_60 = Number(prompt("Nota inválida. Ingrese Nota 1 de " + nombreEst60 + " (0-20)"));
  }
  let n2_60 = Number(prompt("Nota 2 de " + nombreEst60));
  while (n2_60 < 0 || n2_60 > 20) {
    n2_60 = Number(prompt("Nota inválida. Ingrese Nota 2 de " + nombreEst60 + " (0-20)"));
  }
  let n3_60 = Number(prompt("Nota 3 de " + nombreEst60));
  while (n3_60 < 0 || n3_60 > 20) {
    n3_60 = Number(prompt("Nota inválida. Ingrese Nota 3 de " + nombreEst60 + " (0-20)"));
  }
  let n4_60 = Number(prompt("Nota 4 de " + nombreEst60));
  while (n4_60 < 0 || n4_60 > 20) {
    n4_60 = Number(prompt("Nota inválida. Ingrese Nota 4 de " + nombreEst60 + " (0-20)"));
  }

  let promedio60 = (n1_60 + n2_60 + n3_60 + n4_60) / 4;
  sumaPromedios60 += promedio60;

  console.log("---------------------------------");
  console.log("Estudiante:", nombreEst60);
  console.log("Promedio:", promedio60.toFixed(2));

  if (promedio60 >= 18) {
    console.log("Nivel: Excelente - APROBADO");
    totalAprobados60++;
  } else if (promedio60 >= 14) {
    console.log("Nivel: Bueno - APROBADO");
    totalAprobados60++;
  } else if (promedio60 >= 11) {
    console.log("Nivel: Regular - APROBADO");
    totalAprobados60++;
  } else {
    console.log("Nivel: Reprobado");
    totalReprobados60++;
  }
}

let promedioGeneral60 = sumaPromedios60 / cantidad60;
let porcentajeAprobacion60 = (totalAprobados60 / cantidad60) * 100;

console.log("===================================");
console.log("REPORTE FINAL DEL AULA");
console.log("Promedio general del grupo:", promedioGeneral60.toFixed(2));
console.log("Total aprobados:", totalAprobados60);
console.log("Total reprobados:", totalReprobados60);
console.log("Porcentaje de aprobación:", porcentajeAprobacion60.toFixed(2) + "%");
