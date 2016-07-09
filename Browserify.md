# Browserify

[![Browserify](images/browserify.png)](http://browserify.org/)

*Browserify* es básicamente una herramienta que nos permite gestionar dependencias en forma de módulos del lado del cliente (en el navegador). A grandes rasgos podemos decir que lo que nos permite es crear y requerir módulos tal y como hacemos con Node.js; y digo a grandes rasgos porque no es exactamente así, ya que con browserify no tendremos en el build final varios ficheros JavaScript, sino que crearemos un bundle con la herramienta y tan solo tendremos un fichero JavaScript.

## Instalación

    npm install -g browserify

## Comprobar instalación

    browserify -v

## Probar ejemplo

Dentro de **/Ejemplos/Front/Browserify/js** ejecutamos:

    npm install jquery
    browserify app.js > ../main.js