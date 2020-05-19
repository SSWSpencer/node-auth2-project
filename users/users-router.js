const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const adminRestricted = require("../auth/admin-restricted.js")

router.use(restricted)

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({users, jwt: req.jwt});
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    });
});

module.exports = router;
