import express from "express";
const app = express();
app.use(express.json());

// This is the endpoint Follow Up Boss will use
app.post("/fub/inbox", (req, res) => {
  console.log("✅ FUB sent:", req.body);
  res.status(200).json({ ok: true });
});

// Health check (used by Render)
app.get("/fub/inbox", (req, res) => res.status(200).send("OK"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Text Buddy running on port ${port}`));
