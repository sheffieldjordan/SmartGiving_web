const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");
const mongoose = require("mongoose");
var fs = require("fs");

var Recipient = mongoose.model("Recipient");
var Donor = mongoose.model("Donor");
var Merchant = mongoose.model("Merchant");

module.exports = app => {
  // app.get("/api/surveys", async (req, res) => {
  //   const surveys = await Survey.find({ _user: req.user.id }).select({
  //     recipients: false
  //   });
  //   res.send(surveys);
  // });

  app.get("/recipients", async (req, res) => {
    const recipients = await Recipient.find({}, { _id: 0, __v: 0 }).sort({
      orgName: 1
    });
    // res.send(recipients);
    console.log(res.data);
    res.json(recipients);
    fs.writeFile("../output/recipients.json", JSON.stringify(recipients));
  });

  //Get Active gifts for DONOR
  // router
  //   .route("/:ethereumAddress/activeGiftsList")
  app.get("/api/:ethereumAddress/activeGiftsList", async function(req, res) {
    var activeGifts = [];

    //var donor = await Donor.findById(req.params.ethereumAddress, function(
    var donor = await Donor.findOne(
      { ethDonorAddr: req.params.ethereumAddress },
      function(err, donor) {
        if (err) res.send(err);
      }
    );

    var activeGifts_tmp = await Recipient.find(
      {
        "gifts.ethGiftAddr": { $in: donor.donatedActiveGifts }
      },
      { "gifts.$": true },
      function(err, donor) {
        if (err) res.send(err);
      }
    );

    activeGifts_tmp.forEach(function(giftEthAdrr) {
      activeGifts.push(giftEthAdrr.gifts[0]);
    });
    // console.log(activeGifts);

    res.json(activeGifts);
  });

  // app.get("/api/surveys/:surveyId/:choice", (req, res) => {
  //   res.send("Thanks for voting!");
  // });
  //
  // app.post("/api/surveys/webhooks", (req, res) => {
  //   const p = new Path("/api/surveys/:surveyId/:choice");
  //
  //   _.chain(req.body)
  //     .map(({ email, url }) => {
  //       const match = p.test(new URL(url).pathname);
  //       if (match) {
  //         return {
  //           email,
  //           surveyId: match.surveyId,
  //           choice: match.choice
  //         };
  //       }
  //     })
  //     .compact()
  //     .uniqBy("email", "surveyId")
  //     .each(({ surveyId, email, choice }) => {
  //       Survey.updateOne(
  //         {
  //           _id: surveyId,
  //           recipients: {
  //             $elemMatch: { email: email, responded: false }
  //           }
  //         },
  //         {
  //           $inc: { [choice]: 1 },
  //           $set: { "recipients.$.responded": true },
  //           lastResponded: new Date()
  //         }
  //       ).exec();
  //     })
  //     .value();
  //
  //   res.send({});
  // });
  //
  // app.post("/api/surveys", async (req, res) => {
  //   const { title, subject, body, recipients } = req.body;
  //   const survey = new Survey({
  //     title,
  //     subject,
  //     body,
  //     recipients: recipients.split(",").map(email => ({ email: email.trim() })),
  //     _user: req.user.id,
  //     dateSent: Date.now()
  //   });
  // });
};
