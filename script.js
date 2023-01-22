const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)//inicia a biblioteca
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)//quando houver um check no forumlário, chama a funcao save

function add () {
  const today = new Date().toLocaleDateString("pt-br").slice(0,-5) //recupera a a data de hj no formato DD/MM

  const dayExists = nlwSetup.dayExists(today)//função da documentação p verificar se o dia já foi inserido

  if(dayExists) {
    alert("Dia já incluso 🔴")
    return //para a funcão
  } 
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)//funcao da documentação p adicionar dia
}

function save () {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) //guardar os valores em localStorage
}

/*const data = {
  run: ["01-01", "01-02", "01-05", "01-07", "01-08", "01-10"],
}*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}//recupera os valores do localStorage
nlwSetup.setData(data)
nlwSetup.load()

