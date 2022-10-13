import React, { Component } from "react";
import BookingInformation from "./BookingInformation";
import "./BookingMovieExcercise.css";
import seatsData from "../Data/danhSachGhe.json";
import SeatsRow from "./SeatsRow";

export default class BookingMovieExcercise extends Component {
  renderSeats = () => {
    return seatsData.map((seatsRow, index) => {
      return (
        <div key={index}>
          <SeatsRow seatsRow={seatsRow} seatRowNumber={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-8 text-center">
              <div className="text-warning display-4">
                ĐẶT VÉ XEM PHIM CYBERLERN.VN
              </div>
              <div className="mt-2 text-light" style={{ fontSize: "25px" }}>
                Màn hình
              </div>
              <div className="mt-2 d-flex justify-content-center">
                <div className="screen"></div>
              </div>
              {this.renderSeats()}
            </div>
            <div className="col-lg-4">
              <div className="mt-2 text-light display-4">
                DANH SÁCH GHẾ BẠN CHỌN
              </div>
              <BookingInformation />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
