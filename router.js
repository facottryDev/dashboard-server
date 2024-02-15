import { Router } from "express";
import { checkAuth } from "./lib/middlewares.js";
import { getCompanyEmployeesID, getCompanyProfile, getCompanyProjectsID, getProjectUsers, getUserProfile, getUserProjects, giveProjectAccess } from "./controllers/user.js";
const router = Router();

// router.use(checkAuth);

//GET COMPANY EMPLOYEES
router.get("/get-company-employees", getCompanyEmployeesID);

// GET COMPANY PROJECTS
router.get("/get-company-projects", getCompanyProjectsID);

// GET PROJECT'S USERS DETAILS
router.get("/get-project-users", getProjectUsers);

// GET USER'S PROJECTS
router.get("/get-user-projects", getUserProjects);

// GET USER'S PROFILE
router.get("/get-user-profile", getUserProfile);

// GET COMPANY'S PROFILE
router.get("/get-company-profile", getCompanyProfile);

// GIVE PROJECT ACCESS TO USER
router.post("/give-project-access", giveProjectAccess);


// GET FILTER_ID FROM FILTER PARAMS

// GET APPCONFIG & PLAYERCONFIG FROM FILTER_ID

// GET APPCONFIG FROM APPCONFIG_ID

// GET PLAYERCONFIG FROM PLAYERCONFIG_ID

// GET APPCONFIG & PLAYERCONFIG FROM FILTER PARAMS (SCALE SERVER)

// CREATE NEW APPCONFIG

// CREATE NEW PLAYERCONFIG

// MAP APPCONFIG & PLAYERCONFIG TO FILTERS 



router.get("/", (req, res) => {
  res.status(200).json(req.user);
});

export default router;