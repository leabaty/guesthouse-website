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
    html: `<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Italiana&family=Jost:wght@300;400&display=swap"
      rel="stylesheet"
    />

    <style>
      .email__container {
        background-image: url("https://i.ibb.co/dDdbCQn/0-background-paper-40p.jpg");
        font-family: "Jost", sans-serif;
        min-height: 550px;
        text-align: center;
      }

      .email__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
      }

      .email__logo {
        height: 40px;
        width: 80px;
      }

      .email__title {
        font-family: "Italiana";
        font-size: 1.8em;
      }

      .email__content {
        font-size: 1.1em;
      }

      .email__greeting {
        font-size: 1.2em;
      }

      .email__footer {
        margin-top: 50px;
        background-color: #242424;
        color: white;
        padding: 10px;
        font-size: 0.9em;
      }

      .footer__content {
        font-size: 0.9em;
      }

      .footer__link {
        color: white;
      }
    </style>
    <title>Newsletter</title>
  </head>

  <body>
    <div class="email__container">
      <div class="email__header">
        <svg
          class="email__logo"
          alt="Logo Le Domaine de Bernay"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style="height: 40px; width: px"
        >
          <g class="" transform="translate(0,0)" style="">
            <path
              d="M273.764 23.62c-66.823 0-121.229 54.116-121.229 120.689 0 29.28 10.528 56.147 28.004 77.064a86.539 86.539 0 0 0-1.723 4.336c-3.952 10.807-5.462 21.415-4.386 30.719.718 6.21 2.773 12.468 6.851 16.965L135.598 398.31l-47.672-18.782-6.598 16.748 48.084 18.942-6.656 18.203-35.404-13.35L81 436.916c17.473 6.585 34.944 13.174 52.416 19.762 21.79-59.28 44.967-122.985 64.79-177.157 6.027-.835 11.645-4.313 16.206-8.61 4.434-4.179 8.385-9.48 11.695-15.636a120.583 120.583 0 0 0 20.153 6.588c.63 9.197 2.754 17.572 6.236 24.502 2.81 5.592 6.893 10.773 12.268 13.61v95.947h-56.116v18h56.116v19.228h-37.41v18h37.41v19.23h-56.116v18h74.116V299.976c5.375-2.837 9.458-8.018 12.267-13.61 3.482-6.93 5.606-15.305 6.237-24.502a120.583 120.583 0 0 0 20.152-6.588c3.31 6.156 7.261 11.457 11.695 15.635 4.561 4.298 10.178 7.777 16.207 8.611l32.867 89.87-34.746 11.23 5.536 17.127c11.799-3.812 23.597-7.627 35.396-11.441l6.686 18.279-58.436 20.453 5.947 16.99c19.557-6.848 39.115-13.693 58.672-20.539l6.64 18.16-17.798 6.422 6.11 16.932c11.602-4.183 23.203-8.37 34.804-12.557-21.677-59.615-44.958-122.945-64.754-177.054 4.078-4.496 6.134-10.755 6.852-16.965 1.076-9.304-.435-19.912-4.387-30.719a86.539 86.539 0 0 0-1.723-4.336c17.476-20.917 28.004-47.785 28.004-77.064 0-66.573-54.405-120.69-121.228-120.69zm0 18c57.141 0 103.228 45.89 103.228 102.689 0 22.64-7.33 43.544-19.758 60.503a53.525 53.525 0 0 0-5.004-5.443c-6.833-6.439-16.033-11.076-25.443-7.668-9.41 3.409-13.465 12.849-14.54 22.153-.879 7.592-.032 16.053 2.456 24.783a102.855 102.855 0 0 1-14.166 4.884c-1.023-6.606-2.878-12.657-5.506-17.886-4.21-8.379-11.262-15.865-21.267-15.865-10.006 0-17.059 7.486-21.268 15.865-2.627 5.23-4.482 11.28-5.506 17.886a102.853 102.853 0 0 1-14.166-4.886c2.488-8.729 3.333-17.19 2.455-24.781-1.076-9.304-5.129-18.744-14.539-22.153-9.41-3.408-18.61 1.23-25.443 7.668a53.525 53.525 0 0 0-5.004 5.443c-12.428-16.959-19.758-37.862-19.758-60.503 0-56.798 46.087-102.69 103.229-102.69zm-59.527 167.02c.617.075 2.49 1.653 3.144 7.315.428 3.7.152 8.54-.947 13.82a103.29 103.29 0 0 1-13.961-11.12c1.716-2.506 3.485-4.63 5.177-6.225 3.64-3.43 5.97-3.866 6.587-3.79zm125.64 3.79c1.693 1.595 3.461 3.719 5.178 6.224a103.29 103.29 0 0 1-13.961 11.121c-1.1-5.28-1.375-10.12-.948-13.82.655-5.662 2.525-7.24 3.143-7.316.618-.075 2.949.362 6.588 3.79zm-66.113 15.34c.324 0 2.623.848 5.183 5.945 1.631 3.247 3.012 7.732 3.805 12.896-2.962.253-5.959.389-8.988.389-3.03 0-6.026-.136-8.989-.389.793-5.164 2.174-9.65 3.805-12.896 2.56-5.097 4.86-5.945 5.184-5.945zm-79.246 7.802a121.914 121.914 0 0 0 15.58 11.399c-2.527 4.608-5.38 8.37-8.04 10.877-4.154 3.914-6.604 3.931-6.907 3.822-.303-.109-2.169-1.689-2.823-7.346-.558-4.829.066-11.587 2.19-18.752zm158.492 0c2.123 7.165 2.746 13.923 2.187 18.752-.654 5.657-2.52 7.237-2.822 7.346-.302.11-2.754.092-6.908-3.822-2.66-2.506-5.51-6.27-8.037-10.877a121.915 121.915 0 0 0 15.58-11.399zm-88.33 29.09c3 .222 6.028.338 9.084.338 3.055 0 6.084-.116 9.084-.338-.771 5.467-2.195 10.227-3.9 13.623-2.561 5.097-4.86 5.945-5.184 5.945-.325 0-2.623-.848-5.184-5.945-1.706-3.396-3.13-8.156-3.9-13.623z"
              fill="#000000"
              fill-opacity="1"
            ></path>
          </g>
        </svg>
        <h1 class="email__title">Le Domaine de Bernay</h1>
      </div>

      <div class="email__content">
        <p class="email__greeting">Bonjour ${formData.firstname},</p>

        <p class="email__text">
          Nous vous remercions pour votre message.
          <br />Votre demande a bien été prise en compte, vous recevrez une
          réponse sous trois jours ouvrés. <br />N'hésitez pas à nous contacter
          au 06 12 34 56 78 pour toute question ou réservation urgente.
        </p>

        <p class="email__closing">
          A très vite, <br />
          Eric & Sylvie
        </p>
      </div>

      <footer class="email__footer">
        <p>©2022 Le Domaine de Bernay</p>
        <a class="footer__link" href="www.domainedebernay.fr"
          >www.domainedebernay.fr</a
        >
        <p class="footer__content">
          3 rue du petit Chemin
          <br />17043 Bernay-Saint-Martin
        </p>

        <p>Numéro d’Identification de l’Entreprise : XXX XXX XXX XXX</p>
      </footer>
    </div>
  </body>
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
    <p>${formData.firstname}</p>

    <p>EMAIL A ERIC</p>
     </div>
     `,
  })
});

app.listen(port, () => console.log(`Server is istening on port ${port}`));
