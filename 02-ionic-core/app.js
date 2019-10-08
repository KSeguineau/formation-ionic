
let htmlDonneesDevFest = document.getElementById("contenu");
const lienImage = 'https://devfest2018.gdgnantes.com';
if ('fetch' in window) {
    fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
        .then((reponse) => reponse.json() )
        .then((reponseJson) => {
                for (article of reponseJson) {
                    htmlDonneesDevFest.innerHTML += `
<ion-card class="ion-margin-vertical">
 <img src="${lienImage}${article.image}" />
  <ion-card-header>
  <ion-card-title>${article.title}</ion-card-title>
  </ion-card-header>

  <ion-card-content>

${article.brief}
</ion-card-content>
</ion-card>`
                }
            }
        );
}