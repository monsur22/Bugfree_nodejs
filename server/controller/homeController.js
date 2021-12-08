
const index = ((req, res) => {
    // res.json(products)
    res.render('home/index');
})
// const views = ((req, res) => {
//     // res.json(products)
//     // res.send("views");
//     res.render('home');
// })

// const home = ((req, res) => {
//     // res.json(products)
//     // res.send("views");
//     res.render('home/index');
// })


export {
    index,
    //  views,
    //  home
    }