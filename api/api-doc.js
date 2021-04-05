const apiDoc = {
    swagger: "2.0",
    basePath: "/",
    info: {
        title: "Tudu app api",
        version: "1.0.0",
    },
    definitions: {
        Tudu: {
            type: "object",
            properties: {
                id: {
                    type: "number",
                },
                message: {
                    type: "string",
                },
            },
            required: ["id", "message"],
        },
    },
    paths: {},
};
module.exports = apiDoc