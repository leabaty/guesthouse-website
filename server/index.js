const express = require("express");
const app = express();
require("dotenv").config();

// DEFINING THE PORT
const port = process.env.PORT || 5000;

// REQUIRING THE PACKAGES
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const log = console.log;
const path = require('path');

// BODYPARSER AND CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTE 1 - SENDING A BOOKING REQUEST (FROM CLIENT TO GUESTHOUSE)
app.post("/send_booking_request", cors(), async (req, res) => {
  try {
    let { formData } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS 
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
      },
      viewPath: path.resolve(__dirname, "views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));

    let mailOptions = {
      from: formData.email,
      to: process.env.GMAIL_USER,
      subject: " ⚠ Nouvelle demande de réservation",
      template: "bookingRequest",
      context: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        room: formData.room,
        startDate: formData.startDate,
        endDate: formData.endDate,
        adults: formData.adults,
        children: formData.children,
        bookingReq: formData.booking_request,
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    log("Error occured: " + err);
  }
});


// ROUTE 2 - SENDING A BOOKING RECAP (FROM GUESTHOUSE TO CLIENT)
app.post("/send_booking_recap", cors(), async (req, res) => {
  try {
    let { formData } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS 
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
      },
      viewPath: path.resolve(__dirname, "views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));

    let mailOptions = {
      from: process.env.MAIL_FROM,
      to: formData.email,
      subject: "Votre demande de réservation au Domaine de Bernay",
      template: "bookingRecap",
      context: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        room: formData.room,
        startDate: formData.startDate,
        endDate: formData.endDate,
        adults: formData.adults,
        children: formData.children,
        bookingReq: formData.booking_request,
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    log("Error occured: " + err);
    // return new AppError(
    //   "There was an error while sending the email. Please, try again later.",
    //   500
    // );
  }
});

// ROUTE 3 - SENDING A BOOKING REQUEST (FROM CLIENT TO GUESTHOUSE)
app.post("/send_info_request", cors(), async (req, res) => {
  try {
    let { formData } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS 
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
      },
      viewPath: path.resolve(__dirname, "views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));

    let mailOptions = {
      from: formData.email,
      to: process.env.GMAIL_USER,
      subject: " 🛈 Nouvelle demande d'information",
      template: "infoRequest",
      context: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        infoReq: formData.information_request,
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    log("Error occured: " + err);
  }
});


// ROUTE 2 - SENDING A BOOKING RECAP (FROM GUESTHOUSE TO CLIENT)
app.post("/send_info_recap", cors(), async (req, res) => {
  try {
    let { formData } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS 
      },
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
      },
      viewPath: path.resolve(__dirname, "views"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));

    let mailOptions = {
      from: process.env.MAIL_FROM,
      to: formData.email,
      subject: "Votre demande d'information au Domaine de Bernay",
      template: "infoRecap",
      context: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        infoReq: formData.information_request,
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    log("Error occured: " + err);
    // return new AppError(
    //   "There was an error while sending the email. Please, try again later.",
    //   500
    // );
  }
});

app.listen(port, () => console.log(`Server is istening on port ${port}`));
