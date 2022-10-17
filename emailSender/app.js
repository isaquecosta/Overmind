const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");
const emailAdress = require("./details-to.json");


const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000 !!!!!!");
});

app.post("/sendmail", (req, res) => {
  console.log("Carregando...");
  let form = req.body;
  sendMail(form, info => {
    console.log(`Enviado! ID: ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(form, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: `"${form.name}"<${details.email}>`,
    to: `${emailAdress.email}`,
    subject: `Overmind | ${form.name}`,
    html: `
    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
      <table border="1" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td>
          <h4>Nome</h4>
        </td>
        <td>${form.name}
        </td>
      </tr>
      <tr>
        <td>
        <h4>Email</h4>
        </td>
        <td>${form.email}
        </td>
      </tr>
      <tr>
        <td>
        <h4>Telefone</h4>
        </td>
        <td>${form.phone}
        </td>
      </tr>
      <tr>
        <td>
        <h4>Senha</h4>
        </td>
        <td>${form.pass}
        </td>
      </tr>
      <tr>
        <td>
        <h4>Validação de Senha</h4>
        </td>
        <td>${form.validPass}
        </td>
      </tr>
      </table>
      </td>`
  };

  let info = await transporter.sendMail(mailOptions);

  callback(info);
}