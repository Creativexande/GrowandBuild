// Função para clonar os serviços e preencher o espaço vazio
function cloneServices() {
  const container = document.querySelector('.container');
  const services = document.querySelectorAll('.service');
  const serviceWidth = services[0].offsetWidth + 20; // Largura do serviço mais a margem direita

  // Verifique se a largura atual do container é menor que a largura dos serviços
  while (container.offsetWidth < serviceWidth * services.length) {
      const clone = services[0].cloneNode(true);
      container.appendChild(clone);
  }
}

// Chame a função para clonar os serviços
cloneServices();
