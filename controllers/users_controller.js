//import model of db
const User = require('../models/user');

//render the sign up page
module.exports.signUp = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('user_sign_up', {
        title: "Sign Up | Habbit Tracker"
    })
}


//get the sign up data or create User
module.exports.create = (req, res) => {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) { console.log('error in finding user in signing up'); return }
        if (!user) {
            User.create(req.body, (err, user) => {
                if (err) { console.log('error in creating User in signing up'); return }
                return res.redirect('/users/sign-in');
            })
        } else {
            return res.redirect('/users/sign-up');
        }
    })
}



//sign in and create a session for user
module.exports.createSession = (req, res) => {
    req.flash('success' , 'Logged In Sucessfully !')
    return res.redirect('/');
}


module.exports.signIn = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    return res.render('user_sign_in', {
        title: "Sign In | Habbit Tracker"
    })
}


module.exports.destroySession = (req, res , done) => {
    req.logout((err) => {
        if (err) {
            return done(err);
        }
    })
    return res.redirect('/users/sign-in');
}