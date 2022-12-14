// Extension Zotero pour activer le mode nuit
// Adapté de https://zotero.org/support/dev/client_coding/javascript

// Créer un bouton pour activer/désactiver le mode nuit
var nightModeButton = {
  id: 'zotero-night-mode-button',
  label: 'Activer le mode nuit',
  icon: 'icon-moon',
  action: toggleNightMode
};

// Ajouter le bouton à la barre d'outils
Zotero.addOption('toolbar', nightModeButton);

// Fonction pour basculer entre le mode nuit et le mode jour
function toggleNightMode() {
  // Récupérer l'élément <body> de la page
  var body = document.querySelector('body');

  // Si l'élément <body> a la classe 'night-mode', c'est que le mode nuit est activé
  // On le désactive en enlevant la classe 'night-mode'
  if (body.classList.contains('night-mode')) {
    body.classList.remove('night-mode');
    // Changer le texte du bouton pour indiquer que le mode nuit est désactivé
    nightModeButton.label = 'Activer le mode nuit';
    nightModeButton.icon = 'icon-moon';
  } 
  // Sinon, le mode nuit n'est pas activé, on l'active en ajoutant la classe 'night-mode'
  else {
    body.classList.add('night-mode');
    // Changer le texte du bouton pour indiquer que
