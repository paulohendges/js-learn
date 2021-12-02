class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();

    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPasswords = this.isValidPasswords();
        if (validFields && validPasswords) {
            alert('enviou');
            this.formulario.submit();
        }
    }

    isValidPasswords() {
        let isValid = true;
        const passwd = this.formulario.querySelector('.senha');
        const passwdRepeat = this.formulario.querySelector('.repetir-senha');

        if (passwd.value !== passwdRepeat.value) {
            isValid = false;
            this.validationError(passwd, 'As senhas precisam ser iguais.');
            this.validationError(passwdRepeat, 'As senhas precisam ser iguais.');
        }

        if (passwd.value.length < 6 || passwd.value.length > 12) {
            isValid = false
            this.validationError(passwd, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
        return isValid;
    }

    isValidFields() {
        let isValid = true;

        for (let existingErrors of this.formulario.querySelectorAll('.error-text')) {
            existingErrors.remove();
        }

        for (let field of this.formulario.querySelectorAll('.validar'))
        {
            const label = field.previousElementSibling.innerText;
            if (!field.value) {
                this.validationError(field, `Campo [ "${label}" ] não pode ser vazio.`);
                isValid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.validaCPF(field)) isValid = false;
            }

            if (field.classList.contains('usuario')) {
                if (!this.validateUser(field)) isValid = false;
            }
        }
        return isValid;
    }

    validateUser(field) {
        const usuario = field.value
        let validUser = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.validationError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
            validUser = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.validationError(field, 'Nome de usuário precisa conter apenas letras e/ou números.');
            validUser = false;
        }
        return validUser;
    }

    validaCPF(field) {
        const cpf = new ValidaCPF(field.value);
        if (!cpf.valida()) {
            this.validationError(field, `Campo [ "CPF" ] inválido.`);
            return false;
        }
        return true;
    }

    validationError(field, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        // insere apos o campo no html
        field.insertAdjacentElement('afterend', div);
    }


}

const valida = new ValidaFormulario();