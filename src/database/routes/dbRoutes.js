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
  app.get("/api/:ethereumAddress/activeDonorGiftsList", async function(
    req,
    res
  ) {
    var activeGifts = [];

    var donor = await Donor.findOne(
      { ethDonorAddr: req.params.ethereumAddress },
      function(err, donor) {
        if (err) res.send(err);
      }
    );

    var gifts = donor.donatedActiveGifts;
    for (var i = 0, len = gifts.length; i < len; i++) {
      await Recipient.find(
        { "gifts.ethGiftAddr": gifts[i] },
        { "gifts.$": true },
        function(err, gift) {
          if (err) res.send(err);
          activeGifts.push(gift[0].gifts[0]);
        }
      );
    }
    res.json(activeGifts);
  });

  //Get Active gifts for MERCHAMT
  app.get("/api/:ethereumAddress/activeMerchantGiftsList", async function(
    req,
    res
  ) {
    var activeGifts = [];

    var merchant = await Merchant.findOne(
      { ethMerchantAddr: req.params.ethereumAddress },
      function(err, merchant) {
        if (err) res.send(err);
      }
    );

    var gifts = merchant.servedActiveGifts;
    for (var i = 0, len = gifts.length; i < len; i++) {
      await Recipient.find(
        { "gifts.ethGiftAddr": gifts[i] },
        { "gifts.$": true },
        function(err, gift) {
          if (err) res.send(err);
          activeGifts.push(gift[0].gifts[0]);
        }
      );
    }
    res.json(activeGifts);
  });

  //Get Active gifts for DONOR from RECIPIENT (Without the donor giftList)
  app.get("/api/:ethereumAddress/activeGiftsList", async function(req, res) {
    var activeGifts = [];

    var recipients = await Recipient.find({}, { gifts: 1 }, function(
      err,
      recipients
    ) {
      if (err) res.send(err);
    });

    for (var i = 0, len_i = recipients.length; i < len_i; i++) {
      for (var j = 0, len_j = recipients[i].gifts.length; j < len_j; j++) {
        if (
          recipients[i].gifts[j].ethDonorAddr == req.params.ethereumAddress &&
          recipients[i].gifts[j].receivedDate == ""
        ) {
          // console.log(recipients[i].gifts[j]);
          activeGifts.push(recipients[i].gifts[j]);
        }
      }
    }
    // console.log(activeGifts);
    res.json(activeGifts);
  });

  app.put("/api/addGift", async function(req, res) {
    // Recipient.findById(req.params.recipient_id, function(err, recipient) {
    console.log(req.body);
    Recipient.find(
      { ethRecipientAddr: req.body.ethRecipientAddr },
      // { "gifts.$": true },
      function(err, recipient) {
        if (err) res.send(err);
        // console.log("recipient before in server: ", recipient);
        //var gift = new Gift();
        //setting  new data to whatever was changed. If
        //nothing was changed we will not alter the field.
        recipient[0].gifts.push({
          description: req.body.description,
          expiry: req.body.expiry,
          suggDonationAmt: req.body.suggDonationAmt,
          creationDate: req.body.creationDate,
          items: req.body.items
        });
        console.log(recipient[0].gifts);

        //save gift
        recipient[0].save(function(err) {
          if (err) res.send(err);
          res.json({ message: "Recipient + Gift has been saved" });
        });
      }
    );
  });
  // Get Active gifts for DONOR and MERCHANT same function
  // app.get("/api/:ethereumAddress/activeGiftsList", async function(req, res) {
  //   var activeGifts = [];
  //   var gifts;
  //   var ethereumAddress = req.params.ethereumAddress.split("_")[1];
  //
  //   //var donor = await Donor.findById(req.params.ethereumAddress, function(
  //   console.log(req.params.ethereumAddress.split("_")[0]);
  //   if (req.params.ethereumAddress.split("_")[0] === "donor") {
  //     var donor = await Donor.findOne(
  //       { ethDonorAddr: ethereumAddress },
  //       function(err, donor) {
  //         if (err) res.send(err);
  //       }
  //     );
  //     // console.log(donor.donatedActiveGifts);
  //     gifts = donor.donatedActiveGifts;
  //   } else {
  //     var merchant = await Merchant.findOne(
  //       { ethMerchantAddr: ethereumAddress },
  //       function(err, merchant) {
  //         if (err) res.send(err);
  //       }
  //     );
  //     gifts = merchant.servedActiveGifts;
  //   }
  //   console.log(gifts);
  //
  //   for (var i = 0, len = gifts.length; i < len; i++) {
  //     await Recipient.find(
  //       { "gifts.ethGiftAddr": gifts[i] },
  //       { "gifts.$": true },
  //       function(err, gift) {
  //         if (err) res.send(err);
  //         activeGifts.push(gift[0].gifts[0]);
  //       }
  //     );
  //   }
  //   res.json(activeGifts);
  // });

  // console.log(donor.donatedActiveGifts);
  // var activeGifts_tmp = await Recipient.find(
  //   {
  //     "gifts.ethGiftAddr": { $in: donor.donatedActiveGifts }
  //   },
  //   function(err, activeGifts_tmp) {
  //     if (err) res.send(err);
  //   }
  // );
  //
  // activeGifts_tmp2 = activeGifts_tmp[0].gifts;
  // activeGifts_tmp2.forEach(function(giftEthAdrr) {
  //   console.log("EACH giftEthAdrr", giftEthAdrr);
  //   activeGifts.push(giftEthAdrr);
  // });

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
