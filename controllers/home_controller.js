module.exports.home = (req, res) => {
    res.render('home', {
        title: 'Habbit Tracker App'
    });
}