const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const guestRoutes = require("./routes/guestRoutes");
const roomRoutes = require("./routes/roomRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Handlebars sozlash
app.engine("hbs", exphbs.engine({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

// Routes
app.use("/guests", guestRoutes);
app.use("/rooms", roomRoutes);
app.use("/reservations", reservationRoutes);

app.get("/", (req, res) => {
  res.redirect("/guests");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`));
