import subscriberModel from "../models/subscriberModel.js";

// ADD
export const subscribe = (req, res) => {
  const { email } = req.body;

  subscriberModel.addSubscriber(email, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error saving email" });
    }

    res.json({ message: "Subscribed successfully" });
  });
};

// GET
export const getSubscribers = (req, res) => {
  subscriberModel.getSubscribers((err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching data" });
    }

    res.json(result);
  });
};

export default {
  subscribe,
  getSubscribers,
};