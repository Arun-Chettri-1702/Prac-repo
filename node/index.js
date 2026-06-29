import express from "express";
import os from "os";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_MESSAGE || "No env set";
const HOSTNAME = process.env.HOSTNAME || os.hostname();
console.log("Checking path trigger for ci workflow");
app.get("/", (req, res) => {
    res.json({
        message: "Hello from Simple App (Node)",
        env: ENV,
        container: HOSTNAME,
    });
});

app.listen(PORT, () => {
    console.log(`Node Hello listening on ${PORT}`);
});
