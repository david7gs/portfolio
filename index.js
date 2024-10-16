import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1";
let randomDrinks = [];
let hasRandomDrinks = false;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// ## use port for dev ##
app.listen(port, () => {
  console.log(`server running on ${port}`);
});

// ## use below for live ##
// app.listen();

app.get("/", (req, res) => {
  try {
    res.sendFile(__dirname + "/public/index.html");
  } catch (error) {
    console.log(error);
  }
});

// app.get("/", (req, res) => {
//   try {
//     res.send("<h1>Hello Player!</h1>");
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get('/', async (req, res) => {
//   console.log(`on home page /`);
//   try {
//     if (!hasRandomDrinks) {
//       randomDrinks = [];
//       for (let i = 1; i <= 7; i++) {
//         const result = await axios.get(API_URL + '/random.php');
//         randomDrinks.push(result.data.drinks[0]);
//       }
//     };
//     randomDrinks.forEach((recipe) => {
//       if (recipe) {
//         console.log(`idDrink`, recipe.idDrink);
//       } else {
//         console.log(`WTF`);
//       }
//     })
//     res.render('index.ejs', {
//       data: randomDrinks
//     });
//   } catch (error) {
//     console.log(`error`, error.message);
//     // res.status(404).send(error.message);
//     // res.render('index.ejs', {
//     //   content: JSON.stringify(error.response.data)
//   }
// })

// let data;

// app.post('/recipe', async (req, res) => {
//   console.log(`/recipe firing`);
//   const choice = req.body.choice;

//   try {
//     const result = await axios.get(API_URL + '/filter.php?i=' + choice);
//     const data = result.data.drinks;
//     console.log(`data is`, data);
//     res.render('by-spirit.ejs', {
//       data: data,
//       choice: choice
//     })
//   } catch (error) {
//     console.log(`error`, error.message);
//   // res.status(404).send(error.message);
//   }
// })

// app.post('/view-recipe', async (req, res) => {
//   try {
//     console.log(`view-recipe route and req is`, req.body.id);
//     let id = req.body.id;
//     const result = await axios.get(API_URL + '/lookup.php?i=' + id);
//     const recipe = result.data.drinks[0];
//     res.render('recipe.ejs', {
//       recipe: recipe
//     });
//   } catch (error) {
//     console.log(`error`, error.message)
//   }
// })
