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