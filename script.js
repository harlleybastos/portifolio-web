document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco); // SEMPRE ALTERAR ATUALIZA
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco); // SEMPRE ALTERAR ATUALIZA
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco); // SEMPRE ALTERAR ATUALIZA
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
    atualizarPreco();
}); // SEMPRE ALTERAR ATUALIZA

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value; //Pegar caixa de texto
    const temJS = document.querySelector("#js").checked;//Verificar se esta marcado
    const incluilayout = document.querySelector("#layout-sim").checked;
    const prazo = document.querySelector("#prazo").value;

    let preco = qtde * 100; // Valor das paginas R$ 100 por pagina
    if (temJS) preco *= 1.1;//Se tiver JS acrescenta
    if (incluilayout) preco += 500;
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia;
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;// EXIBIÇÃO E TRATAMENTO

}

