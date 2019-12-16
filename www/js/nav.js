let bottomnav = `
<ion-row>
<ion-col class="delete-margins">
  <div id="descubreTop" class="active-bottom-nav"></div>
</ion-col>
<ion-col class="delete-margins">
  <div id="entrenaTop" class="active-bottom-nav "></div>
</ion-col>
<ion-col class="delete-margins ">
  <div id="perfilTop" class="active-bottom-nav"></div>
</ion-col>
</ion-row>

<ion-row>
<ion-col onclick="descubre()" class="ion-text-center delete-margins">
  <img src="img/01.png" id="descubreImg" style="height: 36px;margin-top: 8px;" alt=""><br>
  Descubre
</ion-col>
<ion-col onclick="entrena()" class="ion-text-center delete-margins">
  <img src="img/02.png" id="entrenaImg" style="height: 36px;margin-top: 8px;" alt=""><br>
  Entrena
</ion-col>
<ion-col onclick="perfil()" class="ion-text-center delete-margins">
  <img src="img/03.png" id="perfilImg" style="height: 36px;margin-top: 8px;" alt=""><br>
  Perfil
</ion-col>
</ion-row>`;
