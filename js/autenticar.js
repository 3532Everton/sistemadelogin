

// Entrada do usuário
function entrar(){
    // Variáveis
    const usuario = document.getElementById('usuario');
    const labelUsuario = document.getElementById('labelUsuario');
    
    const senha = document.getElementById('senha');
    const labelSenha = document.getElementById('labelSenha');
    
    const msgError = document.getElementById('msgError')
    
    let listaUser = []
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = ''
        
        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        labelUsuario.setAttribute('style', 'color: red; border-color: red;')
        usuario.setAttribute('style', 'border-color: red;')
        labelSenha.setAttribute('style', 'color: red; border-color: red;')
        senha.setAttribute('style', 'border-color: red;')
        msgError.setAttribute('style', 'display: block;')
        msgError.innerText = 'Usuário ou senha incorretos'
        usuario.focus()

    }
}