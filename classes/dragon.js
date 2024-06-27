class Dragon{

  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  //Metodo instancia: pode ser chamado em qualquer instancia da classe dragon
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!! `

  }

  //so pode ser chamado dentro da class Dragon
  static getDragons(...dragons){ //... permite que o metodos aceite um numero VARIAVEL de argumentos

// Retorna um array com os nomes dos dragões. map é utilizado para criar um novo array contendo apenas os nome
//PARA CADA ELEMENTO ('DRAGON) NO ARRAY 'DRAGONS' A FUNÇÃO SETA RETORNA O VALOR DA PROPRIEDADE 'NAME' DESSE ELEMENTO
    return dragons.map(dragon => dragon.name);
  }

  }


  const puff = new Dragon("Puff", "green");
  const toothless = new Dragon("Toothless", "black");
  console.log(Dragon.getDragons(puff, toothless));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
