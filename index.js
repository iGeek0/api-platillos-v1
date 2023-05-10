require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


//minibase de datos de platillos

let platillos = [{
    "id": 1,
    "nombre": "Tacos al pastor",
    "precio": 10,
    "descripcion": "Ricos tacos al pastor"
},
{
    "id": 2,
    "nombre": "Gordita de chicharron",
    "precio": 15,
    "descripcion": "Rica gordita"
},
{
    "id": 3,
    "nombre": "Arepa",
    "precio": 10,
    "descripcion": "Rica arepa"
},
{
    "id": 4,
    "nombre": "Bandeja Paisa",
    "precio": 10,
    "descripcion": "Rica comida colombiana con frijoles, huevo y arroz"
},
{
    "id": 5,
    "nombre": "Pozole",
    "precio": 10,
    "descripcion": "Platillo mexicano tipico caldo con ganzanzos y carne"
}
];

app.get("/", (req, res)=> {
    res.json("API Platillos V1.0")
});

app.get("/platillos",(req, res)=>{
    res.json({
        message: "Respuesta correcta de platillos",
        data: platillos
    })
});

app.post("/platillos",(req, res)=>{
    let platillo = req.body;
    platillos.push(platillo);
    res.json({
        message: "El platillo se agrego correctamente",
        data: platillo
    })
});


app.listen(process.env.port, ()=>{
    console.log("Servidor iniciado en el puerto: "+ process.env.PORT);
})
