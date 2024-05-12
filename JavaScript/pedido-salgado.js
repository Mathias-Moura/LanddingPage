
function processarPedido(name, product, quantity) {
   
    const orderDetails = `${quantity}x ${product} (${name})`;

    const numeroWhatsApp = "5579991348846"; 
    const linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(orderDetails);

    document.getElementById("linkWhatsApp").href = linkWhatsApp;

    // Exibe os detalhes do pedido e o link do WhatsApp
    document.getElementById("pedidoInfo").style.display = "block";
    document.getElementById("pedidoText").value = orderDetails;
}

// Função para processar o formulário de pedido
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Coleta os dados do formulário
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    if (name.trim() === '' || product.trim() === '' || quantity.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    // Chama a função para formatar os dados do pedido e gerar o link do WhatsApp
    processarPedido(name, product, quantity);

    alert(`Pedido realizado com sucesso!`);

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '';
});
