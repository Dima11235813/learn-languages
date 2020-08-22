const Router = require("express-promise-router");

const fetchPhoneticData = require("../services/phoneticPageData.js");

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;
router.post("/data", async (req, res) => {
  console.log(`Body request`)
  console.log(req)
  let word = req.body.word;
  let data = await fetchPhoneticData(word);
  res.send(data);
});

// const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
//   res.send(rows[0])
