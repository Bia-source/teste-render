import express from "express";

export const app = express();
const port = 2020;

app.use(express.json());
app.get("/users", (req,res)=> {
    res.json({teste:"teste"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na port ${port}`)
});