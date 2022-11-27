const express = require('express');
const app = express();
app.use(express.json());     //para habilitar o uso de JSON
/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar um recurso editar / deletar / buscar
 * Query Params => Paguinação / Filtro
 * Body Params => Os objetos inserção / alteração (JSON)
 */
app.get("/courses", (req, res) => {
  const query = req.query;  //recebe os valores passados na url ex.: courses?page=1&search=1
  console.log(query);       // Query Params
  return res.json([
    "Curso 1", "Curso 2", "Curso 3"
  ])
})

app.post("/courses", (req, res) => { 
  const body = req.body;
  console.log(body);            //Body Params
  return res.json([
    "Curso 1", "Curso 2", "Curso 3", "Curso 4"
  ])
})

app.put("/courses/:id", (req, res) => {
  const {id} = req.params;     //Recebendo o valor de um componente da request Route Params
  //const params = req.params; //recebendo toda a request Route Params
  console.log(id);
  //console.log(params);      //Imprimindo toda a request
  return res.json([
    "Curso teste de put", "Curso 1", "Curso 2", "Curso 3", "Curso 4"
  ])
})

app.patch("/courses/:id", (req, res) =>{
  return res.json([
    "Curso teste de put", "Curso teste de patch", "Curso 3", "Curso 4"
  ])
})

app.delete("/courses/:id", (req, res) =>{
  return res.json([
    "Curso teste de put", "Curso teste de patch", "Curso 4"
  ])
})
app.listen(3333);