// Importeerd npm pakket express uit de node_modules map
import express from 'express'


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
console.log(deloitteResearch)

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
app.get('/financialReview', function(request, response){
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    fetchJson(deloitteFinancial)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('financialReview', {
        allPrompts: deloitteFinancial.data
    })
})

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