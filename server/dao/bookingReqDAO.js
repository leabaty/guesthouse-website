import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;

let bookingReq;

export default class BookingReqDAO {
  static async injectDB(conn) {
    if (bookingReq) {
      return;
    }
    try {
      bookingReq = await conn
        .db(process.env.BOOKINGREQ_NS)
        .collection("bookingReq");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addBookingReq(restaurantId, userInfo, review, date) {
    try {
      const bookingReqDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        text: review,
        restaurant_id: ObjectId(restaurantId),
      };

      return await bookingReq.insertOne(bookingReqDoc);
    } catch (e) {
      console.error(`Unable to post booking request: ${e}`);
      return { error: e };
    }
  }
}
