// API Key conseguida desde 
const apiKey = 'Nd4TEqvn2SAgtkTUi8sksCtaBmheNaNc';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        //Pasar la imagen al html
        document.body.append( img );
        console.log( url );
    })
.catch( console.warn );