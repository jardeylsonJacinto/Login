import Express from "express";
import user from "./src/controller/UserController";
const app = Express();
const PORT = 3000;

app.use(Express.json())
app.use(user);

app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
