import db from "../config/db.js";

export const getPolicy = async (type) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM policies WHERE type=? LIMIT 1",
    [type]
  );
  return rows[0];
};

export const savePolicy = async (type, content) => {
  const [existing] = await db.promise().query(
    "SELECT * FROM policies WHERE type=?",
    [type]
  );

  if (existing.length > 0) {
    await db.promise().query(
      "UPDATE policies SET content=? WHERE type=?",
      [content, type]
    );
  } else {
    await db.promise().query(
      "INSERT INTO policies (type, content) VALUES (?, ?)",
      [type, content]
    );
  }
};