const entrada = require('prompt-sync')({ sigint: true});
var cmessage = '';
var cnivel = '';
var nLs = 0;
var cname = entrada("Qual é o nome do herói? ");
var nxp = parseInt(entrada("Qual a quantidade de XP do herói? "),10);

//Declaração de array multidimensional com xp (De/até) | nível
var lsnivel = [
  [0, 1000,"Ferro"],  
  [1001, 2000, "Bronze"], 
  [2001, 5000, "Prata"], 
  [6001, 7000, "Ouro"], 
  [7001, 8000, "Platina"], 
  [8001, 9000, "Ascendente"], 
  [9001, 10000, "Imortal"], 
  [10000, ,"Radiante"]
]

for (nLs = 1; nLs <= lsnivel.length; nLs++) { 
  if(nxp >= lsnivel[nLs-1][0] && nxp <= lsnivel[nLs-1][1]){
    cnivel = lsnivel[nLs-1][2];
    cmessage = "O Héroi de nome " + cname + " está no nível de " + cnivel;
    break;
  }
  else if(nxp > lsnivel[lsnivel.length -1][0]){
    cnivel    = lsnivel[lsnivel.length -1][2];
    cmessage  = "O Héroi de nome " + cname + " está no nível de " + cnivel;
  }
  else{
    cmessage = "O Héroi de nome " + cname + " possui um nível fora do range ";
  }
}

console.log(cmessage);