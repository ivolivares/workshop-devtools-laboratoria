# Gulp

[![Gulp](./images/gulp.png)](http://gulpjs.com/)

Gulp.js es un build system (sistema de construcción) que permite automatizar tareas comunes de desarrollo, tales como la minificación de código JavaScript, recarga del navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

Como verás no importa si eres un desarrollador Front-End, Back-End ó los dos a la vez. Si hoy en día no quieres perder tiempo realizando tareas comunes “manualmente”, es momento de que aprendas a usar un automatizador como Gulp.js.

Adicionalmente Gulp.js está construído con Javascript, funciona sobre Node.js y es Open Source, así que su código fuente [lo puedes encontrar en github](https://github.com/gulpjs/gulp/).

# Porqué me debería interesar usar Gulp? 

Porque hoy en día el flujo de trabajo de un desarrollador Front-End se ha vuelto más complejo, usamos muchas herramientas de desarrollo, por lo cual configurar cada tarea y ejecutarla “manualmente” y por separado requiere demasiado tiempo.

Porque Gulp.js no sólo soluciona este problema sino que le aporta mejoras, convirtiendose en una herramienta que tiene prácticamente todo en uno, así mismo nos permite administrar y controlar todas esas tareas en un solo lugar.

## Instalación

    npm install --global gulp-cli

## Comprobar instalación

    gulp -v

## Inicializar el proyecto:

    npm init

## Instalar Gulp en tus devDependencies

    npm install --save-dev gulp

## Crea tu gulpfile.js en la raíz de tu proyecto

    var gulp = require('gulp');

    gulp.task('default', function() {
      // acá va el código de tu tarea
    });

## Ejecuta Gulp

    gulp

Las tareas definidas de Gulp serán ejecutadas y no hará nada ya que como muestra el ejemplo, no hemos escrito el código de nuestra tarea.

### Tip

Para ejecutar tareas individuales use `gulp <task> <othertask>`
