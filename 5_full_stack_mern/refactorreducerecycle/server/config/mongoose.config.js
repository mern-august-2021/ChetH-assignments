const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Error connecting to database", err));