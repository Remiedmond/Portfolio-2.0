import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuration CORS spécifique
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000', 
    'https://remi-edmond.fr', 
    'https://xoco3291.odns.fr' 
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Middleware pour les logs (utile pour débugger)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Configuration du transporteur email (Gmail)
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Votre email Gmail
    pass: process.env.EMAIL_PASS  // Votre mot de passe d'application Gmail
  }
});

// Route pour envoyer des emails
app.post('/api/contact', async (req, res) => {
  console.log('Requête reçue:', req.body);
  
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

    console.log('Email envoyé avec succès');
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
  res.json({ 
    message: 'API fonctionne correctement!',
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'remi-edmond-backend' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});