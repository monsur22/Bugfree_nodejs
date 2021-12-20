import Home from '../model/homeModel.js';

const index = ((req, res) => {
    // res.json(products)
    res.render('admin/index');
    // res.send('admin route adn controller');

})
const home_create_view = ((req, res) => {
    // const data =  Home.find({})
    // console.log(data)
    // res.render('admin/home/home_create',{data:data})
    // return data;
    Home.find().exec(function (err, data) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("admin/home/home_create", {data: data});
        }
      });
})


const home_create = ((req, res) => {

    console.log(req.body);
    const home = new Home({
        logo : req.body.logo,
        title : req.body.title,
        header : req.body.header,
        desc : req.body.desc,
    })

        home.save().then(data => {
            //res.send(data)
            res.redirect('/admin/home-create');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

})
const home_edit = ((req, res) => {


})
const home_delete = ((req, res) => {


})
const about = ((req, res) => {
    // res.json(products)
    res.render('admin/about/about_create');
    // res.send('admin route adn controller');

})
// const home_get = ((req, res) => {
//     const data =  homeModel.find()
//     // console.log(data);
//     res.render('admin/home/home_create',{data:rows});

// })
export { index, home_create_view, home_create,home_edit,home_delete, about };