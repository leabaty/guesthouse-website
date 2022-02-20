import express from "express"

const router = express.Router()

router
  .route("/bookingReq")
  .post(BookingReqCtrl.apiPostBookingReq)


export default router