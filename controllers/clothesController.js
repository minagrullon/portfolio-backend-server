const express = require("express");
const clothes = express.Router();

const {
  getAllClothes,
  getOneItem,
  createClothes,
  deleteClothes,
  updateClothes,
} = require("../queries/clothes");

//index
clothes.get("/", async (req, res) => {
  const allClothes = await getAllClothes();
  if (allClothes[0]) {
    res.status(200).json(allClothes);
  } else {
    res.status(500).json({ ERROR: "Server error!" });
  }
});

//show
clothes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneItem = await getOneItem(id);

  if (!oneItem.message) {
    res.status(200).json(oneItem);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

//create
clothes.post("/", async (req, res) => {
  try {
    const newClothes = await createClothes();
    res.status(200).json(newClothes);
  } catch (error) {
    res.status(500).json({ ERROR: "error" });
  }
});

//delete
clothes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await deleteClothes(id);
    if (deletedItem.id) {
      res.status(200).json(deletedItem);
    } else {
      res.status(404).json({ error: "item not found" });
    }
  } catch (error) {
    return error;
  }
});

//update
clothes.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateClothes(id);
    if (updatedItem.id) {
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ error: "item not found" });
    }
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = clothes;
