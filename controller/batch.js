const express = require('express');
const router = express.Router();
const mySqlConnection = require('../db.js')
const queries = require('../model/batchModel.js')

// Get all products
router.get('/', async (req, res) => {
  try {

    mySqlConnection.query(queries.SELECT_QUERY, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  try {
    mySqlConnection.query(queries.SELECT_QUERY_ID, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async(req,res)=>{
  try {
    mySqlConnection.query(queries.DELETE_QUERY, [req.params.id], function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    }); 
     } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async(req,res)=>{
  try{
    mySqlConnection.query(queries.INSERT_QUERY, [req.body.batch_name,req.body.batch_status_id,req.body.course_id], function (err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
    }catch(error){
    res.json({error:"Internal Server error"})
  }
  });

  router.put('/', async(req,res)=>{
    try{
      mySqlConnection.query(queries.UPDATE_QUERY, [req.body.batch_name,req.body.id], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
      }catch(error){
      res.status(500).json({error:'Internal server error'})
    }
  })
  
module.exports = router;