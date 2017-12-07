# This is a pre-release for an exercise for FEU17 class at EC-Utbildning by Alejandro García and Karin Frinell. 

Instructions for the exercise below:

Lab 4 - API
Ni ska skapa en webbsida där en besökare kan ha en katalog med böcker. Uppgiften ska utföras två och två. Den ska lämnas in genom en att ni skickar en github-länk med slack, senast 15/12. Om ni väljer att redovisa laborationen under lektionstid (rekommenderat) så leder det till en snabbare bedömning.

Ni ska använda ett API, med dokumentation på https://www.forverkliga.se/JavaScript/api/crud.php
En prototyp för gränssnittet finns på nästa sida.

Man ska kunna lägga till en ny bok till listan, se vilka böcker som finns i listan. Observera att API:et inte är helt tillförlitligt. Det returnerar alltid en sträng i JSON-format, men ni måste kontrollera om det returnerar rätt svar eller om ni får ett felmeddelande. Bootstrap är tillåtet, men inga andra ramverk. (jQuery m.fl.)

Fundera på: hur hanterar man bäst ett felmeddelande från API:et?
Ni ska visa hur många anrop till API:et som har misslyckats.

För godkänt ska ni göra en webbsida som:
- kan begära en API-nyckel
- kan lägga till en bok
- kan se vilka böcker som man har lagt in
- har ett funktionellt gränssnitt
- använder CSS för att styla sidan
- visar eventuella felmeddelanden och hur många gånger anrop till API:et har misslyckats
- inte genererar några JavaScript-fel när man använder den (kontrollera konsolen)