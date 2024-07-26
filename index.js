const express = require("express");
const httpServer = express();
const bodyParser = require("body-parser");

httpServer.use(bodyParser.json());

httpServer.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});

// creating Room Details
const RoomDetails = [
  {
    id: 1,
    NumberOfseats: 300,
    Amenities: ["Ac", "balcony", "fan", "restroom", "bed"],
    PriceperHour: "$2000",
  },
  {
    id: 2,
    NumberOfseats: 200,
    Amenities: ["Ac", "balcony", "fan", "restroom", "bed"],
    PriceperHour: "$1500",
  },
];

httpServer.post("/creatingRoom", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: "Data update Success!",
    data: RoomDetails,
  });
});
// creating Room Details

// Booking a room
const bookingRoom = [
  {
    id: 1,
    customerName: "Ahamed",
    Date: new Date(),
    startTime: "11.00PM",
    EndTime: "11.00AM",
    roomId: "122394939",
  },
  {
    id: 2,
    customerName: "Asik",
    Date: new Date(),
    startTime: "8.00PM",
    EndTime: "11.00AM",
    roomId: "099878239",
  },
];

httpServer.post("/BookingRooms", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    message: "Data update Success!",
    data: bookingRoom,
  });
});
// Booking a room

// Rooms Booked Data
const RoomsBookedData = [
  {
    id: 1,
    roomName: "No-10",
    bookedStatus: "Booked",
    customerName: "Ahamed",
    Date: new Date(),
    startTime: "10.00PM",
    EndTime: "1.00AM",
  },
  {
    id: 2,
    roomName: "No-1",
    bookedStatus: "Booked",
    customerName: "Asik",
    Date: new Date(),
    startTime: "8.00PM",
    EndTime: "11.00AM",
  },
];

httpServer.get("/roomsbookedData", (req, res) => {
  return res.json({
    message: "Room Booked details fetch Success!",
    data: RoomsBookedData,
  });
});
// Rooms Booked Data

// customer Booked Data
const customerBookedData = [
  {
    id: 1,
    customerName: "Ahamed",
    roomName: "West-side Room",
    Date: new Date(),
    startTime: "11.00PM",
    EndTime: "11.00AM",
  },
  {
    id: 2,
    customerName: "Asik",
    roomName: "East-side Room",
    Date: new Date(),
    startTime: "8.00PM",
    EndTime: "11.00AM",
  },
];

httpServer.get("/customerRoomData", (req, res) => {
  return res.json({
    message: "Customer Room details fetch Success!",
    data: customerBookedData,
  });
});
// customer Booked Data

// how many times the customer booked the room
const customerBookedRoomData = [
  {
    id: 1,
    customerName: "Ahamed",
    roomName: "Room No-1",
    Date: new Date(),
    startTime: "11.00PM",
    EndTime: "11.00AM",
    BookingId: "913923920",
    BookingDate: new Date(),
    BookingStatus: "Booked",
  },
  {
    id: 2,
    customerName: "Ahamed",
    roomName: "Room No-1",
    Date: new Date(),
    startTime: "11.00PM",
    EndTime: "11.00AM",
    BookingId: "913923920",
    BookingDate: new Date(),
    BookingStatus: "Booked",
  },
  {
    id: 3,
    customerName: "Asik",
    roomName: "Room No-20",
    Date: new Date(),
    startTime: "7.00PM",
    EndTime: "7.00AM",
    BookingId: "09349238",
    BookingDate: new Date(),
    BookingStatus: "Booked",
  },
];

httpServer.get("/customerBookedCount", (req, res) => {
  return res.json({
    message: "Customer Booked Count fetch Success!",
    data: customerBookedRoomData,
  });
});
// how many times the customer booked the room
