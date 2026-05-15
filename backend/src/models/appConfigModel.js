import db from "../config/db.js";

// GET
const getAppConfig = async () => {
  const [rows] = await db.promise().query("SELECT * FROM app_config LIMIT 1");
  return rows[0];
};

// CREATE
const createAppConfig = async (data) => {
  const {
    app_name,
    email,
    phone,
    address,
    facebook_link,
    instagram_link,
    youtube_link,
  } = data;

  const [result] = await db.promise().query(`
    INSERT INTO app_config
    (app_name, email, phone, address, facebook_link, instagram_link, youtube_link)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [app_name, email, phone, address, facebook_link, instagram_link, youtube_link]);

  return result;
};

// UPDATE
const updateAppConfig = async (id, data) => {
  const {
    app_name,
    email,
    phone,
    address,
    facebook_link,
    instagram_link,
    youtube_link,
  } = data;

  const [result] = await db.promise().query(`
    UPDATE app_config SET
    app_name=?, email=?, phone=?, address=?,
    facebook_link=?, instagram_link=?, youtube_link=?
    WHERE id=?
  `, [app_name, email, phone, address, facebook_link, instagram_link, youtube_link, id]);

  return result;
};

export default {
  getAppConfig,
  createAppConfig,
  updateAppConfig
};