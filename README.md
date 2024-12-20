# Deloitte(Headstart)

Dit project is een drie weken durende oefening waarin ik de kennis en vaardigheden demonstreer die ik het afgelopen jaar heb opgedaan. De nadruk ligt hierbij op onderwerpen zoals toegankelijkheid, semantische HTML en serverside-programmering met behulp van Node.js en EJS.

Het project is gebaseerd op de Deloitte(Headstart) opdracht en bestaat uit een chatbot waarmee gebruikers specifieke onderwerpen kunnen opvragen via prompts. Gebruikers kunnen hun eigen input invullen voor de gekozen prompt, waarna de volledige prompt met hun ingevulde gegevens als tekst wordt teruggegeven.

Deze chatbot is ontworpen voor medewerkers van Deloitte en stelt hen in staat om eenvoudig prompts in te vullen en informatie op te zoeken, zoals facturen, financiële rapportages en andere bedrijfsinformatie.

## User stories

* Installatie en configuratie van Node.js, Express.js en projectstructuurWeek 1: Installatie en configuratie van Node.js, Express.js en projectstructuur
* Implementeer server-side rendered views voor het weergeven van promptcategorieën en basisnavigatie.
* Verbind met de backend RESTful API en start met het parsen van JSON-gegevens voor categorieën en prompts.
* Ontwikkel server-side logica voor dynamische routing en weergave van content gebaseerd op gebruikersselecties.
* Verhoog gebruikersinteractie met JavaScript voor dynamische formulier-aanpassingen en CSS voor lay-outverbeteringen. Progressieve verbetering.
* Verhoog gebruikersinteractie met JavaScript voor dynamische formulier-aanpassingen en CSS voor lay-outverbeteringen. Progressieve verbetering.
* Implementeer backend logica voor het dynamisch genereren en beheren van verschillende soorten invoervelden binnen prompts.
* Test en optimaliseer de web applicatie voor snelheid en responsiviteit. Bij voorkeur voer je deze testen uit met gebruikers van Deloitte.
* Voeg optionele functies toe, zoals dark mode, iteractie met OpenAI (contact met client binnen Deloitte) binnen de backend, Authenticatie(kan van alles zijn) of geavanceerde formulier validatie

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/a69984e2-f867-4f65-8c1f-078312e2c3d5)

Link naar de webpagina: https://proof-of-concept-kaoe.onrender.com/

# 💻 Installatie

Voor het installeren van dit project, fork eerst de repository naar je eigen account.

1. Maak een nieuwe fork van het project om als developer een eigen repository aan te maken.

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/2a0310f4-54e3-431d-b98c-fb9991570065)

2. Vervolgens druk je op code 

![image](https://github.com/OniWithTheHoodie/pleasurable-ui/assets/144009897/b91afb22-e017-4dd9-857e-dc277fb8ac99)

3. Als je GitHub Desktop op je besturingssysteem hebt geïnstalleerd, kun je het project openen via GitHub Desktop.

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/2846ab18-2787-4676-a68b-54421402aa0a)

Als je GitHub Desktop nog niet hebt geïnstalleerd, kun je het downloaden en installeren via de volgende link:

**Github Desktop:**

https://desktop.github.com/

Volg de instructies op de website om de installatie te voltooien.

4. Dit is het scherm dat je zou moeten zien.

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/6c29b166-8962-45d1-a132-dc5aad66eec9)


5. Door op "Open in Visual Studio" te klikken, kun je alle bestanden en de code bekijken.

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/28c08d32-1c54-4253-85af-77c620b847d3)

6. Voor dit project maak je gebruik van EJS, wat staat voor Embedded JavaScript Templates.


![image](https://github.com/user-attachments/assets/5f1be45d-307b-46a7-a435-4c1bb42fe3c8)

7. Je moet nog de ontbrekende packages installeren; hiervoor heb je Node.js nodig. Open de terminal in VS Code en voer het command npm install uit om alle benodigde packages te installeren.

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/923cc6ef-fb65-4df9-8190-f0419e9f9f39)

Als je Node.js nog niet hebt geïnstalleerd, kun je het installeren via de volgende link: 

**Node.JS:**

https://nodejs.org/en

Volg de instructies op de websites om de installatie te voltooien.


8. Dit installeerd alle packages

![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/93f08963-2022-42f3-b0c2-6a4bce4e01d9)


9. Om de website te starten, gebruik je in de terminal het command npm start. De website wordt gehost op poort 8000.
   
   ![image](https://github.com/OniWithTheHoodie/proof-of-concept/assets/144009897/3c3ddfe5-1ba2-495d-a8ce-0b7ec5566893)


10. Als je vervolgens op localhost:8000 in je browser gaat, opent de pagina automatisch.
    
    ![image](https://github.com/OniWithTheHoodie/pleasurable-ui/assets/144009897/ab4f9581-2627-437d-b44d-646870668a42)


# 👷🏾‍♂️ Gebruik

Basisfunctionaliteiten:

Wat belangrijk is om dit werkend te krijgen, is dat je de data ophaalt binnen Directus.

```js 

// Importeerd de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'


// Haal ik de Url vooor fdnd-agency in Directus op en zet ik het in een variable genaamd apiURL
const apiUrl = 'https://fdnd-agency.directus.app/'
// Haal ik deloitte prompts tabel op en voeg ik samen met apirURL variable tot 1 URL waar de variable deloittePrompt word
const deloitteFinancial = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=1')
const deloitteCompliance = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=2')
const deloitteDevelopment = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=3')
const deloittePlanning = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=4')
const deloitteResearch = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=5')
const deloitteProcessing = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=6')
const deloitteMeetings = await fetchJson(apiUrl + 'items/deloitte_prompts?filter[id][_eq]=7')

```

Voor de prompt kun je een formulier maken met behulp van EJS, wat staat voor Embedded JavaScript Templates.

Voor meer informatie en documentatie over EJS kun je de volgende link raadplegen: https://ejs.co/#install

In dit geval heeft het formulier de action /financialReview en de method POST. Hier worden de ingevoerde gegevens binnen de financial review verzonden en weergegeven.

Met de prompt.text.replace-methode worden de gegevens binnen de accolades vervangen door HTML-inputs. Het is belangrijk dat deze invoer plaatsvindt tussen <%- en %>. Dit betekent dat de waarde in het sjabloon wordt ingevoegd zonder te worden ontsnapt. In de context van HTML betekent dit dat speciale karakters in de waarde worden weergegeven zoals ze zijn, zonder dat ze worden omgezet in HTML-entiteiten.

```js

<form class="form" action="/financialReview" method="POST">
   <h1 class="form__header">Create financial review prompt</h1>
       <% allPrompts.forEach(prompt => { %>      
         <p tabindex="0" class="form__paragraph">
            <%- prompt.text.replace("{{ Financial Statement File }}", '<input class="form__input" type="text" name="financial_statement_file" placeholder="Financial Statement File">')
                                    .replace("{{ Review Date }}", '<input class="form__input" type="date" name="review_date" placeholder="Review Date">')
                                    .replace("{{ Lead Auditor }}", '<input class="form__input" type="text" name="lead_auditor" placeholder="Lead Auditor">') %>
          </p>

```

Dit is een stuk van de JSON-code voor de prompts. Het tekstgedeelte bevindt zich tussen de accolades. De teksten "Financial statement file", "Review date" en "Lead auditor" kunnen worden vervangen met de replace-methode. Hierbij kun je HTML-invoervelden meegeven, zoals:

* Voor "Financial statement file": `<input type="file">`
* Voor "Review date": `<input type="date">`
* Voor "Lead auditor": `<input type="text">`

Dit stelt gebruikers in staat om de relevante informatie eenvoudig in te voeren.

```JS 

{
  "categories": [
    {
      "name": "Audit",
      "subcategories": [
        {
          "name": "Financial Review",
          "prompts": [
            {
              "id": 1,
              "label": "Quarterly Financial Statement Review",
              "text": "As an experienced auditor, you are tasked with thoroughly reviewing the quarterly financial statements to ensure accuracy and compliance with regulatory standards. Please upload the {{ Financial Statement File }} for further analysis, indicate the {{ Review Date }}, and assign the task to the {{ Lead Auditor }}.",
              "variables": [
                {
                  "type": "file",
                  "label": "Financial Statement File"
                },
                {
                  "type": "date",
                  "label": "Review Date"
                },
                {
                  "type": "text",
                  "label": "Lead Auditor"
                }
              ]
            }
          ]
        },

```
Voor de financialReview.ejs-pagina haal ik de gegevens op met app.get en geef ik deze weer met response.render. Hierbij heb ik ook de URL meegegeven om de JSON-data binnen Directus te gebruiken voor het maken van de prompt. Met app.post verwerk ik de gegevens binnen financialReview.ejs, waarbij ik req.body en de originalText.replace gebruik om de specifieke tekst in de accolades te vervangen met invoervelden.

```js

// Route to financialReview.ejs
app.get('/financialReview',  async function(request, response){
    // binnen de financial review render geef ik de data van de url: https://fdnd-agency.directus.app/items/deloitte_prompts?filter[id][_eq]=1 
    // hier haal ik en weergeef ik de tekst door allPrompts te renderen in financialReview.ejs
    // promptMessages is de ingevoerde data in de form die ook word gerenderd in financialReview.ejs dit komt vanuit de lege array const promptMessages = [];
    response.render('financialReview', {
        allPrompts: deloitteFinancial.data,
        promptMessages: promptMessages 
    });
});


app.post('/financialReview', function(req, res) {
    // Data die ik van de form heb opgehaald variables aangemaakt gebaseerd op de input velden ik request uit de body van de html de name="" waardes 
    // voor de inputs: financialStatement, reviewDate, leadAuditor en om de text mee te nemen input: originalText
    const financialStatement = req.body.financial_statement_file;
    const reviewDate = req.body.review_date;
    const leadAuditor = req.body.lead_auditor;
    const originalText = req.body.original_text;


    // hier log ik de form om te kijken wat er ontvangen is van de data die is ingevoerd in de form
    console.log('Received data:', financialStatement, reviewDate, leadAuditor, originalText);


    // filledText een variable waarmee ik de hele text van de variable originalText mee geef en daarin vervang ik de text door met de replace method alle curly braces te 
    // verbergen en te vervangen met data die wordt ingevoerd in: financialStatement, reviewDate en leadAuditor dit zijn de variablen voor de request.body van de inputs 
    let filledText = originalText.replace("{{ Financial Statement File }}", financialStatement)
                                   .replace("{{ Review Date }}",  reviewDate)
                                   .replace("{{ Lead Auditor }}", leadAuditor);

```

# 🔨 Architectuur en Structuur

In de root bevindt zich server.js, waarin de code is opgenomen voor de koppeling naar de Directus-server en de pagina's die worden gerenderd.

In de public map vind je het Headstart-logo en het SVG-chaticoon.

In de styles map staat de style.css.

In de helpers map bevindt zich het bestand prompt-lib-deloitte.json, dat de JSON-structuur bevat met alle data. Deze data is al in Directus aanwezig, maar je kunt het gebruiken om te zien hoe het is ingericht.

De views map bevat de partials map met losse componenten. Daarnaast zijn er in de views map verschillende losse EJS-bestanden, waaronder index.ejs en andere bestanden zoals clientMeeting.ejs, complianceCheck.ejs, enzovoort. Deze zijn gelinkt aan index.ejs.

```

/root
│
├── server.js
│
├── public
│   ├── assets
│   │   ├── headstart-logo.png
│   │   └── chat-svgrepo-com.svg
│   │
│   └── styles
│       └── style.css
│
├── helpers
│   └── prompt-lib-deloitte.json
│
└── views
    ├── partials
    │   ├── breadcrumb.ejs
    │   ├── buttonSecondary.ejs
    │   ├── foot.ejs
    │   ├── head.ejs
    │   └── nav.ejs
    │
    ├── audit.ejs
    ├── clientMeeting.ejs
    ├── complianceCheck.ejs
    ├── consulting.ejs
    ├── documentProcessing.ejs
    ├── financialReview.ejs
    ├── index.ejs
    ├── innovation.ejs
    ├── marketResearch.ejs
    ├── productDevelopment.ejs
    ├── productLaunchPlanning.ejs
    └── submitReview.ejs

```
# Contactinformatie

Als je vragen hebt of meer wilt weten over dit project, neem dan gerust contact met me op:

E-mail: LesleyReynolds92@gmail.com
LinkedIn: [linkedin.com/in/jouw-profiel](https://www.linkedin.com/feed/)

Ik waardeer je interesse en kijk ernaar uit om van je te horen!
