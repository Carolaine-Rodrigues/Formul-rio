const form = document.querySelector('.form');
const campos = document.querySelectorAll('.requery');
const spans = document.querySelectorAll('.span1');
const emailRegex = /\S+@\S+\.\S+/;
const botao = document.getElementById('botao');


function setErro(index){
    campos[index].style.border = '2px solid  #FF0000';
    campos[index].style.borderRadius = '3px';
    spans[index].style.display = 'block';
}

function removerErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validaNome(){
    if(campos[0].value.length < 3){
        setErro(0);
    }else{
        removerErro(0);
    }
}

function validaEmail(){
    if(!emailRegex.test(campos[1].value)){
        setErro(1);
    } else{
        removerErro(1)
    }
}

function validaSenha(){
    if(campos[2].value.length < 8){
        setErro(2);
    } else {
        removerErro(2);
    }
}
