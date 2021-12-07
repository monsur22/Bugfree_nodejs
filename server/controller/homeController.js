import homeModel from '../model/homeModel.js';

const index = ((req, res) => {
    // res.json(products)
    res.send("Hello world");
})
const views = ((req, res) => {
    // res.json(products)
    // res.send("views");
    res.render('home');
})

const home = ((req, res) => {
    // res.json(products)
    // res.send("views");
    res.render('home/index');
})

const create = ((req, res) => {
    // res.json(products)
    // res.send("views");
    // res.render('home/index');

    // var home = new homeModel();
    // home.logo = req.body.logo;
    // home.title = req.body.title;
    // home.header = req.body.header;
    // home.desc = req.body.desc;

    // home.save(function(err, data){
    //     if(err){
    //         console.log(error);
    //     }
    //     else{
    //         res.send("Data inserted");
    //     }
    // });
    const home = new homeModel({
        logo: 'logo',
        title: 'title',
        header: 'header',
        desc: 'Sample description',
    })

        const create = home.save()
        res.status(201).json(create)
})
export { index, views, home, create }