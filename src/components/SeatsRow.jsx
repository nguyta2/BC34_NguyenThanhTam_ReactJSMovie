import React, { Component } from "react";
import { connect } from "react-redux";
import { bookSeatAction } from "../redux/actions/BookingMovieExerciseAction";
class SeatsRow extends Component {
  renderSeats = () => {
    return this.props.seatsRow.danhSachGhe.map((seat, index) => {
      let cssSeat = "";
      let disabled = false;
      let bookingSeat = "";

      if (seat.daDat) {
        cssSeat = "gheDuocChon";
        disabled = true;
      }

      let indexBookingSeat = this.props.bookingChairsList.findIndex(
        (bookSeat) => bookSeat.soGhe === seat.soGhe
      );

      if (indexBookingSeat !== -1) {
        bookingSeat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.bookSeat(seat);
          }}
          disabled={disabled}
          className={`${cssSeat} ${bookingSeat} ghe`}
          key={index}
        >
          {seat.soGhe}
        </button>
      );
    });
  };

  renderRowNumber = () => {
    return this.props.seatsRow.danhSachGhe.map((row, index) => {
      return (
        <button key={index} className="rowNumber">
          {row.soGhe}
        </button>
      );
    });
  };

  rederSeatsRows = () => {
    if (this.props.seatRowNumber === 0) {
      return (
        <div className="ml-4">
          {this.props.seatsRow.hang} {this.renderRowNumber()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.seatsRow.hang} {this.renderSeats()}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="text-light text-left ml-5 mt-2"
        style={{ fontSize: "25px" }}
      >
        {this.rederSeatsRows()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingChairsList: state.BookingMovieExerciseReducer.bookingChairsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookSeat: (seat) => {
      dispatch(bookSeatAction(seat));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatsRow);
