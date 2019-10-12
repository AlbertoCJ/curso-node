/**
 *  Async Await
 */


// let getNombre = async() => {

//     return 'Alberto';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Alberto');

        }, 3000);

    });
}


let saludo = async() => {

    let nombre = await getNombre();


    return `Hola ${ nombre }`;

}


saludo().then(mensaje => {
    console.log(mensaje);
})