window.onload = function () {
    
    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        for (let id in produtos) {
            mostrarProdutoCliente.innerHTML += `<li class= "itemProduto" data-preco=${produtos[id].preco}> ${produtos[id].produto} </li> `;
        }
        console.log(mostrarProdutoCliente);
    })(produtos);


    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
    const armazenarItens = [];
    let totalPedido = 0;



    console.log(itemProduto);

    itemProduto.forEach((item) => {
        item.addEventListener('click', () => {


            if (armazenarItens.indexOf(item.textContent) == -1) {

                li = document.createElement("li");
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-preco", item.dataset.preco);

                armazenarItens.push(item.textContent);
                cestaCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.preco);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            } else {
                alert(`${item.textContent} já está na sua cesta!`);
            }
        });
    });
        
 };

    

    
    



