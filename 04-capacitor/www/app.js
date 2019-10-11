

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

document.getElementById("btn-photo").addEventListener("click",() =>{
    capacitorExports.Plugins.Camera.getPhoto({resultType:"base64"})
        .then((result) => {
            htmlDonneesDevFest.insertAdjacentHTML( "beforebegin",`
            <ion-card class="ion-margin-vertical">
                <img src="data:image/png;base64, ${result.base64String}"  />
                <ion-card-header>
                    <ion-card-title>Test</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    Test
                </ion-card-content>
            </ion-card>
            `)
        },(err) => console.log(err));
});
