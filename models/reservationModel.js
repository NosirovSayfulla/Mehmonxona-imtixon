const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/reservations.json");

const readReservations = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeReservations = (reservations) => {
  fs.writeFileSync(filePath, JSON.stringify(reservations, null, 2));
};

const addReservation = (reservation) => {
  const reservations = readReservations();
  reservations.push(reservation);
  writeReservations(reservations);
};

module.exports = { readReservations, writeReservations, addReservation };
