const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

console.log("inside the petcontroller.js")

class PetController {
    getAll(req, res) {
        Pet.find()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    create(req, res) {
        console.log(req.body);
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    update(req, res) {
        Pet.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    delete(req, res) {
        Pet.remove({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new PetController();