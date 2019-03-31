const express = require('express');
const router = express.Router();

router.route('/liveUsers')
  .get((req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    })
  })

module.exports = router;