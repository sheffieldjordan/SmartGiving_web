const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");
const mongoose = require("mongoose");
var fs = require("fs");
const GetEthereumGifts = require("../ethereum/getGiftStats_server/getstats");
var ObjectId = require("mongodb").ObjectID;

var Recipient = mongoose.model("Recipient");
var Donor = mongoose.model("Donor");
var Merchant = mongoose.model("Merchant");

const sendError = (res, error) => {
  res.status(500).send({ error });
};
module.exports = app => {
  //*************** Working with Gabe ***************//
  app.get("/api/activeRecipientsList", async function(req, res) {
    const recipients = await Recipient.find({}, { _id: 0, __v: 0 });
    res.json(recipients);
  });

  app.get("/api/getMerchants", async function(req, res) {
    const merchants = await Merchant.find({}, { _id: 0, __v: 0 });
    res.json(merchants);
  });

  //*************** Working with Gabe ***************//

  app.get("/api/updateDB", async function(req, res) {
    const completion = async ethData => {
      console.log(ethData.length);
      for (var i = 0, len = ethData.length; i < len; i++) {
        var obj = JSON.parse(ethData[i]);
        console.log("JSON parsed", obj);
        var recipient = await Recipient.find(
          { "gifts._id": obj.id },
          { "gifts.$": true },
          function(err, recipient) {
            if (err) res.send(err);
          }
        );

        if (recipient[0] == undefined) {
          console.log("Recipient not found: " + obj.id);
          continue;
        }

        new_gift_data = recipient[0].gifts[0];
        obj.giftAddress ? (new_gift_data.ethGiftAddr = obj.giftAddress) : null;
        obj.donor ? (new_gift_data.ethDonorAddr = obj.donor) : null;
        obj.maxDonation
          ? (new_gift_data.donorDonationAmt = obj.maxDonation)
          : null;
        obj.finalCost ? (new_gift_data.finalCost = obj.finalCost) : null;
        obj.selectedMerchant
          ? (new_gift_data.ethMerchantAddr = obj.selectedMerchant)
          : null;
        obj.updateTime
          ? (new_gift_data.lastUpdate = new Date(parseInt(obj.updateTime, 10)))
          : null;
        obj.merchantShipped
          ? (new_gift_data.merchantShipped = obj.merchantShipped)
          : null;
        obj.timeShipped
          ? (new_gift_data.shippingDate = new Date(
              parseInt(obj.timeShipped, 10)
            ))
          : null;
        obj.itemReceived
          ? (new_gift_data.itemReceived = obj.itemReceived)
          : null;
        obj.timeReceived
          ? (new_gift_data.receivedDate = new Date(
              parseInt(obj.timeReceived, 10)
            ))
          : null;
        obj.balance ? (new_gift_data.balance = obj.balance) : null;

        var new_bid_data = [];
        new_gift_data.bids = [];
        for (var j = 0, len_j = obj.bids.length; j < len_j; j++) {
          let merchId = obj.bids[j].merchId;
          let bid = obj.bids[j].bid;

          new_bid_data = {
            ethMerchantAddr: merchId,
            bidAmt: bid
          };
          new_gift_data.bids.push(new_bid_data);
        }

        // console.log("New Gift Data", new_gift_data);
        Recipient.update(
          { "gifts._id": ObjectId(obj.id) },
          {
            $set: {
              "gifts.$": new_gift_data
            }
          },
          function(err, recipient_gift) {
            if (err) res.send(err);
          }
        );
      }
      res.json({ message: ethData });
    };
    GetEthereumGifts(completion);
  });

  //Get Active gifts for DONOR
  app.get("/api/:ethereumAddress/activeDonorGiftsList", async function(
    req,
    res
  ) {
    // var activeGifts = [];
    // const donorAddress = req.params.ethereumAddress;
    // var donor = await Donor.findOne({ ethDonorAddr: donorAddress }, function(
    //   err,
    //   donor
    // ) {
    //   if (err) res.send(err);
    // });
    //
    // if (donor === null) {
    //   sendError(
    //     res,
    //     Error(`Could not find donor with address ${donorAddress}`)
    //   );
    //   return;
    // }
    //
    // var gifts = donor.donatedActiveGifts;
    // for (var i = 0, len = gifts.length; i < len; i++) {
    //   await Recipient.find(
    //     { "gifts.ethGiftAddr": gifts[i] },
    //     { "gifts.$": true },
    //     function(err, gift) {
    //       if (err) res.send(err);
    //       activeGifts.push(gift[0].gifts[0]);
    //     }
    //   );
    // }
    // res.json(activeGifts);
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

  app.put("/api/addMerchant", async function(req, res) {
    var merchant = new Merchant();

    merchant.name = req.body.name;
    merchant.email = req.body.email;
    merchant.ethMerchantAddr = req.body.ethMerchantAddr;
    merchant.location = req.body.location;
    merchant.storeDescription = req.body.storeDescription;
    merchant.photo = req.body.photo;
    merchant.minShipment = 0;
    merchant.maxShipment = 100;

    merchant.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Merchant successfully added!" });
    });
  });

  app.put("/api/addDonor", async function(req, res) {
    var donor = new Donor();

    donor.name = req.body.name;
    donor.email = req.body.email;
    donor.ethDonorAddr = req.body.ethDonorAddr;

    donor.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Donor successfully added!" });
    });
  });

  app.put("/api/addRecipient", async function(req, res) {
    var recipient = new Recipient();

    recipient.title = req.body.title;
    recipient.contact_name = req.body.contact_name;
    recipient.about = req.body.about;
    recipient.email = req.body.email;
    recipient.location = req.body.location;
    recipient.website = req.body.website;
    recipient.facebook = req.body.facebook;
    recipient.instagram = req.body.instagram;
    recipient.twitter = req.body.twitter;
    recipient.ethRecipientAddr = req.body.ethRecipientAddr;
    recipient.image = req.body.image;

    recipient.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Recipient successfully added!" });
    });
  });

  app.put("/api/addGift", async function(req, res) {
    // Recipient.findById(req.params.recipient_id, function(err, recipient) {
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
          title: req.body.title,
          summary: req.body.summary,
          background: req.body.background,
          tags: req.body.tags,
          challenge: req.body.challenge,
          expiry: req.body.expiry,
          dollars: req.body.dollars,
          creationDate: Date.now(),
          items: req.body.items
        });
        // console.log(recipient[0].gifts);

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
