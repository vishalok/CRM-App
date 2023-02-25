//create new user

const { createUser } = require("../Controllers/userController");
const { getAllUsers } = require("../Controllers/userController");
const { getUserById } = require("../Controllers/userController");

module.exports = function(app){

    app.post("/crm/api/v1/users",createUser);
    app.get("/crm/api/v1/users",getAllUsers);
    app.get("/crm/api/v1/users/:id",getUserById);


}