<script>
  import bannière from '../../img/Bannière.png';
  import './contact.css';
  
import logo from '../../img/logo.png';
  
  let formData = {
    prenom: '',
    nom: '',
    email: '',
    subject: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitMessage = '';
  
  // Configuration de l'API URL basée sur l'environnement
  const getApiUrl = () => {
    // En développement (localhost)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'http://localhost:3001/api/contact';
    }
    // En production - utiliser l'URL o2switch
    return 'https://xoco3291.odns.fr:3001/api/contact';
  };
  
  async function handleSubmit(event) {
  event.preventDefault();
  isSubmitting = true;
  submitMessage = '';
  
  try {
    console.log('Tentative d\'envoi vers:', getApiUrl());
    console.log('Données à envoyer:', formData);
    
    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      // Ajouter ces options pour éviter les problèmes CORS
      mode: 'cors',
      credentials: 'omit'
    });
    
    console.log('Statut de la réponse:', response.status);
    
    if (!response.ok) {
      // Essayer de lire le message d'erreur si possible
      let errorMessage;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || `Erreur HTTP ${response.status}`;
      } catch {
        errorMessage = `Erreur HTTP ${response.status}`;
      }
      throw new Error(errorMessage);
    }
    
    const result = await response.json();
    console.log('Réponse reçue:', result);
    
    submitMessage = 'Message envoyé avec succès !';
    
    // Reset form
    formData = {
      prenom: '',
      nom: '',
      email: '',
      subject: '',
      message: ''
    };
    
  } catch (error) {
    console.error('Erreur complète:', error);
    submitMessage = `Erreur : ${error.message}`;
    
    // Si c'est une erreur de réseau, proposer une solution alternative
    if (error.message.includes('fetch')) {
      submitMessage += ' (Problème de connexion au serveur)';
    }
  } finally {
    isSubmitting = false;
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage = '';
    }, 5000);
  }
}
</script>

<!-- Le reste de votre template reste identique -->
<svelte:head>
  <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>

<div class="contact-container">
  <img class="bannière" src={bannière} alt="Bannière">
  
  <main class="contact-main">
    <section class="contact-section">
      
      <!-- Section informations personnelles -->
      <div class="contact-info">
        <div class="profile-section">
          <img src={logo} class="logo12" alt="Logo de Rémi EDMOND">
          <h1> Rémi EDMOND</h1>
          <div class="iconess">
                  <a href="https://www.instagram.com/remi.edm.crea/"><i class='bx bxl-instagram' aria-hidden="true"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100075399970510"><i class='bx bxl-facebook-circle'
                      aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/r%C3%A9mi-edmond-375255286/"><i class='bx bxl-linkedin'
                      aria-hidden="true"></i></a>
                  <a href="https://www.youtube.com/channel/UC7Zo0pTwfNzGmmBk3IA6t5A"><i class='bx bxl-youtube'
                      aria-hidden="true"></i></a>

                </div>
        </div>
      </div>
      
      <!-- Formulaire de contact -->
      <div class="contact-form-container">
        <form on:submit={handleSubmit} class="contact-form">
          <div class="form-header">
            <h3>Prenons <span class="highlight">contact</span> !</h3>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <input 
                type="text" 
                bind:value={formData.prenom}
                placeholder="Prénom" 
                required 
                class="form-input"
              >
            </div>
            <div class="form-group">
              <input 
                type="text" 
                bind:value={formData.nom}
                placeholder="Nom" 
                required 
                class="form-input"
              >
            </div>
          </div>
          
          <div class="form-group">
            <input 
              type="email" 
              bind:value={formData.email}
              placeholder="Adresse e-mail" 
              required 
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <input 
              type="text" 
              bind:value={formData.subject}
              placeholder="Sujet" 
              required 
              class="form-input"
            >
          </div>
          
          <div class="form-group">
            <textarea 
              bind:value={formData.message}
              placeholder="Votre message..." 
              rows="6" 
              required 
              class="form-textarea"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="submit-btn" 
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              <span class="loading">Envoi en cours...</span>
            {:else}
              Envoyer le message
            {/if}
          </button>
          
          {#if submitMessage}
            <div class="success-message">{submitMessage}</div>
          {/if}
        </form>
      </div>
      
    </section>
  </main>
</div>