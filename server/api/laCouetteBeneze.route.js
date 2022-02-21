import express from "express";
import BookingReqController from "./bookingReq.controller.js";

const router = express.Router();

router
  .route("/send_booking_request")
  .post(BookingReqController.emailSendBookingRequest);

router
  .route("/send_booking_recap")
  .post(BookingReqController.emailSendBookingRecap);

router.route("/saveBookingReq").post(BookingReqController.apiPostBookingRequest);

export default router;
