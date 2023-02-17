const express = require('express');
const router = express.Router();

// Importing Jobs controller methods
const {
    getJobs, 
    getJob,
    newJob,
    getJobsInRadius,
    updateJob,
    deleteJob,
    jobStats
    } = require('../controllers/jobsController')

router.route('/jobs').get(getJobs)
router.route('/job/:id/:slug').get(getJob)
router.route('/job/new').post(newJob)
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)
router.route('/stats/:topic').get(jobStats)
router.route('/job/:id')
    .put(updateJob)
    .delete(deleteJob);

module.exports = router;