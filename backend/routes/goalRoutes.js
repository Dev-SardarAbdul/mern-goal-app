const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all Goals" });
});

router.get("/:id", (req, res) => {
  res.send({ message: "Get individual goal" });
});

router.post("/", (req, res) => {
  res.send({ message: "Create A Goal" });
});

router.delete("/:id", (req, res) => {
  res.send({ message: "Delete A Goal" });
});

router.patch("/:id", (req, res) => {
  res.send({ message: "Update A Goal" });
});

module.exports = router;
