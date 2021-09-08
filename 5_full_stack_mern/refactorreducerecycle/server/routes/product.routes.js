const ProductController = require('../controllers/product.controller');
module.exports = function(app){
   app.get('/api', ProductController.index);
   app.get('/api/product', ProductController.getAllProduct);
   app.get('/api/product/:id', ProductController.getProduct);
   app.post('/api/product', ProductController.createProduct);
   app.put('/api/product/:id', ProductController.updateProduct);
   app.delete('/api/product/:id', ProductController.deleteProduct);
}
