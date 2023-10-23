require("./config");
const express = require("express");
const allblogs = require("./allpost/allpost");
const registration = require("./user/user")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  try {
    const regest = new registration(req.body)
    const regester = await regest.save()
    res.send(regester)

  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      res.status(400).send("email is already in use")
    } else {
      console.log("Mongoose error:", error); // Log any Mongoose-specific errors
      res.status(500).send("An error occurred while saving the product.");
    }

  }
})
app.post("/allblogs", async (req, res) => {
  try {
    const newblog = new allblogs(req.body);
    const saveblog = await newblog.save();
    console.log(saveblog)
    res.send(saveblog);
  }
  catch (erro) {
    console.log("Mongoose error:", erro); // Log any Mongoose-specific errors
    res.status(500).send("An error occurred while saving the product.");
  }
});
app.get("/allblogs", async (req, res) => {
  try {
    const getdata = await allblogs.find();
    res.send(getdata);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while fetching the data.");
  }
});

app.get("/blogs/:firstname", async (req, res) => {
  try {
    const { firstname } = req.params;
    const getdata = await allblogs.find({ firstname: firstname });
    res.send(getdata);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while fetching the data.");
  }
});
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
