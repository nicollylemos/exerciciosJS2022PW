window.onload =function(){
    let nomeFora = document.getElementById("nome");
    nome.focus();
   }

  function campoNome(){
    let nome = document.getElementById("nome");
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let campoOb = document.getElementsByTagName('span');
    
    if(nome.value.length == 0){
        campoOb[0].style.color="red";
        campoOb[0].innerHTML="Preencha este campo";
        a.style.visibility="visible";
        nome.style.background="#FFBABA";
        b.style.visibility="hidden";
        nome.focus();
        return false;
       
    }
    else if(nome.value.length < 3){
         campoOb[0].style.color="red";
         campoOb[0].innerHTML="Nome Inválido";
         nome.style.background="#FFBABA";
         a.style.visibility="visible";
         b.style.visibility="hidden";
         nome.focus();
         return false;
    }
    else{
        nome.style.background="white";
        campoOb[0].innerHTML="Nome válido";
        a.style.visibility="hidden";
        campoOb[0].style.color="#51BF29";
        b.style.visibility="visible";
        return true;
    }
}


function TelMascara(){
    const input = document.querySelector('input#tel');
    let inputleg = input.value.length;
    if(inputleg ===  0 ){
        input.value +=  '('
    }
    if( inputleg === 3){
        input.value += ')'
    }
    else if(inputleg === 9){
        input.value +=  '-'
    }
}


function is_cpf (c) {

    if((c = c.replace(/[^\d]/g,"")).length != 11)
      return false
  
    if (c == "00000000000")
      return false;
  
    var r;
    var s = 0;
  
    for (i=1; i<=9; i++)
      s = s + parseInt(c[i-1]) * (11 - i);
  
    r = (s * 10) % 11;
  
    if ((r == 10) || (r == 11))
      r = 0;
  
    if (r != parseInt(c[9]))
      return false;
  
    s = 0;
  
    for (i = 1; i <= 10; i++)
      s = s + parseInt(c[i-1]) * (12 - i);
  
    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
    r = 0;

  if (r != parseInt(c[10]))
    return false;

  return true;
}


function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

  function fMascEx() {
obj.value=masc(obj.value)
}

function mCPF(cpf){
    let e = document.getElementById("e");
    let f = document.getElementById("f");
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
    }
    
    cpfCheck = function (el) {
        const cpif= document.querySelector('input#cpf');
        document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? '<br><span style="color:#51BF29">CPF válido</span>' : '<br><span style="color:red">CPF Inválido</span>';
        if(el.value=='') document.getElementById('cpfResponse').innerHTML = '<span style="color:red">Preencha este campo</span>';
        if(is_cpf(el.value) == true){
          e.style.visibility="hidden";
          f.style.visibility="visible";
          cpif.style.background="white";
        }
        else{
          e.style.visibility="visible";
          f.style.visibility="hidden";
          cpif.style.background="#FFBABA";
        }
        
    }  


function TelValida(){
  const input1 = document.querySelector('input#tel');
  let campotb = document.getElementsByTagName('span');
  let g = document.getElementById("g");
  let h = document.getElementById("h");
  /* Expressões regulares são padrões utilizados para selecionar combinações
   de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. */
  var exp = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g
   /* Nesse exemplo, utilizamos uma expressão regular para validar um número de 
   telefone*/
 
 
  if(!exp.test(input1.value))
  {
    campotb[4].style.color="red";
    campotb[4].innerHTML="Número Inválido";
    g.style.visibility="visible";
    h.style.visibility="hidden";
    tel.style.background="#FFBABA";
    tel.focus();
    return false;
    
  }
  else{
    tel.style.background="white";
    campotb[4].innerHTML="Telefone válido";
    campotb[4].style.color="#51BF29";
    g.style.visibility="hidden";
    h.style.visibility="visible";
    return true;
  }
  
}

function ValidarEmail(){
  const email = document.querySelector('input#email');
  let campo = document.getElementsByTagName('span');
  let c = document.getElementById("c");
  let d = document.getElementById("d");
  
    var e =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g

    if (!e.test(email.value)) {
    campo[1].style.color="red";
    campo[1].innerHTML="E-mail Inválido";
    email.style.background="#FFBABA";
    c.style.visibility="visible";
    d.style.visibility="hidden";
    email.focus();
    return false;
        
    }
    else if(email.value.length === 0){
      campo[1].style.color="red";
      campo[1].innerHTML="Preencha esse campo";
      d.style.visibility="visible";
      b.style.visibility="hidden";
      email.style.background="#FFBABA";
      email.focus();
      return false;
    }
    else {
    email.style.background="white";
    campo[1].innerHTML="E-mail válido";
    c.style.visibility="hidden";
    d.style.visibility="visible";
    campo[1].style.color="#51BF29";
    return true;
    }

}
