import express, {Application, Request, Response} from "express";
import cors from "cors"

const app:Application = express();
const PORT = process.env.PORT ?? 10000; // Allow dynamic PORT setting (Heroku)
// Define GET endpoint(s)

const possibleWords = [ "Apple", "Bases", "Birds", "Crowd", "Crack", "Delta", "Doubt", "Dough", "Flyer", "Grand", 
                          "Giant", "Hello", "Handy", "Igloo", "Karat", "Kayak", "Leeds", "Leary", "Matte", "Never", 
                          "Outgo", "Plate", "Pours", "Queue", "Rowdy", "Slack", "Showy", "These", "Utter", "Vases", 
                          "Weird", "Xenon", "Yards", "Zeros" ];

app.use(cors());

app.get("/randomword", (req:Request, res:Response) => {
   res.send({ secret: possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase() });
});

app.listen(PORT, () => {
   console.log(`Server is listening to port ${PORT}`);
});