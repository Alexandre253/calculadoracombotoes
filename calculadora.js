var valor;
var resultado;
function botao(num){
	valor = document.calc.visor.value += num;
}
function limpar(){
	document.calc.visor.value = 0;
}
function calcula(){
	resultado = eval(valor);
	document.calc.visor.value = resultado;
}