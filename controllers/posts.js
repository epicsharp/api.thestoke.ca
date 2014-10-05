/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get("/", function(req, res) {
  Post.findRecentlyVerified(function(err, posts){
    res.json(posts);
  });
});

module.exports = router;
