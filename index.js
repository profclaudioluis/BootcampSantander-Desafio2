function calcularNivelEsaldo(nVitorias, nDerrotas) {
    let saldo = nVitorias - nDerrotas;
    let nivel; // Declaração da variável nivel
  
    if (saldo < 10) {
      nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
      nivel = "Bronze";
    } else if (saldo >=21 && saldo <= 50) {
      nivel = "Prata";
    } else if (saldo >=51 && saldo <= 80) {
      nivel = "Ouro";
    } else if (saldo >=81 && saldo <= 90) {
      nivel = "Diamante";
    } else if (saldo >=91 && saldo <= 100) {
      nivel = "Lendário";
    } else if (saldo >=101) {
      nivel = "Imortal";
    } 
  
    return { nivel: nivel, saldo: saldo }; // Retorna um objeto com nivel e saldo
  }
  
  // Chamada da função calcularNivelEsaldo
  const resultado = calcularNivelEsaldo(99, 19);
  //console.log("Nível:", resultado.nivel);
  //console.log("Saldo de Vitórias:", resultado.saldo);
  
  console.log("O herói tem saldo de **"+resultado.saldo+"** e está no nível **" +resultado.nivel+"**!");