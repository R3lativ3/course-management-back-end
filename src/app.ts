import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo desde TypeScript y Express!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});