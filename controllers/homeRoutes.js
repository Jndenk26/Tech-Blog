const router = require('express').Router();
const {Post} = require('../models');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
const postData = await Post.findAll()
const posts = postData.map(post=>post.get({plain: true}))

  
  res.render('homepage', {
    posts

  });
});

router.get('/login', async (req, res) => {
  // TODO: Render template with Sequelize data

  
  res.render('logIn', {

  });
});

module.exports = router;