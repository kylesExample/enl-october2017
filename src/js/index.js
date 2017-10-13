__CD__; // eslint-disable-line

import $ from "jquery";
import polyfill from "./polyfill";
import App from "./app";
import "../css/styles.scss";

import currencyTemplate from "../html/_currency-template.html";
import dataVisTemplate from "../html/_data-vis-template.html";
import merchantTemplate from "../html/_merchant-template.html";
import savingsTemplate from "../html/_savings-template.html";

import {
  commafy,
  currencyImage,
  displayDate,
  getCardProduct,
  getImageWithHeight,
  pieFiller
} from "./utils";


import imageMappedInfo from "./image-mapped-info";

polyfill();

const app = new App({
  itemIndex: CD.param("mi_item_index") || "0",
  cardProduct: getCardProduct(),
  mergedPoints: CD.param("mi_points") ?
    parseInt(CD.param("mi_points"), 10) :
    "",
  asOfDate: CD.param("mi_as_of"),
  hiltonPoints: CD.param("mi_h_points") ?
    parseInt(CD.param("mi_h_points"), 10) :
    "",
  hiltonDate: CD.param("mi_h_asof"),
  spend: CD.param("mi_spend") || "",
  device: CD.param("mi_device") || "desk",
  block: CD.param("mi_block") || "currency-points",
  sample_data: CD.param("mi_sample_data") || "",
  imageName: ""
});

addTriggers.call(app);
app.blockControl();


function addTriggers() {

  // add custom event listeners

  //-------------------------------------------------------------------------
  // MR POINTS
  //-------------------------------------------------------------------------

  this.on("MI:buildPoints", item => {
    const link = "https://global.americanexpress.com/dashboard?image_name=";
    const settings = this.settings;
    const card = settings.cardProduct;
    const image = settings.image;

    let displayPoints = item.detail.points;
    let displayDate = item.detail.date;

    $("#mi_size_container").html(currencyTemplate);
    let fullImagePath = settings.s3 + image + ".png";

    if (image && image.indexOf("pib_a") > 0 && image.indexOf("spg") === -1) {
      $("#mi_size_container").removeClass("static");
      displayPoints = commafy(displayPoints);
      if (displayPoints.length > 10) {
        $(".points").addClass("billions");
      } else if (displayPoints.length > 7) {
        $(".points").addClass("millions");
      }

      $(".points").html(displayPoints);
      if (card.indexOf("hilton") >= 0) {
        $(".date").html("Hilton Honors Points as of " + displayDate);
      } else {
        $(".date").html(
          "&nbsp;Membership Rewards&reg; points as of " + displayDate
        );
      }

      CD.setExtraData({
        collapsed_state: false,
        display_value: displayPoints,
        image_name: image,
        presents_edis_data: settings.displayPoints > -1 ? "yes" : "no"
      });

      $("#mi_size_container").removeClass("hidden");
      $("#mi_size_container").width();
      CD.waitForAsset(fullImagePath);
    } else if (image) {
      getImageWithHeight(fullImagePath);
      // CD.setImageRedirect(fullImagePath);
      CD.setExtraData({
        display_value: ""
      });
    } else {
      $("#mi-redirect-image").remove();
      CD.setExtraData({
        collapsed_state: true
      });
    }

    CD.setClickthrough(link + settings.image);
  });


  //-------------------------------------------------------------------------
  // Reward Dollars in Bank
  //-------------------------------------------------------------------------


  this.on("MI:buildDollars", item => {
    const link = "https://global.americanexpress.com/dashboard?image_name=";
    const settings = this.settings;
    const card = settings.cardProduct;
    const image = settings.image;

    let displayDollars = item.detail.dollars;
    let displayDate = item.detail.date;

    $("#mi_size_container").html(currencyTemplate);

    let fullImagePath = settings.s3 + image + ".png";

    if (image && image.indexOf("rdib_a") > 0) {
      $("#mi-redirect-image").remove();
      displayDollars = commafy(displayDollars);

      if (displayDollars.indexOf(".") >= 0) {
        displayDollars = displayDollars.replace(".", "<span>") + "</span>";
      }
      $(".points").html("<span>$</span>" + displayDollars);
      $(".date").html("Reward Dollars&reg; as of " + displayDate);

      CD.setExtraData({
        collapsed_state: false,
        display_value: displayDollars,
        image_name: image,
        presents_edis_data: "yes"
      });

      $("#mi_size_container").removeClass("hidden");
      $("#mi_size_container").width();
      CD.waitForAsset(fullImagePath);
    } else if (image) {
      // CD.setImageRedirect(fullImagePath);
      getImageWithHeight(fullImagePath);
      CD.setExtraData({
        collapsed_state: false,
        display_value: ""
      });
    } else {
      $("#mi-redirect-image").remove();
      CD.setExtraData({
        collapsed_state: true
      });
    }

    CD.setClickthrough(link + settings.image);
  });

  //-------------------------------------------------------------------------
  // SAVINGS
  //-------------------------------------------------------------------------

  this.on("MI:buildSavings", item => {
    const link = "https://global.americanexpress.com/dashboard?image_name=";
    const settings = this.settings;
    const image = settings.image;
    const savings = item.detail.savings;
    let fullImagePath = settings.s3 + settings.image + ".png";
    $("#mi_size_container").html(savingsTemplate);

    if (image && image.indexOf("std_a") > 0) {
      let displayValue = commafy(savings);
      $(".quantity").html(
        `<span>$</span>${displayValue.replace(".", "<span>") + "</span>"}`
      );

      CD.setExtraData({
        display_value: displayValue,
        presents_edis_data: "yes"
      });

      getImageWithHeight(fullImagePath);
    } else if (image) {
      CD.setExtraData({
        collapsed_state: false
      });
      getImageWithHeight(fullImagePath);
      $("#mi_size_container").addClass("static");
    }

    CD.setClickthrough(link + settings.image);
  });

  //-------------------------------------------------------------------------
  // AFC CREDIT
  //-------------------------------------------------------------------------

  this.on("MI:buildAfc", item => {
    const link = "https://global.americanexpress.com/dashboard?image_name=";
    const settings = this.settings;
    const image = this.settings.image;
    const device = this.settings.device;
    let remainingAfc = item.detail.remainingAfc;

    $("#mi_size_container")
      .html(dataVisTemplate)
      .addClass("afc");

    if (image.indexOf("afc_a") > 0) {
      $(".fill").width(100 - parseFloat(remainingAfc) + "%");
      remainingAfc = remainingAfc.toFixed(2);
      let remainingText = [
        "<span>$</span>",
        remainingAfc.split(".")[0],
        "<span>",
        remainingAfc.split(".")[1],
        "</span>"
      ].join("");

      $(".remaining").html(remainingText);
      $(".afc-text span").html(displayDate());
      CD.setExtraData({
        presents_edis_data: "yes",
        display_value: remainingAfc
      });
      let bg =
        device == "mobile" ?
        "build/img/prg_incomplete_mobile.png" :
        "build/img/prg_incomplete.png";
      let images = [bg, "build/img/plane.png"];

      $("#mi_size_container").css("background-image", 'url("' + bg + '")');
      CD.getImages(images, function(img) {
        CD.setExtraData({
          collapsed_state: false
        });
        $("#mi_size_container")
          .removeClass("hidden")
          .width();
      });
    } else if (image) {
      CD.setExtraData({
        collapsed_state: false
      });

      let fullImagePath = [this.settings.s3, image, ".png"].join("");
      CD.setImageRedirect(fullImagePath);
    }

    if (image.indexOf("afc_b") > 0) {
      CD.setClickthrough(
        "https://rewards.americanexpress.com/olet/enroll?campaignId=br5v0615&offerType=afcgoldbr5v0001&image_name=" +
        image
      );
    } else {
      CD.setClickthrough(link + image);
    }
  });

  //-------------------------------------------------------------------------
  // HILTON SPEND - DATA VIS BLOCK
  //-------------------------------------------------------------------------

  this.on("MI:buildHilton", item => {
    const link = "https://global.americanexpress.com/dashboard?image_name=";
    const settings = this.settings;
    const card = this.settings.cardProduct;
    const device = this.settings.device;
    $("#mi_size_container").html(dataVisTemplate);

    let spend = parseFloat(this.settings.spend);
    spend = isNaN(spend) ? 0 : spend;
    let status = card == "hiltonb" ? "gold" : "diamond";
    let color = card == "hiltonb" ? "#cd8e00" : "#4d4f52";
    let goal = card == "hiltonb" ? 20000 : 40000;
    let percent = spend / goal;

    if (spend >= goal) {
      CD.setExtraData({
        collapsed_state: false
      });
      let image = currencyImage(card, "spend", "a", device);
      let imagePath = [settings.s3, image, ".png"].join("");
      CD.setClickthrough(link + image);
      CD.setImageRedirect(imagePath);
    } else {
      let remaining = goal - spend;
      remaining = remaining.toFixed(2);
      let remainingHtml = [
        "<span>$</span>",
        commafy(remaining.split(".")[0]),
        "<span>",
        remaining.split(".")[1],
        "</span>"
      ].join("");
      $(".quantity").html(remainingHtml);
      $(".message").html("more spend until " + status + " Status");
      pieFiller(percent, color, device);
      let image = currencyImage(card, "spend", "b", device);
      let imagePath = ["build/img/", image, ".png"].join("");
      CD.setClickthrough(link + image);
      CD.getImage(imagePath, function(img) {
        CD.setExtraData({
          collapsed_state: false
        });
        $("#mi_size_container").css(
          "background-image",
          'url("' + img.src + '")'
        );
        $("#mi_size_container")
          .removeClass("hidden")
          .width();
      });
    }
  });

  //-------------------------------------------------------------------------
  // ROC DATA - DATA VIS BLOCK
  //-------------------------------------------------------------------------

  this.on("MI:buildRoc", item => {
    const link = "https://global.americanexpress.com/dashboard?image_name=";
    const settings = app.settings;
    const card = settings.cardProduct;
    const device = settings.device;

    const image = settings.image;

    const remainingRoc = item.detail.remainingRoc;

    let fullImagePath = [this.settings.s3, image, ".png"].join("");

    $("#mi_size_container").html(dataVisTemplate);

    if (remainingRoc > 0) {
      let goal = card === "aep" ? 30 : 20;
      let rewardPercent = card === "aep" ? "50%" : "20%";
      let fillPercent = (goal - remainingRoc) / goal;

      pieFiller(fillPercent, "#009aba", device);
      $(".quantity").text(remainingRoc);
      $(".message").text(
        "Purchases left to get " + rewardPercent + " extra points"
      );

      CD.setExtraData({
        display_value: remainingRoc,
        presents_edis_data: "yes",
        collapsed_state: false
      });

      $("#mi_size_container").css(
        "background-image",
        'url("' + fullImagePath + '")'
      );
      $("#mi_size_container")
        .removeClass("hidden")
        .width();
      CD.waitForAsset(fullImagePath);
    } else if (image.indexOf("roc_a") > 0) {
      CD.setExtraData({
        collapsed_state: false
      });
      CD.setImageRedirect(fullImagePath);
    }

    CD.setClickthrough(link + image);
  });

  //-------------------------------------------------------------------------
  // Merchant Recommendations
  //-------------------------------------------------------------------------

  this.on("MI:buildMerchant", item => {
    const settings = this.settings;
    const index = parseInt(settings.itemIndex, 10);
    const merchants = settings.merchants;
    const device = settings.device;

    CD.setExtraData({
      block: `Merchant #${index + 1}`,
      presents_edis_data: "no",
      edis_success: "no",
      collapsed_state: true
    });

    $("#mi_size_container").html(merchantTemplate);

    if (merchants.length && merchants[index]) {
      let store = merchants[index];
      let addr = [
        store.address.address1,
        store.address.city,
        store.address.state,
        store.address.postal
      ];
      $(".name").html(store.merchantName);
      $(".address").html(addr.join(" "));
      CD.setClickthrough(store.clickthrough);
      CD.setExtraData({
        presents_edis_data: "yes",
        edis_success: "yes",
        collapsed_state: false
      });
      $("#mi_size_container")
        .removeClass("hidden")
        .width();

      let imagePath = [
        "build/img/reco_",
        index % 2 + 1,
        device === "mobile" ? "" : "_desk",
        ".png"
      ].join("");

      $("#mi_size_container").css("background-image", `url("${imagePath}")`);
      $("#mi_size_container").width();
      CD.waitForAsset(`${settings.project}${imagePath}`);
    } else {
      this.forceFallback(
        "Merchant Recommendation #" + index + " doesn't exist"
      );
    }
  });

  //-------------------------------------------------------------------------
  // Static Header & CTA for Merchant Recommendations
  //-------------------------------------------------------------------------

  this.on("MI:buildMerchantStatic", item => {
    const settings = this.settings;
    const card = settings.cardProduct;
    const device = settings.device;
    const image = settings.image;
    const merchants = settings.merchants;

    if (merchants.length && merchants[0]) {
      let imageName = [image, settings.device == "desk" ? "_desk" : ""].join(
        ""
      );
      let fullImagePath = settings.s3 + imageName + ".png";
      CD.setExtraData({
        collapsed_state: false,
        image_name: image
      });
      CD.setImageRedirect(fullImagePath);
      CD.setClickthrough(
        "https://www.americanexpress.com/us/small-business/shop-small/maps/cat=Newly-Added?intlink=em-mer-CPSeNLAug&image_name=" +
        imageName
      );
    } else if (image.indexOf("cta") > -1) {
      let imageName = [
        card == "spg" ? "spg_merchrec_default" : "merchrec_default",
        device == "desk" ? "_desk" : ""
      ].join("");
      let fullImagePath = settings.s3 + imageName + ".png";
      CD.setExtraData({
        collapsed_state: false,
        image_name: imageName
      });
      CD.setImageRedirect(fullImagePath);
      CD.setClickthrough(
        "https://www.americanexpress.com/us/small-business/shop-small/maps/cat=Newly-Added?intlink=em-mer-CPSeNLAug&image_name=" +
        imageName
      );
    }
  });

  //-------------------------------------------------------------------------
  // Benefit 3
  //-------------------------------------------------------------------------

  this.on("MI:buildBenefit3", item => {
    const settings = this.settings;
    const image = settings.image;

    if (image) {
      CD.setExtraData({
        collapsed_state: false
      });
      let imageKey = image.replace("_desk", "");
      let info = imageMappedInfo[imageKey];
      if (info.url) {
        let link = info.url;
        if (link && link.indexOf("?") > -1) {
          CD.setClickthrough(link + "&image_name=" + image);
        } else if (link) {
          CD.setClickthrough(link + "?image_name=" + image);
        }
      }

      let fullImagePath = settings.s3 + image + ".png";
      CD.setImageRedirect(fullImagePath);
    } else {
      CD.setExtraData({
        collapsed_state: true
      });
      $("#mi-redirect-image").remove();
    }
  });

  //-------------------------------------------------------------------------
  // Static Images
  //-------------------------------------------------------------------------

  this.on("MI:buildStatic", item => {

    const settings = this.settings;
    const image = settings.image;
    const link = settings.link;

    if (image) {

      CD.setExtraData({
        collapsed_state: false
      });
      let fullImagePath = settings.s3 + image + ".png";
      if (link) {
        CD.setClickthrough(link);
      }
      CD.setImageRedirect(fullImagePath);

    } else {
      this.forceFallback("Image Name is undefined");
    }
  });

  //-------------------------------------------------------------------------
  // Terms and Conditions
  //-------------------------------------------------------------------------

  this.on("MI:buildTerms", item => {

    const settings = this.settings;
    const image = settings.image;
    const imageKey = image.replace("_desk", "");
    const info = imageMappedInfo[imageKey];

    if (info && info.termsImage) {

      CD.setExtraData({
        collapsed_state: false
      });

      if (info.termsUrl) {
        let link = info.termsUrl;
        if (link && link.indexOf("?") > -1) {
          CD.setClickthrough(link + "&image_name=" + image);
        } else if (link) {
          CD.setClickthrough(link + "?image_name=" + image);
        }
      }

      let fullImagePath = settings.s3 + info.termsImage + ".png";
      CD.setImageRedirect(fullImagePath);

    } else {
      CD.setExtraData({
        collapsed_state: true
      });
      $("#mi-redirect-image").remove();
    }

  });

  this.on("MI:buildHiltonTerms", item => {

    const settings = this.settings;
    const card = this.settings.cardProduct;
    const device = this.settings.device;

    let spend = parseFloat(this.settings.spend);
    spend = isNaN(spend) ? 0 : spend;
    let goal = card == "hiltonb" ? 20000 : 40000;
    let scenario = spend >= goal ? "a" : "b";
    let image = currencyImage(card, "spend", scenario, "mobile");
    let info = imageMappedInfo[image]

    if (info && info.termsImage) {
      let fullImagePath = [
        this.settings.s3,
        info.termsImage,
        ".png"
      ].join("");
      // CD.setImageRedirect(fullImagePath);
      if (info.termsUrl) {
        CD.setClickthrough(info.termsUrl);
      }
    } else {
      $("#mi-redirect-image").remove();
    }

  });
}
