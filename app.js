new Vue({
  el: '#app',
  data: {
    products: [
      { image: 'assets/banana.jpg', quantity: '4', name: 'Banana', description: 'Fresh and ripe bananas', isExpired: false },
      { image: 'assets/milk.png', quantity: '1 liter', name: 'Milk', description: 'Creamy and Fresh milk', isExpired: true },
      { image: 'assets/melon.jpg', quantity: '1', name: 'Melon', description: 'Sweet and juicy melon', isExpired: false },
      { image: 'assets/water.jpg', quantity: '500 ml', name: 'Water', description: 'Refreshing water', isExpired: false },
      { image: 'assets/cabbage.jpg', quantity: '1', name: 'Cabbage', description: 'Crunchy and nutritious cabbage', isExpired: true },
      { image: 'assets/lettuce.jpg', quantity: '1', name: 'Lettuce', description: 'Fresh lettuce leaves', isExpired: false },
      { image: 'assets/mango.jpg', quantity: '3', name: 'Mango', description: 'Sweet and tropical mango', isExpired: true },
      { image: 'assets/pineapple.jpg', quantity: '2', name: 'Pineapple', description: 'Sweet and tangy pineapple', isExpired: false },
      { image: 'assets/apple.jpg', quantity: '4pc', name: 'Apple', description: 'Crisp and juicy apples', isExpired: true },
      { image: 'assets/baking_soda.png', quantity: '1', name: 'Baking Soda', description: 'For baking purposes', isExpired: false }
    ]
  },
  methods: {
    toggleExpired(product) {
      product.isExpired = !product.isExpired;
    },
    hideProduct(index) {
      this.products.splice(index, 1);
    }
  }
});
