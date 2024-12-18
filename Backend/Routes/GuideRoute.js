import express from "express";
import { commentGuide, createGuide, deleteGuide, getAllguides, getGuideDetails, getGuideDetailsWithAllUsers, latestGuides, likeGuide, topRatedGuide, totGuideLikes, unlikeGuide, updateGuide } from "../Controllers/GuideController.js";
import protect from "../Middleware/authMidware.js"

const router = express.Router();

router.post("/add",protect,createGuide);
router.get("/all",getAllguides);
router.put("/update/:id",updateGuide);
router.delete("/delete/:id", deleteGuide);
router.post("/like/:id",protect,likeGuide);
router.post("/unlike/:id",protect,unlikeGuide);
router.post("/comment/:id",protect,commentGuide);
router.get("/latestGuides",protect,latestGuides);
router.get("/topRated",topRatedGuide);
router.get("/totLikes/:id",totGuideLikes);
router.get("/getGuideDetails/:id",getGuideDetails);
router.get("/UsersWithComments/:id",getGuideDetailsWithAllUsers);

export default router;