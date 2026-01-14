/* =====================================================
   OHM ID - Core JavaScript (Professional Base)
   Auteur : Didier Irankunda
   Version : 1.0.0
===================================================== */

/* =======================
   CONFIGURATION GLOBALE
======================= */
const OHM = {
  appName: "OHM ID",
  version: "1.0.0",
  mode: "development", // production plus tard
};

/* =======================
   UTILS (fonctions générales)
======================= */
const Utils = {
  log(message) {
    if (OHM.mode === "development") {
      console.log([OHM] ${message});
    }
  },

  alert(message) {
    window.alert(message);
  },

  getValue(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }
};

/* =======================
   UI / INTERACTIONS
======================= */
const UI = {
  fadeInPage() {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  },

  showMessage(message) {
    Utils.alert(message);
  }
};

/* =======================
   IDENTITÉ NUMÉRIQUE
======================= */
const Identity = {
  create(name, nationalId) {
    if (!name || !nationalId) {
      UI.showMessage("Veuillez remplir toutes les informations.");
      return;
    }

    Utils.log("Création identité numérique...");
    UI.showMessage(
      Identité numérique créée avec succès ✅\nNom : ${name}
    );
  }
};

/* =======================
   AUTHENTIFICATION (Login/Register)
======================= */
const Auth = {
  login(email, password) {
    if (!email || !password) {
      UI.showMessage("Email et mot de passe requis.");
      return;
    }

    Utils.log("Tentative de connexion...");
    UI.showMessage("Connexion réussie (simulation)");
  },

  register(email, password) {
    if (!email || !password) {
      UI.showMessage("Informations manquantes.");
      return;
    }

    Utils.log("Création de compte...");
    UI.showMessage("Compte OHM ID créé avec succès 🎉");
  }
};

/* =======================
   MESSAGERIE (Base)
======================= */
const Messaging = {
  sendMessage(text) {
    if (!text) {
      UI.showMessage("Message vide.");
      return;
    }

    Utils.log("Message envoyé");
    UI.showMessage(Message envoyé : ${text});
  }
};

/* =======================
   PAIEMENT DIGITAL (Simulation)
======================= */
const Payment = {
  pay(amount) {
    if (!amount || amount <= 0) {
      UI.showMessage("Montant invalide.");
      return;
    }

    Utils.log("Paiement en cours...");
    UI.showMessage(Paiement de ${amount} effectué avec succès 💳);
  }
};

/* =======================
   EVENTS / DÉMARRAGE APP
======================= */
document.addEventListener("DOMContentLoaded", () => {
  Utils.log("Application OHM ID démarrée");
  UI.fadeInPage();
});
