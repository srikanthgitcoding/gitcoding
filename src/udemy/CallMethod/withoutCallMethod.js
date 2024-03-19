let indigBookiList = [];
let indigoBusinessList = [];
function airLine(
  airlineName,
  airlineCOde,
  passengerName,
  bookingList,
  flightNumber,
  seatNumber
) {
  const obj = {
    airlineName,
    airlineCOde,
    passengerName,
    flightNumber,
    seatNumber,
  };
  bookingList.push(obj);
}

airLine("indigo", "INDIGO", "srikanth", indigBookiList, 123, "A1");
airLine("indigo", "INDIGO", "manisha", indigBookiList, 123, "A2");
airLine("indigo", "INDIGO", "manisha", indigoBusinessList, 123, "A2");
indigoBusinessList.push
console.log(indigBookiList);
console.log(indigoBusinessList);
