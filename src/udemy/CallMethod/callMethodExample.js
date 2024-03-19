const bookingLogic = function(passengerName)  {
  this.bookings.push({
    airline: `${this.airline}`,
    passengerName: `${passengerName}`,
  });
};
const IndigoAirline = {
  airline: "indigo",
  airLinCode: "INDGO",
  bookings: [],
  book(flightNumber, passengerName) {
    // console.log(
    //   `airline is - ${this.airline} and passenger name is - ${passengerName} will boarsd flight number - ${flightNumber} with - ${this.airLinCode}`
    // );
    console.log("this", this);
    bookingLogic.call(this, passengerName);
  },
};

IndigoAirline.book(12333, "SRIKANRH");
IndigoAirline.book(12333, "SRIKANRH111");
console.log(IndigoAirline.bookings);

const IndigoBusiness = {
  airline: "indigoBusiness",
  airLinCode: "INDGOBusiness",
  bookings: [],
};
IndigoAirline.book.call(IndigoBusiness, 897, "maihsa");
IndigoAirline.book.call(IndigoBusiness, 111, "mtest11");
console.log(IndigoBusiness.bookings);
