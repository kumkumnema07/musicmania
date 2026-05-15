import db from "../config/db.js";

// ADD SUBSCRIBER
const addSubscriber = (email, callback) => {
  db.query(
    "INSERT INTO subscribers (email) VALUES (?)",
    [email],
    callback
  );
};

// GET ALL SUBSCRIBERS
const getSubscribers = (callback) => {
  db.query(
    "SELECT * FROM subscribers ORDER BY id DESC",
    callback
  );
};

export default {
  addSubscriber,
  getSubscribers,
};