import express from "express";
import BookingReqController from "./bookingReq.controller.js";
import InfoReqController from "./infoReq.controller.js";

const router = express.Router();

router
  .route("/save_booking_request")
  .post(BookingReqController.apiPostBookingRequest);

router
  .route("/send_booking_request")
  .post(BookingReqController.emailSendBookingRequest);

router
  .route("/send_booking_recap")
  .post(BookingReqController.emailSendBookingRecap);

router
  .route("/send_info_request")
  .post(InfoReqController.emailSendInfoRequest);

router
  .route("/send_info_recap")
  .post(InfoReqController.emailSendInfoRecap);

export default router;
