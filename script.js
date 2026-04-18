let total = 0;

function ajouterPanier(produit, prix) {
  total += prix;

  document.getElementById("panier").innerHTML +=
    produit + " - " + prix + "€<br>";

  document.getElementById("panier").innerHTML +=
    "<b>Total : " + total + "€</b><br><br>";
}
