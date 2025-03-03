const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/reservations.json");

const readReservations = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeReservations = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getReservations = (req, res) => {
  const reservations = readReservations();
  res.render("reservations", { reservations });
};

const addReservation = (req, res) => {
  const { guest_id, room_id, check_in_date, check_out_date, status } = req.body;
  const reservations = readReservations();
  const newReservation = {
    id: Date.now().toString(),
    guest_id,
    room_id,
    check_in_date,
    check_out_date,
    status,
  };
  reservations.push(newReservation);
  writeReservations(reservations);
  res.redirect("/reservations");
};

module.exports = { getReservations, addReservation };
