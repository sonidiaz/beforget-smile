# Beforget Smile

Pagina para el video de las sonrisas de Beforget.

Está desarrollada con VueJs e integra la [librería jeelizWeboji](https://github.com/jeeliz/jeelizWeboji) para obtener identificar de sonrisa del usuario y así activar el video.

Para ver en modo desarrollo el sitio web lo primero es clonar o descargar el repositorio.

    git clone https://github.com/sonidiaz/beforget-smile.git

Después

    cd beforget-smile
    npm install

Una vez realizado esto levantamos el proyecto en modo desarrollo con el siguiente comando:

    npm run serve

Para hacer el build de los archivos finales el comando es:
    
    npm run build

Es necesario copiar en el directorio `/dist` el archivo `jeefacetransferNNC.json` que se encuentra en `src/jeeliz`