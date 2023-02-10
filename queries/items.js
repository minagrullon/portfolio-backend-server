const db = require("../db/dbConfig.js");

//index
const getAllItems = async () => {
  try {
    const allItems = await db.any("SELECT * FROM items");
    return allItems;
  } catch (error) {
    return error;
  }
};

//show
const getOneItem = async (id) => {
  try {
    const oneItem = await db.one("SELECT * FROM items WHERE id=$1", id);
    return oneItem;
  } catch (error) {
    return error;
  }
};

//create
const createItem = async (item) => {
  try {
    const newItem = await db.one(
      "INSERT INTO items (name, description, price, link, image, is_fav, category) values($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        item.name,
        item.description,
        item.price,
        item.link,
        item.image,
        item.is_fav,
        item.category,
      ]
    );
    return newItem;
  } catch (error) {
    return error;
  }
};

//delete
const deleteItem = async (id) => {
  try {
    const deletedItem = await db.one(
      "DELETE FROM items WHERE id=$1 RETURNING *",
      id
    );
    return deletedItem;
  } catch (error) {
    return error;
  }
};

//update
const updateItems = async (id, item) => {
  try {
    const updatedItems = await db.one(
      "UPDATE items SET name=$1, description=$2, price=$3, link=$4, image=$5, is_fav=$6, category=$7 WHERE id=$8 RETURNING *",
      [
        item.name,
        item.description,
        item.price,
        item.link,
        item.image,
        item.is_fav,
        item.category,
        id,
      ]
    );
    return updatedItems;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllItems,
  getOneItem,
  createItem,
  deleteItem,
  updateItems,
};
