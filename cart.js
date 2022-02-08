const orderItems = [
  {
    name: 'Tea',
    price: 1.99
  },
  {
      name: 'Starbucks Coffee',
      price: 8
  },
  {
      name: 'Apple',
      price: 2
  },
    {
      name: 'Cola',
      price: 1.5
  },
    {
      name: 'Sweets',
      price: 4.99
  },
    {
      name: 'Soseges',
      price: 2.8
  },
    {
      name: 'Pie',
      price: 5.99
  },
    {
      name: 'Water',
      price: 2
  }
];

function getProducts() {
    for(let i = 0; i<orderItems.length; i++){
        let a = $('<div class="col col-xs-12 col-md-6 col-lg-4"></div>');
        $('<h2>', {html: orderItems[i].name}).appendTo(a);
        $('<p>', {html: orderItems[i].price}).appendTo(a);
        $('<button>', {html: '<i class="bi bi-plus-lg"></i>', "id": i,
            'class': "btn btn-outline-primary", 'type': "button" }).appendTo(a);
        a.appendTo('.products');
    }
}

$('.products').on('click', 'button', function (e) {
    if ($('.cart').text().indexOf(orderItems[this.id].name) != -1){
        let div = $("div #"+'i_'+this.id);
        div.find('.count').text(parseInt(div.find('.count').text())+1);
        let cost = parseFloat(div.find('.cost').text())+orderItems[this.id].price;
        div.find('.cost').text(Number.parseFloat(cost).toFixed(2));
    }
    else{
        let newItem = $('<div>', {id: 'i_'+this.id}).append($('<div>', {html: orderItems[this.id].name, 'class': 'item'}));
        let countCost = $('<div>', {'class': 'row'}).append([$('<div class="count col">1</div>'),
            $('<div>', {html: orderItems[this.id].price, 'class':'cost col'})]);
        $(newItem).append(countCost).appendTo('.cart');
    }
    cheque(orderItems[this.id].price);
    console.log(this.id);
});

function cheque(cost) {
    let subtotal = parseFloat($('.subtotal .num').text())+cost;
    $('.subtotal .num').text(Number.parseFloat(subtotal).toFixed(2));
}

getProducts();