import homeModel from '../model/homeModel.js';

const index = ((req, res) => {
    // res.json(products)
    res.render('admin/index');
    // res.send('admin route adn controller');

})
const create = ((req, res) => {
    // res.json(products)
    // res.send("views");
    // res.render('home/index');

    console.log(req.body);

    const home = new homeModel({
        logo: req.body.logo,
        title: req.body.title,
        header: req.body.header,
        desc: req.body.desc,
    })

        const create = home.save()
        res.status(201).json(create)
})

export { index, create}