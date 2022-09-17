// const apiKey = 'WKpdqd4mz20r81gngba4rp1cepoxOyx4';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


// const getImagePromesa = () =>{
//     return new Promise( (resolve, reject) => {
//         resolve(peticion)
//     })
// }

// getImagePromesa().then(console.log)

// =======================================

// const getImagePromesa = () => 
//     new Promise(resolve => resolve(peticion))

// getImagePromesa().then(console.log)

// ========================================================
// const getImagen = async() =>{
//     return(peticion)
// }

// getImagen().then(console.log)

// ===================================================
export const getImagen = async() =>{
    try {
        const apiKey = 'WKpdqd4mz20r81gngba4rp1cepoxOyx4';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );
        return url   

    } catch (error) {
        console.error(error);   
        return 'no se encontro la imagen';
    }
}

// getImagen()