const Pets = require("../controllers/pets");

module.exports = function(app) {
    app.get("/api/pets", Pets.getAll);
    app.post("/api/pets/new", Pets.create);
    app.get("/api/pets/view/:_id", Pets.getOne);
    app.get("/api/pets/edit/:_id", Pets.getOne);
    app.put("/api/pets/edit/:_id", Pets.update);
    app.delete("/api/pets/delete/:_id", Pets.delete);
}