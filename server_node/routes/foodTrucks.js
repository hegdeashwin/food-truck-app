const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require('dotenv').config()
const { HTTP_STATUS_CODE } = require('../constants')

const router = express.Router();

const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

/**
 * req - request object
 * res - response object
 * 
 * Return list of food trucks based out of filter. 
 */
router.get('/', async function(req, res) {
  let { filterByCurrentDate } = req.query

  if (!filterByCurrentDate) {
    filterByCurrentDate = 'true'
  }

  try {
    await client.connect();
    const collection = await client.db("ftaas_db").collection("food_trucks")
    let cursor = null

    if (filterByCurrentDate.toLowerCase() === 'true') {
      cursor = collection.find({
        food_truck_available_date: {
          $gte: new Date(new Date().setHours(00, 00, 00)),
          $lt: new Date(new Date().setHours(23, 59, 59)),
        },
      });
    }
    
    if (filterByCurrentDate === 'all') {
      cursor = collection.find();
    }

    const results = await cursor.toArray();
    return res.status(HTTP_STATUS_CODE.OK).send(results)
  } finally {
    await client.close();
  }
});

/**
 * req - request object
 * res - response object
 * 
 * Persist new food truck data
 */
router.post('/', async function(req, res) {
  const { foodTruckName, foodTruckAvailableDate } = req.body
  const doc = {
    food_truck_name: foodTruckName,
    food_truck_available_date: new Date(foodTruckAvailableDate)
  }

  try {
    await client.connect();
    const collection = await client.db("ftaas_db").collection("food_trucks")
    const result = await collection.insertOne(doc);
    return res.status(HTTP_STATUS_CODE.OK).send(result)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

/**
 * req - request object
 * res - response object
 * 
 * Update existing food truck data
 */
router.patch('/', async function(req, res) {
  const { foodTruckId, foodTruckName, foodTruckAvailableDate } = req.body
  const updateFilter = { _id: new ObjectId(foodTruckId) }

  let doc = {}
  if (foodTruckName || foodTruckName !== '') {
    Object.assign(doc, {
      food_truck_name: foodTruckName
    })
  }
  if (foodTruckAvailableDate || foodTruckAvailableDate !== '') {
    Object.assign(doc, {
      food_truck_available_date: new Date(foodTruckAvailableDate)
    })
  }
  
  try {
    await client.connect();
    const collection = await client.db("ftaas_db").collection("food_trucks")
    
    const updateDoc = {
      $set: doc
    };

    const result = await collection.updateOne(updateFilter, updateDoc);
    return res.status(HTTP_STATUS_CODE.OK).send(result)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

/**
 * req - request object
 * res - response object
 * 
 * Delete existing food truck data
 */
router.delete('/', async function(req, res) {
  const { foodTruckId } = req.body
  const deleteFilter = { _id: new ObjectId(foodTruckId) }

  try {
    await client.connect();
    const collection = await client.db("ftaas_db").collection("food_trucks")
    const result = await collection.deleteOne(deleteFilter);
    return res.status(HTTP_STATUS_CODE.OK).send(result)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

module.exports = router;
