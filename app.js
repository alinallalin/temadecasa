const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')

const app = express();

const port = 6789;

// directorul 'views' va conține fișierele .ejs (html + js executat la server)
app.set('view engine', 'ejs');
// suport pentru layout-uri - implicit fișierul care reprezintă template-ul site-ului este views/layout.ejs
app.use(expressLayouts);
// directorul 'public' va conține toate resursele accesibile direct de către client (e.g., fișiere css, javascript, imagini)
app.use('/public',express.static('public'));
// corpul mesajului poate fi interpretat ca json; datele de la formular se găsesc în format json în req.body
app.use(bodyParser.json());
// utilizarea unui algoritm de deep parsing care suportă obiecte în obiecte
app.use(bodyParser.urlencoded({ extended: true }));

// la accesarea din browser adresei http://localhost:6789/ se va returna textul 'Hello World'
// proprietățile obiectului Request - req - https://expressjs.com/en/api.html#req
// proprietățile obiectului Response - res - https://expressjs.com/en/api.html#res
app.get('/', (req, res) => res.render('acasa'));

// la accesarea din browser adresei http://localhost:6789/chestionar se va apela funcția specificată
app.get('/acasa', (req, res) => {
    res.render('acasa');
});

app.get('/subiectul1',(req,res)=>{
    res.render('subiectul1');
});
app.get('/subiectul2',(req,res)=>{
    res.render('subiectul2');
});
app.get('/subiectul3',(req,res)=>{
    res.render('subiectul3');
});
app.listen(port, () => console.log(`Serverul rulează la adresa http://localhost:`));
