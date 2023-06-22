const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { getAllUsersController, getAllDoctorsControllers, changeAccountStatusController } = require('../controllers/adminCtrl');
router.get('/getAllUsers' , authMiddleware, getAllUsersController)
router.get('/getAllDoctors' , authMiddleware, getAllDoctorsControllers)
router.post('/changeAccountStatus' , authMiddleware , changeAccountStatusController)





module.exports = router