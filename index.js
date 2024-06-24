import { MotorcycleService } from "./motorcycle.service.js";

window.onload = function () {
  // Inicializa o serviço de estoque
  let motoService = new MotorcycleService();

  motoService.getMoto(804882).then((moto) => {
    // Se a Promise for resolvida, imprime a lista de produtos no console
    console.log(moto);
  });

  motoService
    .listMotosByCategory("Sport")
    .then(function (products) {
      // Se a Promise for resolvida, imprime a lista de produtos no console
      console.log(products);

      // Obtém a referência ao da lista no HTML
      const productList = document.getElementById("moto-sport-list");

      // Limpa o conteúdo da lista antes de adicionar os novos cards de produtos
      productList.innerHTML = "";
      let cardListContent = "";

      // Itera sobre a lista de produtos e cria um card para cada produto
      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        // Cria o HTML para o card do produto
        let card = `
            <div class="card col-xs-12 col-md-6 col-lg-4">
                <img id="${product.articleId}" src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" class="card-img-top" alt="Chicago Skyscrapers"/>
                <div class="card-body">
                    <h5 class="card-title">${product.modelName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-light list-group-small">
                    <li class="list-group-item px-4">${product.yearName}</li>
                    <li class="list-group-item px-4">Dapibus ac facilisis in</li>
                    <li class="list-group-item px-4">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        
        `;
        // Adiciona o HTML do card à variável cardListContent
        cardListContent += card;
      }
      // Define o conteúdo HTML do elemento da lista de produtos com os cards criados
      productList.innerHTML = cardListContent;

      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        motoService
          .getImageByMoto(product.articleId)
          .then((moto2) => {
            document.getElementById(product.articleId).src = moto2;
          })
          .catch();
      }
    })
    .catch((error) => {
      // Se a Promise for rejeitada, exibe uma mensagem de erro usando o alertify
      //alertify.error("Não foi possível buscar os produtos.");
    })
    .finally(function () {});
};
