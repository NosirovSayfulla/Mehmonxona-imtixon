const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/guests.json");

const readGuests = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeGuests = (guests) => {
  fs.writeFileSync(filePath, JSON.stringify(guests, null, 2));
};

const addGuest = (guest) => {
  const guests = readGuests();
  guests.push(guest);
  writeGuests(guests);
};

module.exports = { readGuests, writeGuests, addGuest };
