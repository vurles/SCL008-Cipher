//tengo que tener un let con un string vacio para mi ir guardando los resultado 
// recorro las letras y dentro de mi for 
//creo una let y saco codigo ascii

//hago un if para ver si pasa la condicion de mayusculas y aplico la formula de ex michel con el offset como parametro
//tomo nuevo codigo ascii y lo paso a string
//realizo else if para dejar los gatos como gatos 
//
window.cipher = {
  encode: (offset, text) => {
    let result ="";
    //console.log(result);
    for(let i = 0; i < text.length; i++){
      let asci = text.charCodeAt(i);
      // console.log(asci)
      if(asci >= 65 && asci <=90){
        let formula = (asci - 65 + parseInt(offset)) % 26 + 65;
        result += String.fromCharCode(formula);
      }else if (asci === 35){
        result += '#'
      }
     
    }
    return result;
    
  }
  /*decode: () => {
    
  }*/
};