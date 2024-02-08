import { Router } from "express";
import { checkAuth } from "./lib/middlewares.js";
const router = Router();
router.use(checkAuth);


//GET COMPANY EMPLOYEES

// GET COMPANY PROJECTS

// GET PROJECT'S USERS DETAILS

// GET USER'S PROFILE

// GET COMPANY'S PROFILE



// GET FILTER_ID FROM FILTER PARAMS

// GET APPCONFIG & PLAYERCONFIG FROM FILTER_ID

// GET APPCONFIG FROM APPCONFIG_ID

// GET PLAYERCONFIG FROM PLAYERCONFIG_ID

// GET APPCONFIG & PLAYERCONFIG FROM FILTER PARAMS (SCALE SERVER)

// CREATE NEW APPCONFIG

// CREATE NEW PLAYERCONFIG

// MAP APPCONFIG & PLAYERCONFIG TO FILTERS 



router.get("/", (req, res) => {
  res.status(200).json("Dashboard Home");
});

export default router;