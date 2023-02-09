const db = require("../db/dbConfig.js");

//index
const getAllClothes = async () => {
  try {
    const allClothes = await db.any("SELECT * FROM dog_clothes");
    return allClothes;
  } catch (error) {
    return error;
  }
};

//show
const getOneItem = async (id) => {
  try {
    const oneItem = await db.one("SELECT * FROM dog_clothes WHERE id=$1", id);
    return oneItem;
  } catch (error) {
    return error;
  }
};

//create
const createClothes = async (item) => {
  try {
    const newItem = await db.one(
      "INSERT INTO dog_clothes (name, description, price, link, image, is_fav) values($1, $2, $3, $4, $5, $6) returning *",
      [
        item.name,
        item.description,
        item.price,
        item.link,
        item.image,
        item.is_fav,
      ]
    );
    return newItem;
  } catch (error) {
    return error;
  }
};

//delete
const deleteClothes = async (item) => {
  try {
    const deletedClothes = await db.one(
      "DELETE FROM dog_clothes WHERE id=$1 RETURNING *",
      id
    );
    return deletedClothes;
  } catch (error) {
    return error;
  }
};

//update
const updateClothes = async (id, item) => {
  try {
    const updatedClothes = await db.one(
      "UPDATE dog_clothes SET name=$1, description=$2, price=$3, link=$4, image=$5, is_fav=$6 WHERE id=$7 RETURNING *",
      [
        item.name,
        item.description,
        item.price,
        item.link,
        item.image,
        item.is_fav,
        id,
      ]
    );
    return updatedClothes;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllClothes,
  getOneItem,
  createClothes,
  deleteClothes,
  updateClothes,
};
