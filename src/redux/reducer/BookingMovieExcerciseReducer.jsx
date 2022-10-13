import { BOOK_SEAT, CANCEL_SEAT } from "../types/BookingMovieExerciseTypes";

const stateDefault = {
  bookingChairsList: [
    { soGhe: "A1", gia: 0 },
    { soGhe: "A2", gia: 0 },
  ],
};

const BookingMovieExerciseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case BOOK_SEAT: {
      let bookingChairsListUpdate = [...state.bookingChairsList];
      let bookingIndex = state.bookingChairsList.findIndex(
        (seat) => seat.soGhe === action.seat.soGhe
      );

      if (bookingIndex !== -1) {
        bookingChairsListUpdate.splice(bookingIndex, 1);
      } else {
        bookingChairsListUpdate.push(action.seat);
      }
      state.bookingChairsList = bookingChairsListUpdate;
    }
    case CANCEL_SEAT: {
      let bookingChairsListUpdate = [...state.bookingChairsList];
      let bookingIndex = state.bookingChairsList.findIndex(
        (seat) => seat.soGhe === action.seatNumber
      );

      if (bookingIndex !== -1) {
        bookingChairsListUpdate.splice(bookingIndex, 1);
      }
      state.bookingChairsList = bookingChairsListUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BookingMovieExerciseReducer;
