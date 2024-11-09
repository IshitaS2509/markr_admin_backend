const express = require('express');
const About = require('../models/About');
const router = express.Router();

// Update About Content
router.post('/update', async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  try {
    let about = await About.findOne();
    if (about) {
      about.content = content;
    } else {
      about = new About({ content });
    }
    await about.save();
    res.json({ message: "Content updated successfully", about });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
