// ./routes/index.js
const phoneticData = require("./phoneticData");
module.exports = app => {
  app.use("/api/phoneticData", phoneticData);
};
