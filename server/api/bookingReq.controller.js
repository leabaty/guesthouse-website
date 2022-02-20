import BookingReqDAO from "../dao/BookingReqDAO.js"

export default class BookingReqController {
  static async apiPostBookingReq(req, res, next) {
    try {
      const restaurantId = req.body.restaurant_id
      const review = req.body.text
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id
      }
      const date = new Date()

      const BookingReqResponse = await BookingReqDAO.addBookingReq(
        restaurantId,
        userInfo,
        review,
        date,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

}