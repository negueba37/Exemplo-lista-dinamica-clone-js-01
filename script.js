const btn = document.querySelector('#btnListar');
const template = document.querySelector('#tempLista');
const lista = document.querySelector('#lista');



const listarDados = () => {
    let arryDadaos = [];
    fetch("http://192.168.0.107:9000/api/listar")
        .then(
            (response) => {
                return response.json();
            })
        .then((data) => {
            arryDadaos = data;

            for (let index = 0; index < arryDadaos.length; index++) {
                template.style.display = 'block';
                template.children[0].id = 'item-lista' + (index + 1);
                let divImg = template.children[0].children[0];
                let divDescicao = template.children[0].children[0];
                let desc = divDescicao.children[1];
                let img = divImg.children[0];
                desc.id = 'desc' + (index + 1);
                img.id = 'img' + (index + 1);
                img = document.querySelector('#img' + (index + 1));
                desc = document.querySelector('#desc' + (index + 1));
                img.src = arryDadaos[index].DS_IMAGEM;
                desc.innerHTML = arryDadaos[index].DS_LOREN;
                lista.appendChild(template.cloneNode(true));
            }

            document.querySelector('#sessaoLista').children[0].style.display = 'none';

        })




}

/*btn.addEventListener('click', e => {

})*/