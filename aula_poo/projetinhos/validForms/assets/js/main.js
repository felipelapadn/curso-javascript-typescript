class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const campos_validos = this.checkFields();
        const senhas_validas = this.checkSenha();

        if(campos_validos&& senhas_validas) {
            alert("Formulário enviado.")
            this.formulario.submit();
        }
    }

    checkSenha() {
        let valid = true;
        const senha = this.formulario.querySelector(".senha");
        const senha_repetir = this.formulario.querySelector(".repetir-senha");

        if(senha.value !== senha_repetir.value){
            this.throwError(senha, `Campo "Senha" e "Repetir Senha" não pode ser diferentes.`);
            this.throwError(senha_repetir, `Campo "Senha" e "Repetir Senha" não pode ser diferentes.`);
        }
        return valid;

        if(senha.length < 3 || senha.length > 12){
            this.throwError(senha, "Senha deve ter entre 6 e 12 caracteres.");
            valid = false;
        }
    }

    checkFields() {
        let valid = true;
        
        for(let errorText of this.formulario.querySelectorAll(".error-text")){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.throwError(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validadorCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validadorUser(campo)) valid = false;
            }
        }

        return valid;
    }

    validadorUser(campo) {
        const user = campo.value;
        let valid = true;
        if(user.length < 3 || user.length > 12){
            this.throwError(campo, "Usuário deve ter entre 3 e 12 caracteres.");
            valid = false;
        }

        if(!user.match(/[a-zA-Z0-9]+$/g)){
            this.throwError(campo, "Usuário só pode conter letras e/ou números.");
            valid = false;
        }

        return true;
    }

    validadorCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.validar()){
            this.throwError(campo, "CPF inválido.");
            return false;
        }

        return true;
    }

    throwError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add("error-text");
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();