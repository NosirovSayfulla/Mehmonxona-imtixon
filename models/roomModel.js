const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/rooms.json");

const readRooms = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeRooms = (rooms) => {
  fs.writeFileSync(filePath, JSON.stringify(rooms, null, 2));
};

const addRoom = (room) => {
  const rooms = readRooms();
  rooms.push(room);
  writeRooms(rooms);
};

module.exports = { readRooms, writeRooms, addRoom };
