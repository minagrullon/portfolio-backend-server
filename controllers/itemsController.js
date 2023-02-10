const express = require("express");
const items = express.Router();

const {
  getAllItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItems,
} = require("../queries/items");

//import comments into items
const commentsController = require("./commentsController");
items.use("/:itemsId/comments", commentsController);

//index
items.get("/", async (req, res) => {
  const allItems = await getAllItems();
  if (allItems[0]) {
    res.status(200).json(allItems);
  } else {
    res.status(500).json({ ERROR: "Server error!" });
  }
});

//show
items.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneItem = await getOneItem(id);

  if (!oneItem.message) {
    res.status(200).json(oneItem);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

//create
items.post("/", async (req, res) => {
  try {
    const newItems = await createItem(req.body);
    res.status(200).json(newItems);
  } catch (error) {
    res.status(500).json({ ERROR: "error" });
  }
});

//delete
items.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await deleteItem(id);
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
items.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateItems(id, req.body);
    // if (updatedItem.id) {
    res.status(200).json(updatedItem);
    // } else {
    //   res.status(404).json({ error: "item not found" });
    // }
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = items;
