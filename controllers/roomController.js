const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/rooms.json");

const readRooms = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeRooms = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const getRooms = (req, res) => {
  const rooms = readRooms();
  res.render("rooms", { rooms });
};

const addRoom = (req, res) => {
  const { room_number, room_type, price_per_night } = req.body;
  const rooms = readRooms();
  const newRoom = {
    id: Date.now().toString(),
    room_number,
    room_type,
    price_per_night,
  };
  rooms.push(newRoom);
  writeRooms(rooms);
  res.redirect("/rooms");
};

module.exports = { getRooms, addRoom };
