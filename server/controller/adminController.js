const index = ((req, res) => {
    // res.json(products)
    res.render('admin/index.handlebars');
    // res.send('admin route adn controller');

})


export { index }