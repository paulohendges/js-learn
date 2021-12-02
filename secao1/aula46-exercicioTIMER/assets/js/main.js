function relogio() {
    function buildHourFromSeconds(seconds) {
        return new Date(seconds * 1000).toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    function start() {
        timer = setInterval(() => {
            seconds++;
            relogio.innerHTML = buildHourFromSeconds(seconds);
        }, 1000)
    }

    function stop() {
        clearInterval(timer)
    }

    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;


    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('error');
            start();
        }

        if (el.classList.contains('pausar')) {
            stop()
            relogio.classList.add('error');
        }

        if (el.classList.contains('zerar')) {
            stop();
            seconds = 0;
            relogio.classList.remove('error');
            relogio.innerHTML = '00:00:00'
        }
    });
}

relogio();
