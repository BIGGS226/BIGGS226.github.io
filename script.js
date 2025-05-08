
document.getElementById("formulaireReservation").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Récupérer les données
    const nom = document.getElementById("nom").value;
    const compagnie = document.getElementById("compagnie").value;
    const trajet = document.getElementById("trajet").value;
    const date = document.getElementById("date").value;
    const paiement = document.getElementById("paiement").value;
  
    // Format de date lisible
    const dateLisible = new Date(date).toLocaleDateString("fr-FR", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    // Message personnalisé
    const message = `
      🎉 Bonjour ${nom} !<br><br>
      Votre réservation pour le trajet <strong>${trajet}</strong> avec la compagnie <strong>${compagnie}</strong> 
      le <strong>${dateLisible}</strong> a bien été enregistrée.<br><br>
      Moyen de paiement choisi : <strong>${paiement}</strong><br><br>
      🚌 Bon voyage et merci pour votre confiance ! 🇧🇫
    `;
  
    // Affichage du message avec effet
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = message;
    confirmation.style.display = "block";
    confirmation.classList.add("animated");
  
    // Animation texte (simulateur de chargement)
    confirmation.style.opacity = 0;
    let opacity = 0;
    const interval = setInterval(() => {
      opacity += 0.05;
      confirmation.style.opacity = opacity;
      if (opacity >= 1) clearInterval(interval);
    }, 30);
  
    // Réinitialiser le formulaire après confirmation
    document.getElementById("formulaireReservation").reset();
  });
  