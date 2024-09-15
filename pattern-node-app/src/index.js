const express = require("express");
const cors = require("cors");
const PORT = 8000;
const app = express();
const routes = require("./routes/index.js");
app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
