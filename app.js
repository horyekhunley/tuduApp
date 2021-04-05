const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { initialize } = require("express-openapi");
const swaggerUi = require("swagger-ui-express");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.listen(3030, ()=> {
    console.log("Server running");
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// OpenAPI routes
initialize({
    app,
    apiDoc: require("./api/api-doc"),
    paths: "./api/paths",
});

// OpenAPI UI
app.use(
    "/api-documentation",
    swaggerUi.serve,
    swaggerUi.setup(null, {
        swaggerOptions: {
            url: "http://localhost:3030/api-docs",
        },
    })
);

module.exports = app;