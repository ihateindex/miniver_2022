// import express from 'express';
const express = require('express');
// import work from './work';
const work = require('./work');
const contact = require('./contact');
const press = require('./press');
const posting = require('./posting');

const router = express.Router();
router.use('/work', work);
router.use('/press', press);
router.use('/contact', contact);
router.use('/posting', posting);

// export default router;
module.exports = router;