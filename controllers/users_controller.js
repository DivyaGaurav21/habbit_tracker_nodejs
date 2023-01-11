//import model of db
const User = require('../models/user');

//render the sign up page
module.exports.signUp = (req, res) => {
    return res.render('user_sign_up', {
        title: "Sign Up | Habbit Tracker"
    })
}

//render the sign up page
// module.exports.signUp = (req, res) => {
//     if (req.isAuthenticated()) {
//         return res.redirect('/users/profile')
//     }
//     return res.render('user_sign_Up', {
//         title: "Social | Sign Up"
//     })
// }

//get the sign up data
module.exports.create = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) { console.log('error in finding user in signing up'); return }
        if (!user) {
            User.create(req.body, (err, user) => {
                if (err) { console.log('error in creating User in signing up'); return }
                return res.redirect('/');
            })
        } else {
            return res.redirect('back');
        }
    })
    
    return res.redirect('/')

}