const Habit = require('../models/habit');
const User = require('../models/user')


// date to string function 
function getTodayDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let today = day + "/" + month + "/" + year;
    return today
}

// create habit controller
module.exports.createHabit = async (req, res) => {
    try {
        let habit
        let user
        try {
            // find logged in user 
            user = await User.findById(req.user._id).populate();
            // if habit exesists find it 
            habit = await Habit.findOne({ content: req.body.habit, user: req.user._id }).populate();
        } catch (err) {
            console.log(err)
        }

        // if habit exesist
        if (habit) {
            // dont create it 
            console.log("already exesist");
        } else {
            // if habit nor exesist | create it

            // create new habit
            let habits = await Habit.create({
                content: req.body.habit,
                userRef: req.user._id,
                dates: { date: await getTodayDate(), complete: "none" }
            })
            // add new habit to user-> habits array
            habits.save();
        }

        // // redirect home
        return res.redirect('/');


    } catch (err) {
        console.log(err)
    }
}

// // delete habit controller
// module.exports.deleteActivity = async (req, res) => {
//     try {
//         // find logged in user
//         let user = await User.findById(req.cookies.user_id).populate();
//         if (user.id) { //if user exesist 
//             // delete the activity
//             await Habit.findByIdAndDelete(req.params.id);
//             // pull it from user-> activity array
//             user.habbits.pull(req.params.id);
//             user.save();
//         }

//         // redirect back
//         return res.redirect('back');

//     } catch (err) {
//         console.log(err)
//     }

// }
