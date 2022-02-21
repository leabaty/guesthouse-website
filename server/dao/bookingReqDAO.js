// import mongodb from "mongodb";
// const ObjectId = mongodb.ObjectID;

let bookingRequests;

export default class BookingReqDAO {
  static async injectDB(conn) {
    if (bookingRequests) {
      return;
    }
    try {
      bookingRequests = await conn
        .db(process.env.BOOKINGREQ_NS)
        .collection("bookingRequests");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addBookingReq(requestDate, firstname, lastname, phone, email, bookingInfo) {
    try {
      const bookingReqDoc = {
        // user_id: ObjectId(email),
        requestDate: requestDate,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        room: bookingInfo.room,
        endDate: bookingInfo.endDate,
        startDate: bookingInfo.startDate,
        adults: bookingInfo.adults,
        children: bookingInfo.children,
        specialRequest: bookingInfo.specialRequest,
      };

      return await bookingRequests.insertOne(bookingReqDoc);
    } catch (e) {
      console.error(`Unable to post booking request: ${e}`);
      return { error: e };
    }
  }
}
