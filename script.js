const nome = document.getElementById('nome');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const form = document.getElementById('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (nome.value == '' || nota1.value == '' || nota2.value == '') {
        alert('Preencha os campos!');
    } else {
        const notaFinal = ((36 - parseFloat(nota1.value) - (2 * parseFloat(nota2.value))) / 3).toFixed(1);

        resultado.innerHTML = '';
        if (notaFinal == NaN) {
            alert('Suas notas precisam ser números reais!');
        } else {
            const h3 = document.createElement('h3');
            h3.innerText = `${nome.value}, para passar de ano você precisa tirar ${notaFinal}`;
            resultado.appendChild(h3);
        }
        form.reset()
    }
})