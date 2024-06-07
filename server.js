// Importeerd npm pakket express uit de node_modules map
import express from 'express'


// Importeerd de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Haal ik de Url vooor fdnd-agency in Directus op en zet ik het in een variable genaamd apiURL
const apiUrl = 'https://fdnd-agency.directus.app/'
// Haal ik deloitte prompts tabel op en voeg ik samen met apirURL variable tot 1 URL waar de variable deloittePrompt word
const deloittePrompt = await fetchJson(apiUrl + 'items/deloitte_prompts')
// hier log ik om te kijken of de data wel goed word opgehaald door de deloittePrompt te loggen in de terminal krijg ik data terug gestuurd
console.log(deloittePrompt)

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
    fetchJson(deloittePrompt)
    // hier wordt de reactie gerenderd tot index.ejs en geef ik mee de data deloittePrompt
    response.render('index', {
        allPrompts: deloittePrompt.data,
    })
})

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    // Toon een bericht in de console en geef het poortnummer door
    console.log(`Application started on http://localhost:${app.get('port')}`)
})