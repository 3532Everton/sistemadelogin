// Variáveis
const nome = document.getElementById('nome');
const labelNome = document.getElementById('labelNome');
let validNome = false

const usuario = document.getElementById('usuario');
const labelUsuario = document.getElementById('labelUsuario');
let validUsuario = false

const senha = document.getElementById('senha');
const labelSenha = document.getElementById('labelSenha');
let validSenha = false

const confirmarSenha = document.getElementById('confirmarsenha');
const labelConfirmarSenha = document.getElementById('labelConfirmarSenha');
let validConfirmarSenha = false

const msgError = document.getElementById('msgError')
const msgSucess = document.getElementById('msgSucess')

// Validação do campo nome
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome: *Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', '')
        labelNome.innerHTML = 'Nome:'
        nome.setAttribute('style', '')
        validNome = true
    }
})

// Validação do campo usuário
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário: *Insira no mínimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', '')
        labelUsuario.innerHTML = 'Usuário:'
        usuario.setAttribute('style', '')
        validUsuario = true
    }
})

// Validação do campo senha
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha: *Insira no mínimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', '')
        labelSenha.innerHTML = 'Senha:'
        senha.setAttribute('style', '')
        validSenha = true
    }
})

// Validação do campo confirmar senha
confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red')
        labelConfirmarSenha.innerHTML = 'Confirmar Senha: *Senhas não conferem'
        confirmarSenha.setAttribute('style', 'border-color: red')
        validConfirmarSenha = false
    } else {
        labelConfirmarSenha.setAttribute('style', '')
        labelConfirmarSenha.innerHTML = 'Confirmar Senha:'
        confirmarSenha.setAttribute('style', '')
        validConfirmarSenha = true
    }
})

// Cadastro do usuário
function cadastrar(){
    if (validNome && validUsuario && validSenha && validConfirmarSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        msgSucess.innerHTML = '<strong>Cadastrado com Sucesso!</strong>'
        msgError.innerHTML = ''
        msgSucess.setAttribute('style', 'display: block')
        msgError.setAttribute('style', 'display: none')

        window.location.href = './login.html'
    } 
    else {
        msgError.innerHTML = '<strong>OPS! Ficou faltando alguma coisa, preencha todos os campos</strong>'
        msgSucess.innerHTML = ''
        msgError.setAttribute('style', 'display: block')
        msgSucess.setAttribute('style', 'display: none')
    }
}