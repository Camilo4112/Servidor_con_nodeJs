// Importar módulo nativo de http
const http = require('http');

// Importar el módulo 'chalk'
const chalk = require('chalk');

// Definir el host y el puerto
const host = 'localhost';
const puerto = 8080;

// Crear el servidor
const servidor = http.createServer((req, res) => {
  // Configurar la cabecera de la respuesta
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Objeto de respuesta en formato JSON
  const respuesta = {
    nombre: 'TuNombre',
    mensaje: 'Hola desde mi servidor'
  };

  // Enviar la respuesta
  res.end(JSON.stringify(respuesta));
});

// Iniciar el servidor
servidor.listen(puerto, host, () => {
  // Imprimir mensaje en consola usando chalk
  console.log(chalk.green(`Servidor escuchando en http://${host}:${puerto}`));
});
