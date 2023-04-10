const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// Getting all persons :
router.get('/', async (req, res) => {
  // console.log("got the req")
  // res.send("Got the request from person")
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.send('Error', err);
  }
});

// Getting individual person :
router.get('/:id', async (req, res) => {
  try {
    // since we are getting id in url (not 'body'), so we use 'params'
    const person = await Person.findById(req.params.id);
    res.json(person);
  } catch (err) {
    res.send('Sorry, No person found with that id !');
  }
});

// Saving persons in DB :
router.post('/', async (req, res) => {
  // these stuffs are send from the client side
  const person = new Person({
    name: req.body.name,
    tech: req.body.tech,
    status: req.body.status,
  });

  // here you save it to DB
  try {
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (err) {
    res.send('Error', err);
  }
});

// Updating Individual person :
router.patch('/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // returns the updated document after update operation is completed
    );
    res.json(updatedPerson);
  } catch {
    res.send("Couldn't update the following request");
  }
});

// Deleting Individual person :
router.delete("/:id", async (req, res) => {
    try {
      const deletedPerson = await Person.findOneAndDelete({ _id: req.params.id });
      if (!deletedPerson) {
        return res.status(404).send("Person not found");
      }
      res.json(deletedPerson);
    } catch {
      res.status(500).send("Could not delete the person");
    }
  });

module.exports = router;
