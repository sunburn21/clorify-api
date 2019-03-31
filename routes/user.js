const express = require('express');
const router = express.Router();

router.route("/user")
  .post((req, res) => {
    const user = new User();
    user.user_id = req.body.user_id;
    user.save((err, data) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json(data);
      }
    })
  })

module.exports = router;