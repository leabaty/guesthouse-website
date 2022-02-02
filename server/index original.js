const express = require("express");
const app = express();
require("dotenv").config();

// DEFINING THE PORT
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.post("/send_booking_request", cors(), async (req, res) => {
  let { formData } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER || "domainedebernay@gmail.com",
      pass: process.env.GMAIL_PASS || "HLt5zGpicPG7&M$X",
    },
  });

  await transporter.sendMail({
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
    <p>${formData.firstname}</p>

    <p>EMAIL AU CLIENT</p>
     </div>
     `,
  })
});


app.post("/send_booking_recap", cors(), async (req, res) => {
  let { formData } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER || "domainedebernay@gmail.com",
      pass: process.env.GMAIL_PASS || "HLt5zGpicPG7&M$X",
    },
  });

  await transporter.sendMail({
    from: formData.email,
    to: process.env.GMAIL_USER,
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px; 
    ">
    <h2>Demande de réservation</h2>
    <p>${formData.firstname}</p>

    <p>EMAIL A ERIC</p>
     </div>
     `,
  })
});

app.listen(port, () => console.log(`Server is istening on port ${port}`));
