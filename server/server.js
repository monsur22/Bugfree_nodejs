import express from 'express'
import bodyParser from 'body-parser';
import ejs  from 'ejs';
import dotenv from 'dotenv'
import morgan from 'morgan'
import testRoutes from './routes/testRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// import { engine } from 'express-handlebars';
// import hbs  from 'hbs';

dotenv.config()
connectDB()
const port = 5000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}


// app.engine('handlebars', engine());
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.listen(port, function() {
	console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data
// app.use(bodyParser.urlencoded({extended: true}));

// Parses the text as json
// app.use(bodyParser.json());

// app.get('/',(req,res) => {
//     res.send('Server Is Running .......3000 Port')
//     })
app.use('/', testRoutes);
app.use('/admin', adminRoutes);
// app.post('/create', (req, res) => {
// 	console.log(req.body);
// 	res.send('Hello World');
// });