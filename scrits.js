const key = "5418f25f70eeb2bbb8d54a45c13b7180"

function colocarDados(dados) {
    console.log(dados);
    document.querySelector(".city").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".temp").innerHTML = `Temperatura ${dados.main.temp}ºC`;
      document.querySelector(".texto-previsao").innerHTML = `${dados.weather[0].description}`;
       document.querySelector(".umudade").innerHTML = `Umidade: ${dados.main.humidity}%`;
         document.querySelector(".img-previsao").src=  `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(respota => respota.json())
    console.log(dados)
    colocarDados(dados);

}

function cliquebutao() {


    const cidade = document.querySelector(".input-city").value;
    buscarCidade(cidade);

}