// CRUD (Create Read Update Delete)

// Create -> POST   = Buscar ou listar uma informação
// Read   -> GET    = Criar algumma nova informação
// Update -> PUT    = Atualizar uma informação existente
// Delete -> DELETE = Deletar um informação existente

// Corpo (Request Body) = Dados para criação ou atualização de um registro
// Route Params         = identificar qual reucurso eu quero atualizar ou deletar
// Query Params         = Paginação filtros, ordenação ...

import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
