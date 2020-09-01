const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


// const me = new User({
//     name: "          Ahmed   ",
//     email: "MyEMAIL@gmail.com    ",
//     password: "passwor123"
// });

// me.save().then(() => {
//     console.log(me);
// }).catch(error => {
//     console.log("Error!", error);
// })

// const mytask = new Task({
//     description: "clean the house",
//     completed: false
// });
// mytask.save().then(() => {
//     console.log(mytask);
// }).catch(error => {
//     console.log("Error!", error);
// })