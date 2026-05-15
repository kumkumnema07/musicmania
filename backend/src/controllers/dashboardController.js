import dashboardModel from "../models/dashboardModel.js";

const getDashboardStats = (req, res) => {

  dashboardModel.getStats((err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result[0]);

  });

};

export default {
  getDashboardStats
};