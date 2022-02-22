import BookingReqDAO from "../dao/bookingReqDAO.js";

import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

const log = console.log;

export default class BookingReqController {
  static async apiPostBookingRequest(req, res, next) {
    try {
      let { formData } = req.body;

      const requestDate = new Date().toLocaleString('fr-FR', { timeZone: 'CET' });
      const firstname = formData.firstname;
      const lastname = formData.lastname;
      const phone = formData.phone;
      const email = formData.email;
      const bookingInfo = {
        room: formData.room,
        startDate: new Date(formData.startDate).toLocaleString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
        }),
        endDate: new Date(formData.endDate).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
          weekday: "long",
        }),
        adults: formData.adults,
        children: formData.children,
        specialRequest: formData.booking_request,
      };

      await BookingReqDAO.addBookingReq(
        requestDate,
        firstname,
        lastname,
        phone,
        email,
        bookingInfo
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async emailSendBookingRequest(req, res, next) {
    try {
      let { formData } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: "./views/layouts",
          defaultLayout: false,
        },
        viewPath: "./views/layouts",
        extName: ".handlebars",
      };

      transporter.use("compile", hbs(handlebarOptions));

      let mailOptions = {
        from: formData.email,
        to: process.env.GMAIL_USER,
        subject: "⚠ Nouvelle demande de réservation",
        template: "bookingRequest",
        context: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          email: formData.email,
          room: formData.room,
          startDate: new Date(formData.startDate).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
          }),
          endDate: new Date(formData.endDate).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
          }),
          adults: formData.adults,
          children: formData.children,
          bookingReq: formData.booking_request,
        },
      };

      await transporter.sendMail(mailOptions);
    } catch (err) {
      log("Error occured: " + err);
    }
  }

  static async emailSendBookingRecap(req, res, next) {
    try {
      let { formData } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: "./views/layouts",
          defaultLayout: false,
        },
        viewPath: "./views/layouts",
        extName: ".handlebars",
      };

      transporter.use("compile", hbs(handlebarOptions));

      let mailOptions = {
        from: process.env.MAIL_FROM,
        to: formData.email,
        subject: "Votre demande de réservation à La Couette Benèze",
        template: "bookingRecap",
        context: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          email: formData.email,
          room: formData.room,
          startDate: new Date(formData.startDate).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
          }),
          endDate: new Date(formData.endDate).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
          }),
          adults: formData.adults,
          children: formData.children,
          bookingReq: formData.booking_request,
        },
      };

      await transporter.sendMail(mailOptions);
    } catch (err) {
      log("Error occured: " + err);
    }
  }
}
