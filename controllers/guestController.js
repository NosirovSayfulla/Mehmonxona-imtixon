const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/guests.json");

const readGuests = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeGuests = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getGuests = (req, res) => {
  const guests = readGuests();
  res.render("guests", { guests });
};

const addGuest = (req, res) => {
  const { name, contact_info } = req.body;
  const guests = readGuests();
  const newGuest = {
    id: Date.now().toString(),
    name,
    contact_info,
  };
  guests.push(newGuest);
  writeGuests(guests);
  res.redirect("/guests");
};

module.exports = { getGuests, addGuest };
