import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import { main_routes } from "./routes/main.routes";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(main_routes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
