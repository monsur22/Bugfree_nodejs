import express from 'express'
import bodyparser from 'body-parser'
import testRoutes from './routes/testRoutes.js'


const port = 3000;
const app = express();

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
app.use('/home', testRoutes);
