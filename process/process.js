//Argumentos de entrada
console.log(process.argv);

//Controlar el proceso y su salida
//process.exit(1);
// con 0 sale de buena manera, con 1 sale de buena manero pero porq hubo un error

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// current working directory
console.log(process.cwd())