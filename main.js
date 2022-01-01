'Use strict'

let foto = document.querySelector('#imagenFoto');
let file = document.querySelector('#flImagem');

//para ativar o input file direto no circulo da imagem

foto.addEventListener('click', () => {
    file.click();
})

file.addEventListener('change', (e) => {

    let reader = new FileReader();

    reader.onload = () => {
        foto.src = reader.result;
    }

    reader.readAsDataURL(file.files[0])
})