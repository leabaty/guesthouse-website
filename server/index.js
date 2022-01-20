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

app.post("/send_mail", cors(), async (req, res) => {
  let { text } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      username: process.env.MAIL_USER,
      password: process.env.MAIL_PSWD,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "test@test.com",
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px; 
    ">
    <h2>Here is your email!</h2>
    <p>${text}</p>

    <p>All the best, Darwin</p>
     </div>
    
     `,
  })
});

app.listen(port, () => console.log(`Server is istening on port ${port}`));