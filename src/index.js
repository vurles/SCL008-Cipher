/* Acá va tu código*/
 // esto es para mostar dos vista una de bienvenida y la otra ya para filtrar
document.getElementById('hello').addEventListener ('click', (evento) =>{
    evento.preventDefault();

    document.getElementById('welcome').style.display='none';
    document.getElementById('coder').style.display='block';


})
document.getElementById('cifrar').addEventListener('click', () =>{
    let text = document.getElementById('direccion').value.toUpperCase();
    let offset = document.getElementById('desplaz').value;
    let result = window.cipher.encode(offset, text);
    document.getElementById('resultado').innerHTML = result;
} )
document.getElementById('descifrar').addEventListener('click', () =>{
    let text = document.getElementById('direccion').value.toUpperCase();
    let offset = document.getElementById('desplaz').value;
    let result = window.cipher.decode(offset, text);
    document.getElementById('resultado').innerHTML = result;
} )

