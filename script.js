// Aguarda o carregamento completo da página para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", function () {

    // --- LÓGICA DO FORMULÁRIO DE AGENDAMENTO ---

    // Seleciona o formulário e o botão de envio
    const form = document.getElementById('formAgendamento');
    const formButton = document.querySelector('#formAgendamento button[type="submit"]');

    // Adiciona um "escutador" para o evento de 'submit'
    form.addEventListener('submit', function (event) {
        // 1. Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // 2. Pega o número de telefone para contato
        const numeroTelefone = "5567998366943"; // Formato: 55 (país) + DDD + número

        // 3. Coleta os valores de cada campo do formulário
        const nome = document.querySelector('input[name="nome"]').value;
        const telefone = document.querySelector('input[name="telefone"]').value;
        const origem = document.querySelector('input[name="origem"]').value;
        const destino = document.querySelector('input[name="destino"]').value;
        const veiculo = document.querySelector('input[name="veiculo"]').value;
        const detalhes = document.querySelector('textarea[name="detalhes"]').value;

        // 4. Monta a mensagem para o WhatsApp de forma organizada
        const textoMensagem = `
  Olá! Gostaria de solicitar um orçamento/agendamento de guincho.
  
  *INFORMAÇÕES:*
  ---------------------
  *Nome:* ${nome}
  *Telefone para Contato:* ${telefone}
  *Endereço de Retirada:* ${origem}
  *Endereço de Entrega:* ${destino}
  *Veículo:* ${veiculo}
  *Detalhes Adicionais:* ${detalhes || 'Nenhum'}
  ---------------------
  
  Aguardo o retorno. Obrigado!
      `;

        // 5. Codifica a mensagem para ser usada em um link de URL
        const textoEncoded = encodeURIComponent(textoMensagem);

        // 6. Cria o link final para a API do WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${textoEncoded}`;

        // 7. Abre o WhatsApp em uma nova aba
        window.open(urlWhatsApp, '_blank');

        // --- MELHORIA DE FEEDBACK PARA O USUÁRIO ---
        // Guarda o texto original do botão
        const originalButtonText = formButton.textContent;
        // Muda o texto do botão e o desabilita para dar feedback e evitar cliques duplos
        formButton.textContent = 'Mensagem pronta! Abrindo...';
        formButton.disabled = true;

        // Após 3 segundos, restaura o botão ao estado original
        setTimeout(() => {
            formButton.textContent = originalButtonText;
            formButton.disabled = false;
        }, 3000);

        // Limpa os campos do formulário após o envio
        form.reset();
    });

    // --- INICIALIZAÇÃO DO CARROSSEL SWIPER ---
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });


    // --- INICIALIZAÇÃO DA GALERIA LIGHTBOX (GLIGHTBOX) ---
    const lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
    });
});


