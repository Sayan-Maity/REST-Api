const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// GET all :
router.get('/', async (req, res) => {
  try {
    const persons = await Person.find().sort({"ranking" : 1}); // to sort in ascending order
    res.status(201).json(persons);
  } catch (err) {
    res.status(400).send('Error');
  }
});

// GET single :
router.get('/:id', async (req, res) => {
  try {
    const persons = await Person.findById(req.params.id);
    res.status(201).json(persons);
  } catch (err) {
    res.status(400).send('Error', err);
  }
});

// POST (General Format):
// router.post('/', async (req, res) => {
    //   const person = await Person({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
//     contact: req.body.contact,
//     email: req.body.email,
//     location: {
//       city: req.body.location.city,
//       country: req.body.location.country,
//       geolocation: {
    //         latitude: req.body.location.geolocation.latitude,
    //         longitude: req.body.location.geolocation.longitude,
//       },
//     },
//   });
//   try {
//     const addPerson = await person.save();
//     res.json(addPerson);
//   } catch (err) {
    //     res.send('Error', err);
    //   }
    // });
    

// POST (Good Format):
router.post('/', async (req, res) => {
  const {
    name: {
      firstName,
      middleName,
      lastName,
    },
    contact,
    email,
    ranking,
    location: {
      city,
      country,
      geolocation: { latitude, longitude },
    },
  } = req.body;

  try {
    const addPerson = await Person({
      name: {
        firstName,
        middleName,
        lastName,
      },
      contact,
      email,
      ranking,
      location: {
        city,
        country,
        geolocation: { latitude, longitude },
      },
    }).save();

    res.status(201).json(addPerson);
  } catch (err) {
    res.status(500).send('Error', err);
  }
});


// UPDATE :
router.patch('/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      // here you are id in url(thats why params) and not from body
      req.params.id,
      req.body,
      { new: true } // return the updated document after the updation is completed
    );
    res.json(updatedPerson);
  } catch (err) {
    res.send("Couldn't update the following request");
  }
});

// DELETE :
router.delete('/:id', async (req, res) => {
  try {
    const deletePerson = await Person.findByIdAndRemove({ _id: req.params.id });
    if (!deletePerson) {
      return res.status(404).send('Person not found !');
    }
    res.json(deletePerson);
  } catch (err) {
    res.status(500).send("Couldn't delete the person");
  }
});

module.exports = router;
