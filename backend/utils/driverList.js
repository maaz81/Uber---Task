const drivers = [
  {
    name: "Raj Verma",
    phone: "9876543210",
    vehicle: "Maruti Suzuki WagonR",
    number: "TS09AB1234",
    rating: 4.7,
  },
  {
    name: "Ayesha Khan",
    phone: "9123456780",
    vehicle: "Hyundai i20",
    number: "TS08XY4567",
    rating: 4.5,
  },
  {
    name: "Amit Singh",
    phone: "9012345678",
    vehicle: "Honda City",
    number: "TS10DL6789",
    rating: 4.9,
  }
];

const assignRandomDriver = () => {
  return drivers[Math.floor(Math.random() * drivers.length)];
};

module.exports = {assignRandomDriver, drivers};
