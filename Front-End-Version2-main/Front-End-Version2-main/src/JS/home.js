//Carrega o modal da tela register assim que abrir a tela home

document.addEventListener("DOMContentLoaded", function () {
    var myModal = new bootstrap.Modal(document.getElementById('meuModal'));
    myModal.show();
});

// document.getElementById('registerModal').showModal();
// document.getElementById('registerModal').close();


// Função para enconder o menu de navegação.
let lastScrollTop = 0;
const nav = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        nav.style.transform = 'translateY(-100%)';
        nav.style.transition = 'transform 0.3s ease';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});
