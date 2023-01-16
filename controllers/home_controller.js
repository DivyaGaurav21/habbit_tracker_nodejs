// module.exports.home = (req, res) => {
//     res.render('home', {
//         title: 'Habbit Tracker App'
//     });
// }
const User = require('../models/user');
const Habit = require('../models/habit');

// date to string function => eg : jan 1, 2022 -> "112022"
function getTodayDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let today = day + "/" + month + "/" + year;
    return today
}

// home controller
module.exports.home = async (req, res) => {
    try {
        // // if user logged in 
        if (req.user) {
            let habits = await Habit.find({ userRef: req.user._id})    // find habits assosiated to user
        //     // render home page with logged in user and assosiated habits
            return res.render("home", {
                title: "Habit Tracker App",
                habits: habits,
                // user: user.name,
                date: await getTodayDate()
            });
        } else {    // if user not logged in
        //     // redirect to signin page
            return res.redirect('/signin');
        }

    } catch (err) {
        console.log(err)
    }
}
