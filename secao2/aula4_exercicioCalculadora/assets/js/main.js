function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        init() {
            this.clickButtonObserver();
            this.clearDisplay();
            this.pressEnterObserver();
        },
        calc() {
            let conta = this.display.value
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida');
            }
        },
        pressEnterObserver() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.calc();
                }
            })
        },
        clickButtonObserver() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calc();
                }
            })
        },
        btnToDisplay(value) {
            this.display.value += value
        },
        clearDisplay() {
            this.display.value = ''
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        }
    };
}

const calculadora = criaCalculadora();
calculadora.init();