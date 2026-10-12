import express from "express";
import cors from "cors";
import "dotenv/config";

import courseRoutes from "./src/routes/courseRoutes.js";
import authRoutes from "./src/routes/auth.routes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import testimonialRoutes from "./src/routes/testimonialRoutes.js";
import admissionRoutes from "./src/routes/admissionRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";
import ctaRoutes from "./src/routes/ctaRoutes.js";
import subscriberRoutes from "./src/routes/subscriberRoutes.js";
import appConfigRoutes from "./src/routes/appConfigRoutes.js";
import policyRoutes from "./src/routes/policyRoutes.js";
import "./src/config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api", courseRoutes);

app.use("/api", dashboardRoutes);
app.use("/api", testimonialRoutes);
app.use("/api", admissionRoutes);
app.use("/api", blogRoutes);
app.use("/api", ctaRoutes);
app.use("/api/policy", policyRoutes);

app.use("/api/app-config", appConfigRoutes);
app.use("/api", subscriberRoutes);


app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});

// 🔥 ERROR HANDLER (must be last)
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  console.error("Error stack:", err.stack);
  
  // Don't return the error object directly - return message only
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? {} : err
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});