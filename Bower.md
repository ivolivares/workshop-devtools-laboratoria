# Bower

[![Bower](images/bower.png)](https://bower.io/)

Y así, como NPM es el administrador de paquetes para NodeJS, tenemos a Bower para adminsitrar paquetes del lado del Front-End.

## Instalar Bower

Lo instalamos con NPM:

    npm install -g bower

## Comprobar instalación

    bower -v

## Instalar Paquetes Bower

Como NPM la sintaxis es muy similar, para instalar cualquier paquete Bower haremos: `bower install {paquete}``

    bower install bootstrap

¿Y si quiero la versión anterior a la final de Bootstrap?

    bower install bootstrap#2.2

## bower.json

Si, igual que en NPM tenemos el `package.json`, para bower tendremos el `bower.json`

    {
      "name": "bower example",
      "version": "1.0.0",
      "private": true,
      "dependencies": {
        "bootstrap": "~3.2.0",
        "jquery": "1",
      }
    }