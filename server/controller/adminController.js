import homeModel from '../model/homeModel.js';

const index = ((req, res) => {
    // res.json(products)
    res.render('admin/index');
    // res.send('admin route adn controller');

})
const home_create_view = ((req, res) => {
    // res.json(products)
    res.render('admin/home/home_create');
    // res.send('admin route adn controller');
})
const home_create = ((req, res) => {

    console.log(req.body);
    // const home = new homeModel({
    //     logo : req.body.logo,
    //     title : req.body.title,
    //     header : req.body.header,
    //     desc : req.body.desc,
    // })

    //     home.save().then(data => {
    //         //res.send(data)
    //         res.redirect('/home-create');
    //     })
    //     .catch(err =>{
    //         res.status(500).send({
    //             message : err.message || "Some error occurred while creating a create operation"
    //         });
    //     });
        // res.redirect('/admin');
        // res.status(201).json(create)
    //     const home = new homeModel(req.body);
    // console.log(home);

    //     home.save()
    //       .then(result => {
    //         res.redirect('/admin/home-create');
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
})

export { index, home_create_view, home_create}