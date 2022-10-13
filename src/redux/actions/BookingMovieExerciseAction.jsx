import { BOOK_SEAT, CANCEL_SEAT } from "../types/BookingMovieExerciseTypes";

export const bookSeatAction = (seat) => {
  return {
    type: BOOK_SEAT,
    seat,
  };
};

export const cancelSeatAction = (seatNumber) => {
  return {
    type: CANCEL_SEAT,
    seatNumber,
  };
};
