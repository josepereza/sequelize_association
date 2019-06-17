# sequelize_association
simple asociacion de 1:n  - hasMany / belongTo

Globally

Install CLI globally with
```ruby
$ npm install -g sequelize-cli

// Hay realizar todos estos procesos para inicializar las tablas.Con estos procesos
// primero inicializamos  la tabla Clientes y despues la tabla Tasks

$ npm start
$ sequelize db:seed:all
$ npm start
$ sequelize db:seed:all
$ npm start
```

Con http://miip:3000/users/Task obtenemos:

![Alt text](sequelize_association.png)

Para obtener un listado de clientes con todas sus tareas tendriamos que poner:

``ruby
router.get("/Task",(req,res)=>{
Cliente.findAll({
  include: [{
      model: Task
     
  }]
}).then((result)=> res.json(result))
});

```
