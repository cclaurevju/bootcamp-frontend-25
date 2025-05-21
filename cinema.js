class Seat {
  constructor(rowNumber, seatNumber) {
    this.rowNumber = rowNumber;
    this.seatNumber = seatNumber;
    this.isOccupied = false;
  }

  getStatus() {
    return this.isOccupied ? "X" : "O";
  }

  reserve() {
    if (this.isOccupied) {
      return false;
    } else {
      this.isOccupied = true;
      return true;
    }
  }
}

class Cinema {
  constructor(rows, seatsPerRow) {
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    this.seats = [];

    for (let r = 1; r <= rows; r++) {
      const rowSeats = [];
      for (let s = 1; s <= seatsPerRow; s++) {
        rowSeats.push(new Seat(r, s));
      }
      this.seats.push(rowSeats);
    }
  }

  showSeatStatus() {
    console.log("Cinema seat layout:");
    for (let r = 0; r < this.rows; r++) {
      let rowDisplay = `Row ${r + 1}: `;
      for (let s = 0; s < this.seatsPerRow; s++) {
        rowDisplay += this.seats[r][s].getStatus() + " ";
      }
      console.log(rowDisplay.trim());
    }
    console.log("");
  }

  reserveSeat(rowNumber, seatNumber) {
    if (
      rowNumber < 1 ||
      rowNumber > this.rows ||
      seatNumber < 1 ||
      seatNumber > this.seatsPerRow
    ) {
      console.log(
        `Invalid seat selection: row ${rowNumber}, seat ${seatNumber}.`
      );
      return;
    }
    const seat = this.seats[rowNumber - 1][seatNumber - 1];
    if (seat.reserve()) {
      console.log(`Seat reserved at row ${rowNumber}, seat ${seatNumber}.`);
    } else {
      console.log(
        `Seat at row ${rowNumber}, seat ${seatNumber} is already occupied.`
      );
    }
  }
}

function testCinema() {
  const cinema = new Cinema(5, 10);
  cinema.showSeatStatus();

  cinema.reserveSeat(3, 5);
  cinema.showSeatStatus();

  cinema.reserveSeat(3, 5);

  cinema.reserveSeat(1, 1);
  cinema.reserveSeat(5, 10);
  cinema.showSeatStatus();
}

testCinema();
