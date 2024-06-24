export class MotorcycleService {
  constructor() {}

  async getMoto(id) {
    //const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=rem%C3%A9dio&page=${page}&country=br&sort_by=RELEVANCE&product_condition=ALL`;
    const url =
      "https://motorcycle-specs-database.p.rapidapi.com/article/" + id;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b0d61d9c5msh387bc0ae6456b5fp1f93f9jsn9a0d5b7255b2",
        "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
      },
    };

    try {
      // Faz uma solicitação HTTP para o 'url' especificado com as 'options' fornecidas
      const response = await fetch(url, options);

      // Imprime o objeto da classe Response no console
      console.log(response);

      // Lê o corpo da resposta e transforma em um objeto JavaScript
      // Esta chamada retorna uma Promise que resolve para o corpo da resposta como JSON
      const result = await response.json();

      // Imprime o objeto resultante (JSON) no console
      console.log(result);

      // Retorna a lista de produtos contida em result.data.products
      return result.articleCompleteInfo;
    } catch (error) {
      // Captura e imprime qualquer erro que ocorra durante a execução da solicitação ou a conversão do JSON
      console.error(error);
    }
  }

  async getImageByMoto(id) {
    //const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=rem%C3%A9dio&page=${page}&country=br&sort_by=RELEVANCE&product_condition=ALL`;
    const url = `https://motorcycle-specs-database.p.rapidapi.com/article/${id}/image/link`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b0d61d9c5msh387bc0ae6456b5fp1f93f9jsn9a0d5b7255b2",
        "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
      },
    };

    try {
      // Faz uma solicitação HTTP para o 'url' especificado com as 'options' fornecidas
      const response = await fetch(url, options);

      // Imprime o objeto da classe Response no console
      console.log(response);

      // Lê o corpo da resposta e transforma em um objeto JavaScript
      // Esta chamada retorna uma Promise que resolve para o corpo da resposta como JSON
      const result = await response.json();

      // Imprime o objeto resultante (JSON) no console
      console.log(result);

      // Retorna a lista de produtos contida em result.data.products
      return result.link;
    } catch (error) {
      // Captura e imprime qualquer erro que ocorra durante a execução da solicitação ou a conversão do JSON
      console.error(error);
    }
  }

  async listMotosByCategory(category) {
    //const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=rem%C3%A9dio&page=${page}&country=br&sort_by=RELEVANCE&product_condition=ALL`;
    const url = `https://motorcycle-specs-database.p.rapidapi.com/model/make-id/196/category/${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b0d61d9c5msh387bc0ae6456b5fp1f93f9jsn9a0d5b7255b2",
        "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
      },
    };

    try {
      // Faz uma solicitação HTTP para o 'url' especificado com as 'options' fornecidas
      const response = await fetch(url, options);

      // Imprime o objeto da classe Response no console
      //console.log(response);

      // Lê o corpo da resposta e transforma em um objeto JavaScript
      // Esta chamada retorna uma Promise que resolve para o corpo da resposta como JSON
      const result = await response.json();

      // Imprime o objeto resultante (JSON) no console
      //console.log(result);
      let motos = [];
      for (let i = 0; i < 3; i++) {
        motos.push(result[i]);
      }
      // Retorna a lista de produtos contida em result.data.products
      return motos;
    } catch (error) {
      // Captura e imprime qualquer erro que ocorra durante a execução da solicitação ou a conversão do JSON
      console.error(error);
    }
  }
}
