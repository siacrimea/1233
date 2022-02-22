import express from "express";
import path from "path";
//import ejs from "ejs";
import { requestTime, logger } from "./middleware.js";
import serverRoutes from "./routes/servers.js";

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "ejs"));
console.log(app.get("views"));

app.use(express.static(path.resolve(__dirname, "static")));
app.use(requestTime);
app.use(logger);

app.use(serverRoutes);

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(path.resolve(), "static", "index.html"));
// });

// app.get("/features", (req, res) => {
//     res.sendFile(path.resolve(path.resolve(), "static", "features.html"));
// });

app.get("/", (req, res) => {
    res.render("index", { title: "Main page", active: "Main" });
});

app.get("/features", (req, res) => {
    res.render("features", { title: "Features page", active: "Features" });
});

// app.get("/download", (req, res) => {
//     //console.log(req.requestTime);
//     res.download(path.resolve(path.resolve(), "static/demo", "index.html"));
// });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ...`);
});