const router = require('express').Router();
// user controller
const { create, login } = require('../controllers/user.controller');

// create user route
/**
 * @param {
 *  username,
 *  email,
 *  password,
 *  avatar
 * }
 */
router.post('/create', async (req, res) => {
  try {
    if (await create(req.body)) {
      return res.status(201).json({
        log: 'created user',
        success: true
      });
    } else {
      return res.status(503).json({
        log: 'user creation failed, retry request',
        success: false
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      log: 'error in user creation'
    });
  }
});

module.exports = router;