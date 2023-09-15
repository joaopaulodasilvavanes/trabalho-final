
function tarefa1() {
    console.log("ligar os munitores.");
}
  
  function tarefa2() {
    console.log("olhar a papelada.");
  }
  
  function tarefa3() {
    console.log("ver se o sistema de segunça esta tudo em ordem.");
  }

function tarefa4() {

}
function criarTarefa(){
    
}















  function exibirMenu() {
    console.log("Selecione uma opção:");
    console.log("1. listar tarefas");
    console.log("2. trocar tarefas");
    console.log("3. apagar tarefa");
  }
// chamar tarefas
  exibirMenu();
  
  const escolha = prompt("Digite o número da opção desejada:");
  
  if (escolha === (tarefa1)) {
    tarefa1();
  } else if (escolha === "1") {
    tarefa2();
  } else if (escolha === "2") {
    tarefa3();
  } else {
    console.log("Opção inválida.");
  } 

