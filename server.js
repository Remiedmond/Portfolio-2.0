import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration du transporteur email (Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Votre email Gmail
    pass: process.env.EMAIL_PASS  // Votre mot de passe d'application Gmail
  }
});

// Route pour envoyer des emails
app.post('/api/contact', async (req, res) => {
  const { prenom, nom, email, subject, message } = req.body;

  // Validation des données
  if (!prenom || !nom || !email || !subject || !message) {
    return res.status(400).json({ 
      error: 'Tous les champs sont requis' 
    });
  }

  try {
    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'remi.edmond6230@gmail.com',
      subject: `[Contact Site] ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Email envoyé avec succès!' 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email' 
    });
  }
});

// Route de test
app.get('/api/test', (req, res) => {
  res.json({ message: 'API fonctionne correctement!' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});