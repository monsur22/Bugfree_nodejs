import express from 'express'
import bodyparser from 'body-parser'
import testRoutes from './routes/testRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import { engine } from 'express-handlebars';
const port = 3000;
const app = express();

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
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
