import express from "express";
import { profiles } from "../data/profiles.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(profiles);
});

router.get("/:id", (req, res) => {
    const profile = profiles.find(p => p.id === parseInt(req.params.id));
    if (profile) res.json(profile);
    else res.status(404).json({ message: "Profile not found" });
});

export default router;
