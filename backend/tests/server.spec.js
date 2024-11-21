const request = require("supertest");
const server = require("../index")



describe("Operaciones fonda365", () => {
    it("Obteniendo un 200", async () => {
        const { body, statusCode}= await request(server).get("/comunas").send();
        expect(statusCode).toBe(200);
        expect(body).toBeInstanceOf(Array);
    });

describe("POST /comentariosxproducto", () => {
    it("Debería retornar un 200 y los datos del comentario creado", async () => {
        const payload = {
            idproducto: 123
        };

        const response = await request(server)
            .post("/comentariosxproducto")
            .send(payload);

        // Verifica el status
        expect(response.statusCode).toBe(200);

        // Verifica el cuerpo de la respuesta
        expect(response.body).toHaveProperty("idproducto", 123);
    });

    it("Debería retornar un 400 si los datos son inválidos", async () => {
        const payload = {
            productoId: 123,
            comentario: "", // Comentario vacío, no válido
            usuarioId: 456,
        };

        const response = await request(server)
            .post("/comentariosxproducto")
            .send(payload);

        // Verifica el status
        expect(response.statusCode).toBe(400);

        // Verifica el mensaje de error
        expect(response.body).toHaveProperty("message", "Datos inválidos");
    });
});
    // it("Eliminando un id inexistente", async () => {
    //     const jwt = "token";
    //     const idEliminar= 77
    //     const {statusCode} = await request(server)
    //     .delete(`/cafes/${idEliminar}`)
    //     .set("Authorization", jwt)
    //     .send();
    //     expect(statusCode).toBe(404);
    // });

    // it("Agregando un cafe nuevo", async () => {
    //     const id = Math.floor(Math.random() * 999);
    //     const nuevocafe = { id, nombre: "Caribeño" };
    //     const { statusCode } = await request(server)
    //     .post("/cafes")
    //     .send(nuevocafe);
    //     expect(statusCode).toBe(201);
    // });

    // it("actualizando id diferente", async () => {
    //     const idCafe = 1;
    //     const cafenuevo = {id: 33, nombre:"Cafe con leche"}
    //     const {statusCode} = await request(server)
    //     .put(`/cafes/${idCafe}`)
    //     .send(cafenuevo);
    //     expect(statusCode).toBe(400);
    // });

});