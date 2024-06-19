// Importeerd npm pakket express uit de node_modules map
import express, { response } from 'express'


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
// hier log ik om te kijken of de data wel goed word opgehaald door de deloittePrompt te loggen in de terminal krijg ik data terug gestuurd
// console.log(deloitteResearch)

// hier maak ik een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// JSON import
app.use(express.json());

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// hier word de data die ingevoerd word in de forumlier meegegeven in de variable promptMessages en dit wil ik hiermee kunnen weergeven in de pagina
const promptMessages = [];

// Hier haal ik de root op dat is index.ejs waar een functie word gemaakt en vraag het op en wacht op een reactie en daarna word de URL in deloittePrompt gefetched
app.get('/', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('index')
})

// Route to audit.ejs
app.get('/audit', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('audit')
})

// Route to consulting.ejs
app.get('/consulting', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('consulting')
})

// Route to innovation.ejs
app.get('/innovation', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('innovation')
})

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

    // Hier log ik de ingevulde text
    console.log('Filled text:', filledText);

    // hier zeg ik duw of zet de ingevulde text in filledText in de lege array promptMessages
    promptMessages.push(filledText);

    // Redirect terug naar de financialReview.ejs pagina
    res.redirect(303, '/financialReview');
});

// Route to complianceCheck.ejs
app.get('/complianceCheck', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloitteCompliance)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('complianceCheck', {
        allPrompts: deloitteCompliance.data
    })
})

// Route to productDevelopment.ejs
app.get('/productDevelopment', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloitteDevelopment)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('productDevelopment', {
        allPrompts: deloitteDevelopment.data
    })
})

// Route to productLaunchPlanning.ejs
app.get('/productLaunchPlanning', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloittePlanning)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('productLaunchPlanning', {
        allPrompts: deloittePlanning.data
    })
})

// Route to marketResearch.ejs
app.get('/marketResearch', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloitteResearch)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('marketResearch', {
        allPrompts: deloitteResearch.data
    })
})

// Route to productLaunchPlanning.ejs
app.get('/documentProcessing', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloitteProcessing)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('documentProcessing', {
        allPrompts: deloitteProcessing.data
    })
})

// Route to marketResearch.ejs
app.get('/clientMeetings', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloitteMeetings)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('clientMeetings', {
        allPrompts: deloitteMeetings.data
    })
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})