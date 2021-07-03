

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/pierry333")
    //window.location.href = "https://github.com/pierry333";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*var nome = "Pierry Leal";
var n1 = 5;
var n2 = 3;
var frase = "Frango é gostoso";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.toLocaleUpperCase())
*/

/*var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
alert(lista[0]);
*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/* var idade = prompt("Qual sua idade?")
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
} */

/* var count = 0;
while(count<=5){
    console.log(count);
    alert(count);
    count++;

} */

/* var count;
for(count=0; count<=5; count++){
    alert(count);
} */

/* var d = new Date;
alert(d.getSeconds());
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay()); */

/* function soma (n1, n2){
    return n1 + n2;
}
alert(soma(5 , 10)); */

/* function validaIdade(idade){
    var validar;
    if(idade>=18){
        return true;
    }else {
        return false;
    }
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade)); */
