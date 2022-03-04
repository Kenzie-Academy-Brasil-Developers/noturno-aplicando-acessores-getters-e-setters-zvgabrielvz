class Funcionario {
    constructor(nome, data, cpf, telefone, celular, pis, check) {
        this._nome          = nome;
        this._data          = data;
        this._cpf           = cpf;
        this._telefone      = telefone;
        this._celular       = celular;
        this._pis           = pis   ;
        this._check         = check;
        this.letraMaiuscula = function(e) {
            let arrayValor = e.split(" ");
            let arrayMais = arrayValor.map((e) => {
                return e[0].toUpperCase() + e.substr(1)
            })
            let output = arrayMais.join(" ");
            return output
        }
        this.removePoints         = function (e){
            let newVar = ""
        
            for (let i = 0; i < e.length; i++){
                if(e[i] === ".") {
                    newVar = newVar + e[i].replace(".","")
                }
                if(e[i] === "-") {
                    newVar = newVar + e[i].replace("-","")
                }
                if(e[i] !== "-" && e[i] !== ".") {
                    newVar = newVar + e[i]
                }
            }
            return newVar;
        
        }
        this.telCel         = function (e){
            let newVar = ""
        
            for (let i = 0; i < e.length; i++){
                if(e[i] === "(") {
                    newVar = newVar + e[i].replace("(","")
                }
                if(e[i] === ")") {
                    newVar = newVar + e[i].replace(")","")
                }
                if(e[i] === "-") {
                    newVar = newVar + e[i].replace("-","")
                }
                if(e[i] !== "-" && e[i] !== "(" && e[i] !== ")") {
                    newVar = newVar + e[i]
                }
            }
            return newVar;
        
        }
               
        
    }
    set nome(valor) {this._nome = this.letraMaiuscula(valor)}
    set data(valor) {this._data = valor};
    set cpf(valor) {this._cpf = this.removePoints(valor)};
    set telefone(valor) {this._telefone = this.telCel(valor)};
    set celular(valor) {this._celular = this.telCel(valor)};
    set pis(valor) {this._pis = this.removePoints(valor)};
    set check(valor) {this._check = valor}


    
    get nome () {return this._nome}
    get data () {return this._data}
    get cpf () {return this._cpf}
    get telefone () {return this._telefone}
    get celular () {return this._celular}
    get pis () {return this._pis}
    get check () {return this._check}

}

// console.log(campoNome.value);

const nvFun = new Funcionario;

const btEnviar = document.getElementById("btnSubmit");

const ul = document.querySelector(".cardFunc ul");

btEnviar.addEventListener("click", function recebeValor(evt){
    evt.preventDefault();
   

    const campoNome = document.getElementById("name");
    nvFun.nome = campoNome.value;
    
    const campoData = document.getElementById("birthDate");
    nvFun.data = campoData.value;
    
    const campoCpf = document.getElementById("cpf");
    nvFun.cpf = campoCpf.value;
    
    const campoPhone = document.getElementById("phone");
    nvFun.telefone = campoPhone.value;
    
    const campoCellPhone = document.getElementById("cellphone");
    nvFun.celular = campoCellPhone.value;
   
    const campoPis = document.getElementById("pis");
    nvFun.pis = campoPis.value;
    
    const campoStudies = document.getElementById("studies");
    nvFun.check = campoStudies.checked;

    const cardFunc = document.querySelector(".cardFunc");
    console.log(cardFunc)
  
    const li            = document.createElement("li");
    const li2            = document.createElement("li");
    const li3            = document.createElement("li");
    const li4            = document.createElement("li");
    const li5            = document.createElement("li");
    const li6            = document.createElement("li");
    const li7            = document.createElement("li");
    const spanNome      = document.createElement("span");
    const spanData      = document.createElement("span");
    const spanCpf       = document.createElement("span");
    const spanTelefone  = document.createElement("span");
    const spanCelular   = document.createElement("span");
    const spanPis       = document.createElement("span");
    const spanCheck     = document.createElement("span");

    spanNome.innerText = nvFun.nome;
    spanData.innerText = nvFun.data;
    spanCpf.innerText = nvFun.cpf;
    spanTelefone.innerText = nvFun.telefone;
    spanCelular.innerText = nvFun.celular;
    spanPis.innerText = nvFun.pis;
    spanCheck.innerText = nvFun.check;

    li.appendChild(spanNome);
    li2.appendChild(spanData);
    li3.appendChild(spanCpf);
    li4.appendChild(spanTelefone);
    li5.appendChild(spanCelular);
    li6.appendChild(spanPis);
    li7.appendChild(spanCheck);

        
    
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);

    
    
    cardFunc.style.border = "solid 5px red";
    


// nvFun.novoNome = "Teste123";
console.log(nvFun);   
console.log(nvFun.nome);   
    
},false);

// console.log(valor[0].toUpperCase() + valor.substr(1));

// const novoFuncionario = new Funcionario(valueNome, valueData, valueCpf, valueTelefone, valueCelular, valuePis, valueEstuda);

let test = "094.188.109-13"


function cpfAtt(e){
    let newVar = ""

    for (let i = 0; i < e.length; i++){
        if(e[i] === ".") {
            newVar = newVar + e[i].replace(".","")
        }
        if(e[i] === "-") {
            newVar = newVar + e[i].replace("-","")
        }
        if(e[i] !== "-" && e[i] !== ".") {
            newVar = newVar + e[i]
        }
    }
    return newVar;

}
