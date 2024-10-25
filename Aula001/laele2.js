let n1 = parseFloat(prompt("Digite número: "));
//parseInt para inteiros
//parseFloat para reais
//Number caso o tipo de número seja diferente
let n2 = Number(prompt("Digite outro número: "));
let media = (n1 + n2) / 2; 

alert(`Média ${media.toFixed(2)}`);

if (media < 5) {
    alert("Você é jão");
} else if (media <= 8) {
    alert("ta bom calabreso, calma");
} else {
    alert("Aprovado demaise toscaneso")
}