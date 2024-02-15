import { Router } from "express";
import { checkAuth } from "./lib/middlewares.js";
import { getCompanyEmployeesID, getCompanyProfile, getCompanyProjectsID, getProjectUsers, getUserProfile, getUserProjects, updateProjectAccess } from "./controllers/user.js";
import { getConfigsFromFilterId, getFilterIdFromParams } from "./controllers/config.js";
const router = Router();

// router.use(checkAuth);

// USER BASED ROUTES
router.get("/get-company-employees", getCompanyEmployeesID);
router.get("/get-company-projects", getCompanyProjectsID);
router.get("/get-project-users", getProjectUsers);
router.get("/get-user-projects", getUserProjects);
router.get("/get-user-profile", getUserProfile);
router.get("/get-company-profile", getCompanyProfile);
router.post("/update-project-access", updateProjectAccess);

// CONFIG BASED ROUTES

// GET FILTER_ID FROM FILTER PARAMS
router.get("/get-filter-id-from-params", getFilterIdFromParams);

// GET APPCONFIG & PLAYERCONFIG FROM FILTER_ID
router.get("/get-configs-from-filter-id", getConfigsFromFilterId);

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