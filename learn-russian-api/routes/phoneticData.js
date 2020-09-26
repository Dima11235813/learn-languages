const Router = require("express-promise-router");

const fetchPhoneticData = require("../services/phoneticPageData.js");

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;
router.post("/data", async (req, res) => {
  const get1UrlPhonetic = (wordEncoded) => {
    return `https://vnutrislova.net/%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80/%D1%84%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9/${wordEncoded}`;
  };
  let word = req.body.word;
  let wordEncoded = encodeURI(word);
  let url = get1UrlPhonetic(wordEncoded);
  //TODO Extract into service mapper to remove url concern
  // console.log(`Getting
  //   url
  //   ${url}`);
  // console.log(`Body request`)
  // console.log(req)
  let data = await fetchPhoneticData(url);
  res.send(data);
});

// const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
//   res.send(rows[0])
