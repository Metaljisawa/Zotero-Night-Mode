// Extension Zotero pour activer le mode nuit
// Adapté de https://zotero.org/support/dev/client_coding/javascript

// Créer un bouton pour activer/désactiver le mode nuit
var nightModeButton = {
  id: 'zotero-night-mode-button',
  label: 'Activer le mode nuit',
  icon: 'icon-moon', // icône pour le mode nuit désactivé
  action: toggleNightMode
};

// Ajouter le bouton à la barre d'outils
Zotero.addOption('toolbar', nightModeButton);

// Fonction pour charger les styles CSS du mode nuit
function loadNightModeStyles() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/css/night-mode.css'; // chemin vers votre fichier CSS de mode nuit
  document.head.appendChild(link);
}

// Fonction pour enregistrer l'état du mode nuit dans le stockage local
function setNightMode(enabled) {
  localStorage.setItem('nightMode', enabled);
}

// Fonction pour récupérer l'état du mode nuit du stockage local
function getNightMode() {
  return localStorage.getItem('nightMode') === 'true';
}

// Fonction pour basculer entre le mode nuit et le mode jour
function toggleNightMode() {
  // Récupérer l'élément <body> de la page
  var body = document.querySelector('body');

  // Si le mode nuit est activé dans le stockage local
  if (getNightMode()) {
    // Désactiver le mode nuit en enlevant la classe 'night-mode'
    body.classList.remove('night-mode');
    // Changer le texte et l'icône du bouton pour indiquer que le mode nuit est désactivé
    nightModeButton.label = 'Activer le mode nuit';
    nightModeButton.icon = 'icon-moon'; // icône pour le mode nuit désactivé
    // Enregistrer l'état du mode nuit dans le stockage local
    setNightMode(false);
  } 
  // Sinon, le mode nuit n'est pas activé
  else {
    // Activer le mode nuit en ajoutant la classe 'night-mode'
    body.classList.add('night-mode');
    // Changer le texte et l'icône du bouton pour indiquer que le mode nuit est activé
    nightModeButton.label = 'Désactiver le mode nuit';
    nightModeButton.icon = 'icon-sun'; // icône pour le mode nuit activé
    // Charger les styles CSS du mode nuit
    loadNightModeStyles();
