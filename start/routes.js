'use strict'

const Route = use('Route');

// User
Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');

// Products
Route.post('/products', 'ProductController.create').middleware(['auth']);
Route.get('/products', 'ProductController.show').middleware(['auth']);
Route.put('/products/:id', 'ProductController.update').middleware(['auth']);
Route.delete('/products/:id', 'ProductController.remove').middleware(['auth']);

// Sales
Route.get('/sales', 'SaleController.show').middleware(['auth']);
Route.post('/sales', 'SaleController.create').middleware(['auth']);

// Actions
Route.post('/like/:ProductId', 'LikeController.create').middleware(['auth']);
Route.get('/like/:ProductId', 'LikeController.show').middleware(['auth']);

Route.post('/comment/:ProductId', 'CommentController.create').middleware(['auth']);
Route.get('/comment/:ProductId', 'CommentController.show').middleware(['auth']);
Route.get('/comment/all/:ProductId', 'CommentController.showAll').middleware(['auth']);
Route.delete('/comment/:CommentId', 'CommentController.remove').middleware(['auth']);