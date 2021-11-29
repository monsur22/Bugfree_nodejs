const index = ((req, res) => {
    // res.json(products)
    res.send("Hello world");
})
const views = ((req, res) => {
    // res.json(products)
    // res.send("views");
    res.render('home');
})

export { index, views }