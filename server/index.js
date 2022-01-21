const express = require("express");
const app = express();
require("dotenv").config();

// DEFINING THE PORT
const port = process.env.PORT || 5000;

// REQUIRING AND USING THE ??
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/send_booking_request", cors(), async (req, res) => {
  let { formData } = req.body;

  console.log(formData);
  
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: formData.email,
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px; 
    ">
    <h2>Votre demande de réservation</h2>
    <p>${formData.name}</p>

    <p>EMAIL AU CLIENT</p>
     </div>
     `,
  })
});


app.post("/send_booking_recap", cors(), async (req, res) => {
  let { formData } = req.body;
  
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "lea.baty@outlook.com",
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px; 
    ">
    <h2>Demande de réservation</h2>
    <p>${formData.name}</p>

    <p>EMAIL A ERIC</p>
     </div>
     `,
  })
});

app.listen(port, () => console.log(`Server is istening on port ${port}`));
