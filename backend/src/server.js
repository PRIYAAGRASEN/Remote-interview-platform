import express from "express";
import { ENV } from "./lib/env.js";

const app = express()

console.log(ENV.PORT);

app.use(express.static(distPath));

// Catch all unmatched routes and serve React
app.use((req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});


app.listen(ENV.PORT, () => {
    console.log("Server running on port:", ENV.PORT);
});
