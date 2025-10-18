const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const mongo_url = "mongodb://127.0.0.1:27017/wonderLust";

async function main() {
  await mongoose.connect(mongo_url);
}

main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67a70274a60b900c96982adb",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was intitiazed");
};
initDb();
