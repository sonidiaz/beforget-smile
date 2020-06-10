# Beforget Smile

Pagina para el video de las sonrisas de Beforget.

Está desarrollada con VueJs e integra la [librería jeelizWeboji](https://github.com/jeeliz/jeelizWeboji) para obtener identificar de sonrisa del usuario y así activar el video.

Para ver en modo desarrollo el sitio web lo primero es clonar o descargar el repositorio.

    git clone https://github.com/sonidiaz/beforget-smile.git

Después

    cd beforget-smile
    npm install

Es necesario copiar el archivo `jeefacetransferNNC.json` que se encuentra en `src/jeeliz` en el directorio `/dist`

Una vez realizado esto levantamos el proyecto en modo desarrollo con el siguiente comando

    npm run serve

En el directorio `dist` se la versión.