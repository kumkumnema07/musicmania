import db from "../config/db.js";

export const getPolicy = async (req, res) => {
  const { type } = req.params;
  try {
    const [rows] = await db.promise().query(
      "SELECT * FROM policies WHERE type=? LIMIT 1",
      [type]
    );
    res.json(rows[0] || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const savePolicy = async (req, res) => {
  const { type, content } = req.body;
  try {
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

    res.json({ success: true, message: "Policy saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};