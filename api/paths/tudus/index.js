module.exports = () => {
    let operations = {
        GET,
        POST,
        PUT,
        DELETE,
    };
    function GET(req, res, next){
        res.status(200).json([
            {id: 0, message: "First tudu"},
            {id: 1, message: "second tudu"},
        ]);
    }
    function POST(req, res, next){
        console.log(`About to create Tudu: ${JSON.stringify(req.body)}`);
        res.status(201).send();
    }
    function PUT(req, res, next){
        console.log(`About to update tudu id: ${req.query.id}`)
        res.status(200).send();
    }
    function DELETE(req, res, next){
        console.log(`About to delete tudu id: ${req.query.id}`)
        res.status(200).send();
    }
    GET.apiDoc = {
        summary: "Fetch tudus",
        operationId: "getTudu",
        responses: {
            200: {
                description: "List of tudus",
                schema: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/Tudu",
                    },
                },
            },
        },
    };
    POST.apiDoc = {
        summary: "Create tudu",
        operationId: "createTudu",
        consumes: ["application/json"],
        parameters: [
            {
                in: "body",
                name: "tudu",
                schema: {
                    $ref: "#/definitions/Tudu",
                },
            },
        ],
        responses: {
            201: {
                description: "Created",
            },
        },
    };
    PUT.apiDoc = {
        summary: "Update tudu",
        operationId: "updateTudu",
        parameters: [
            {
                in: "query",
                name: "id",
                required: true,
                type: "string",
            },
            {
                in: "body",
                name: "tudu",
                schema: {
                    $ref: "#/definitions/Tudu",
                },
            },
        ],
        responses: {
            200: {
                description: "Update Okay",
            },
        },
    };

    DELETE.apiDoc = {
        summary: "Delete tudu",
        operationId: "deleteTudu",
        consumes: ["application/json"],
        parameters: [
            {
                in: "query",
                name: "id",
                required: true,
                type: "string",
            },
        ],
        responses: {
            200: {
                description: "Delete",
            },
        },
    };
    return operations;
}