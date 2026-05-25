const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./server/config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./server/routes/authRoutes"));
app.use("/api/expenses", require("./server/routes/expenseRoutes"));
app.use("/api/dashboard",require("./server/routes/dashboardRoutes"));
app.use("/api/analytics",require("./server/routes/analyticsRoutes"));
app.use("/api/fraud", require("./server/routes/fraudRoutes"));
app.use("/api/chatbot", require("./server/routes/chatbotRoutes"));
app.use("/api/reports", require("./server/routes/reportRoutes"));
app.use("/api/savings", require("./server/routes/savingsRoutes"));
app.use("/api/subscriptions", require("./server/routes/subscriptionRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});