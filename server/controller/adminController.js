const index = ((req, res) => {
    // res.json(products)
    res.render('admin/index', {title: 'admin page'});
    // res.send('admin route adn controller');

})


export { index }