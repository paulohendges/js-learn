function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.init = () => {
        this.clickButtonObserver();
        this.clearDisplay();
        this.pressEnterObserver();
    }

    this.calc = () => {
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
    };

    this.pressEnterObserver = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.calc();
            }
        })
    };

    this.clickButtonObserver = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                console.log(el)
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
        });
    };

    this.btnToDisplay = (value) => {
        this.display.value += value
    };

    this.clearDisplay = () => {
        this.display.value = ''
    };

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
}

const calculator = new Calculadora();
calculator.init();