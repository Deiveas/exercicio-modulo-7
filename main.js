const form = document.getElementById('form-op');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = parseInt(document.getElementById('campo-A').value);
    const campoB = parseInt(document.getElementById('campo-B').value);
    const mensageValid = `<b>A < B "formulário válido!"</b>`;
    const mensageInvalid = `<b> A > B "formulário Inválido!"</b>`;
    const numeroIguais = `<b>"Não digite números iguais"</b>`;

    const containerMensageValid = document.querySelector('.valid');
    const containerMensageInvalid = document.querySelector('.invalid');
    const numeroIguaisMensage = document.querySelector('.stop-reload');

    if (campoB > campoA) {

        containerMensageValid.innerHTML = mensageValid;
        containerMensageValid.style.display = 'block';
        containerMensageInvalid.style.display = 'none';
        numeroIguaisMensage.style.display = 'none';
        console.log('valido');


    } else if (campoA === campoB) {

        numeroIguaisMensage.innerHTML = numeroIguais;
        numeroIguaisMensage.style.display = 'block';
        containerMensageValid.style.display = 'none';
        containerMensageInvalid.style.display = 'none';

    } else {

        containerMensageInvalid.innerHTML = mensageInvalid;
        containerMensageInvalid.style.display = 'block';
        containerMensageValid.style.display = 'none';
        numeroIguaisMensage.style.display = 'none';
        console.log('invalido');

    }

});