// Como utilizar um select

var select = document.getElementById("funcao");
var resultado = document.getElementById("resultado");

var lista1 = [];
var lista2 = [];
var lista3 = [];
var vetor = [];

//options é um vetor com as opcoes listadas. selected index = índice selecionado. é possível informar o índice manualmente ou utilizando um contador.

function selecao() {
  var opcao = select.options[select.selectedIndex].value;
  let input = document.getElementById("input").value;

  /* 1# junção de listas
    - crie e preencha dois vetores com numeros de 0-99. a quantidade de valores desses vetores deve ser definida pelo usuario. Use o mesmo valor para ambos os vetores.
    - crie uma funcao que recebe os vetores como parametro e retorna um novo vetor com os valores de ambos em ordem crescente.
    
    DICA: se preferir pode usar o método <arrayname>.sort()
    onde <arrayname>= nome da seu vetor.
    */

  if (opcao == "juncao_de_listas") {
    resultado.innerHTML = " ";
    for (let cont = 0; cont < input; cont++) {
      lista1[cont] = Math.floor(Math.random() * 100);
      lista2[cont] = Math.floor(Math.random() * 100);
    }

    lista3 = lista1.concat(lista2);
    lista3.sort(function (a, b) { return a - b; });
    resultado.innerHTML = "Lista: " + lista3;
  }

  /* 2# Procura numero
    - crie um vetor de tamanho definido pelo usuário. Popule o vetor com numeros aleatórios entre 0-99.
    - Crie uma função que verifique se o número que definiu o tamanho do vetor existe dentro dele(do próprio vetor). a função deve retornar se o número foi encontrado e qual em qual posição
     */

  if (opcao == "procura_numero") {
    resultado.innerHTML = " ";

    input = parseInt(input);
    
    for (let cont = 0; cont < input; cont++) {
      vetor[cont] = Math.floor(Math.random() * 10);
    }

    for (let cont2 = 0; cont2 < input; cont2++) {
      if (vetor[cont2] == input) {
        resultado.innerHTML = "Vetor: " + vetor + "<br>" + "O número que você digitou está no vetor " + (cont2 + 1);
      } else {
        resultado.innerHTML = "Vetor: " + vetor + "<br>" + "O número que você digitou não está no vetor";
      }
    }
  }

  /* 3# Cria simbolos
    - Crie uma função que receba um valor numerico como parametro. A função deve criar na tela quadrados, circulos e triangulos(respectivamente) repetidamente até atingir o valor recebido como parametro.
    EX: valor digiado pelo usuario foi 4.
    a função deverá criar na tela Quadrado,Circulo,triangulo,Quadrado.
    Dica: crie novas divs com a propriedade innerHTML.
    Utilize as classes quadrado,circulo,triangulo para formatar a div adequadamente.
     */

  if (opcao == "cria_simbolos") {
    resultado.style.display = "flex"
    resultado.style.flex = "wrap"
    resultado.innerHTML = "";

    var simbolo;

    for (let cont = 0; cont < parseInt(input); cont++) {
      if (cont % 3 == 0) {
        simbolo = "quadrado"
      } else if (cont % 3 == 1) {
        simbolo = "circulo"
      } else {
        simbolo = "triangulo"
      }
      resultado.innerHTML += "<div class=" + simbolo + "></div>"
    }
  }

  /* 4# mostra hora
- crie uma função que mostre a hora em tempo real na tela.
a função também deve receber um valor informado pelo usuário que corresponderá a uma diferença de horas. 
EX: usuário digitou -4. hora atual 13:23:23 e 9:23:23.
*/

  if (opcao == "mostra_hora") {
    resultado.innerHTML = " ";

    input = parseInt(input);

    // A function zero concatena a string (número) 0 em frente aos números
    // mantendo o zero na frente dos números menores que 10. Exemplo:
    // 21:05:01
    // 21:05:02
    // e assim, sucessivamente

    function add_zero(x) {
      if (x < 10) {
        x = "0" + x;
      }
      return x;
    }

    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos

    var data = new Date();
    let hours = add_zero(data.getHours());
    let minutes = add_zero(data.getMinutes());
    let seconds = add_zero(data.getSeconds());

    hours = parseInt(hours);
    hours2 = parseInt(hours2);

    var hours2 = (hours + input) % 24;

    if (hours2 < 0) {
      hours2 = Math.abs(hours2);
    }

    let time = hours + ":" + minutes + ":" + seconds;
    let time2 = hours2 + ":" + minutes + ":" + seconds;

    resultado.innerHTML = "Hora atual: " + time + " e " + time2;
    setTimeout(selecao, 1000);
  }

  /* 5# Dado um numero inteiro de 1 até 3999. crie um função que Converta esse numero para algarismo romano.
Premissas:
Símbolo       Valor
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 
I pode vir antes de V(5) e X(10) formando o número 4 e 9.
X pode vir antes de L(50) e X(100) formando o número 40 e 90.
C pode vir antes de D(500) e M(1000)) formando o número 400 e 900.
 
 */

  if (opcao == "numeral_romano") {
    resultado.innerHTML = " ";

    input = parseInt(input);

    if (input > 3999) {
      alert("Os algarismos romanos só tankam até 3999, meu nobre.")
      return printRoman;
    }

    function printRoman(input) {
      const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
      const romano = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
      let i = 12;
      while (input > 0) {
        let div = Math.floor(input / decimal[i]);
        input = input % decimal[i];
        while (div--) {
          resultado.innerHTML += romano[i];
        }
        i--;
      }
    }

    printRoman(input);

  }
  return selecao;
}

console.log(">>> O QUE CÊ TÁ OLHANDO AQUI, MEU NOBRE?\n");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀ ");
console.log("⠀⠀⣀⣤⣴⣶⣶⣿⡟⠀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀ ");
console.log("⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀ ");
console.log("⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀ ");
console.log("⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀⠀ ");
console.log("⠀⣿⣿⠁⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣧⠀⠀ ");
console.log("⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀ ");
console.log("⠀⣿⣿⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀ ");
console.log("⠀⢿⣿⡆⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀ ");
console.log("⠀⠸⣿⣧⡀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀ ");
console.log("⠀⠀⠛⢿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣰⣿⣿⣷⣶⣶⣶⣶⠶⠀⢠⣿⣿⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⣽⣿⡏⠁⠀⠀⢸⣿⡇⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⣿⣿⡇⠀⢹⣿⡆⠀⠀⠀⣸⣿⠇⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⢿⣿⣦⣄⣀⣠⣴⣿⣿⠁⠀⠈⠻⣿⣿⣿⣿⡿⠏⠀⠀⠀⠀ ");
console.log("⠀⠀⠀⠀⠀⠀⠀⠈⠛⠻⠿⠿⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀");
