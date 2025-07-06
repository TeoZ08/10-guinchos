// Aguarda o carregamento completo da página para garantir que o formulário exista
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário pelo ID que demos a ele no HTML
    const form = document.getElementById('formAgendamento');

    // Adiciona um "escutador" para o evento de 'submit' (quando o botão é clicado)
    form.addEventListener('submit', function (event) {
        // 1. Previne o comportamento padrão do formulário, que seria recarregar a página
        event.preventDefault();

        // 2. Pega o número de telefone
        const numeroTelefone = "5567998366943"; // Formato: 55 (código do país) + DDD + número

        // 3. Coleta os valores de cada campo do formulário
        const nome = document.querySelector('input[name="nome"]').value;
        const telefone = document.querySelector('input[name="telefone"]').value;
        const origem = document.querySelector('input[name="origem"]').value;
        const destino = document.querySelector('input[name="destino"]').value;
        const veiculo = document.querySelector('input[name="veiculo"]').value;
        const detalhes = document.querySelector('textarea[name="detalhes"]').value;

        // 4. Monta a mensagem de forma organizada e legível
        // O `\n` é um caractere especial que cria uma quebra de linha no WhatsApp
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
        // Isso transforma espaços em %20, quebras de linha em %0A, etc.
        const textoEncoded = encodeURIComponent(textoMensagem);

        // 6. Cria o link final para a API do WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${textoEncoded}`;

        // 7. Abre o WhatsApp em uma nova aba com a mensagem pronta
        window.open(urlWhatsApp, '_blank');

        // (Opcional) Limpa os campos do formulário depois do envio
        form.reset();
    });

});

// No final do seu script.js

// --- INICIALIZAÇÃO DO CARROSSEL SWIPER ---
const swiper = new Swiper(".mySwiper", {
    // Quantos slides são visíveis por vez
    slidesPerView: 1,
    // Espaçamento entre os slides
    spaceBetween: 30,
    // Efeito de loop (o carrossel recomeça ao chegar no final)
    loop: true,
    // Centraliza o slide ativo
    centeredSlides: true,
    // Configurações da paginação (bolinhas)
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Configurações da navegação (setas)
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Configurações de responsividade
    breakpoints: {
        // Quando a tela for maior ou igual a 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // Quando a tela for maior ou igual a 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});