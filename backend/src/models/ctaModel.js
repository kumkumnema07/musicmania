import db from "../config/db.js";

const getCTA = (callback) => {
  db.query(
    "SELECT * FROM cta_banner ORDER BY id DESC LIMIT 1",
    callback
  );
};

const addCTA = (image, callback) => {
  db.query(
    "INSERT INTO cta_banner (image) VALUES (?)",
    [image],
    callback
  );
};

export default {
  getCTA,
  addCTA
};