import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { cancelSeatAction } from "../redux/actions/BookingMovieExerciseAction";

class BookingInformation extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "30px" }}>
            ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light ml-2" style={{ fontSize: "30px" }}>
            ghế đang đặt
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>
          <span className="text-light ml-2" style={{ fontSize: "30px" }}>
            ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border={2}>
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.bookingChairsList.map((bookingSeat, index) => {
                return (
                  <tr key={index}>
                    <td className="text-warning">{bookingSeat.soGhe}</td>
                    <td className="text-warning">
                      {bookingSeat.gia.toLocaleString()}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.props.dispatch(
                            cancelSeatAction(bookingSeat.soGhe)
                          )
                        }
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="text-light">Total</td>
                <td className="text-warning">
                  {this.props.bookingChairsList
                    .reduce((sum, bookingSeat, index) => {
                      return (sum += bookingSeat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingChairsList: state.BookingMovieExerciseReducer.bookingChairsList,
  };
};

export default connect(mapStateToProps, null)(BookingInformation);
