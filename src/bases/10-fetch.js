const apiKey = 'WKpdqd4mz20r81gngba4rp1cepoxOyx4';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//     })
//     .catch( console.warn );
// })
// .catch( console.warn );


// otro

// peticion
// .then(response => response.json())
// .then(data => console.log(data));


//otro
// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append( img );
//     })
//     .catch( console.warn );
