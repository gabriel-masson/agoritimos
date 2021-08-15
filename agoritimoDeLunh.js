function CardValidar(numero){
	
	Object.defineProperty(this,'isValido',{
		enumerable:true,
		configurable: false,
		set:(validade) =>{
		isValido = validade;
		},
		get:() => isValido
	})
	Object.defineProperty(this,'numero',{
		enumerable:true,
		value:numero
	})
}
CardValidar.prototype.derivar = function (digito) {
	/*função responsavel em unificar o numero
	ex: 16 -> 1+6 = 7
	*/
	let [d1,d2] =digito.toString()
	
	return  Number(d1) + Number(d2)
	
}
CardValidar.prototype.calcDigit= function(){
	
	let array = []
	for(let i = this.numero.length-1; i >= 0 ;i--){
		//responsavel por operar *2 nos indices impar
		if(i%2 == 1 ){
			let digito = Number(this.numero[i]*2);
			if(digito>9){digito = this.derivar(digito)}
			array.push(digito)
		}else{
			array.push(Number(this.numero[i]))
		}
	}
	//retorna a soma do array completo
	return array.reduce((acumulador,valor)=>{
		acumulador+=valor
		return acumulador
	},0)

	
	
}
CardValidar.prototype.validar = function () {
	
	if( typeof this.numero !== 'string'){
		console.log("erro")
	}
	
	//variavel recebe array com a operações ja mult
	let somaTot  = this.calcDigit();
	//calcular o mod 10
	this.isValido = somaTot % 10 === 0?  true: false
	 
	
}

let n1 = new CardValidar('49927398716')//eses é true
n1.validar()
console.log("o numero é " + n1.isValido)
