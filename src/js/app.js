__CD__; // eslint-disable-line
import Backpack from "backpack";
import $ from "jquery";
import _ from "lodash";
import EDIS from "./edis.1.4.0";

import {
  currencyImage
} from "./utils";

import afc from "./afc";
import benefitThree from "./benefit-3";
import currencyPoints from "./currency-points";
import currencyDollars from "./currency-dollars";
import currencySavings from "./currency-savings";
import rundownHeader from "./rundown-header";
import rocTracker from "./roc-tracker";

import merchantRecommendations from "./merchant-recos";

class App extends Backpack {
  constructor(options) {
    super();

    this.settings = options;
    this.settings.project =
      "http://projects.movableink.com/production/amex-ccsg/consumer-enl-october2017/";

    this.settings.s3 =   "https://s3.amazonaws.com/movableink-client-assets/AMEX/Consumer/September-2017-Consumer-eNL/";
    // this.settings.s3 = "https://s3.amazonaws.com/consumer-enl/10-2017-eNL/";
    this.settings.image = "";
    if (this.settings.device == "mobile") {
      $("#mi_size_container").addClass("mobile");
    }

    $("#mi_size_container").addClass(this.settings.cardProduct);

    CD.setExtraData({
      block: this.settings.block,
      presents_edis_data: "no",
      edis_success: "no",
      collapsed_state: true
    });

  }

  blockControl(cb) {
    cb =
      cb ||
      function() {
        console.log("CB");
      };
    const CARD = this.settings.cardProduct;
    const DEVICE = this.settings.device;

    switch (this.settings.block) {
      case "benefit-3":
        benefitThree.call(this, "MI:buildBenefit3", cb);
        break;
      case "benefit-3-terms":
        benefitThree.call(this, "MI:buildTerms", cb);
        break;
      case "currency-left":
        if (CARD === "bce" || CARD === "bcp") {
          currencyDollars.call(this, cb);
        } else {
          currencyPoints.call(this, cb);
        }
        break;
      case "currency-savings":
        if (
          CARD.indexOf("delta") > -1 ||
          CARD == "plenti" ||
          CARD == "schwab"
        ) {
          this.forceFallback(`${CARD} does not show savings`);
        } else {
          currencySavings.call(this, cb);
        }
        break;
      case "data-vis":
        if (CARD.indexOf("delta") != -1) {
          this.settings.image = currencyImage(CARD, "currency", "a", DEVICE);
          this.settings.link =
            "https://global.americanexpress.com/dashboard?image_name=" +
            currencyImage(CARD, "currency", "a", DEVICE);
          this.trigger("MI:buildStatic");
        } else if (CARD === "aep" || CARD === "aed") {
          rocTracker.call(this, cb);
        } else if (CARD.indexOf("hilton") != -1) {
          this.trigger("MI:buildHilton");
        } else if (CARD === "prg") {
          afc.call(this, "MI:buildAfc", cb);
        } else {
          this.forceFallback(`${CARD} does not show data vis`);
        }
        break;
      case "data-vis-terms":
        if (CARD.indexOf("delta") != -1) {
          this.settings.image = currencyImage(CARD, "currency", "a", DEVICE);
          this.trigger("MI:buildTerms");
        } else if (CARD === "aep" || CARD === "aed") {
          rocTracker.call(this, "MI:buildTerms", cb);
        } else if (CARD.indexOf("hilton") > -1) {
          this.trigger("MI:buildHiltonTerms");
        } else if (CARD === "prg") {
          afc.call(this, "MI:buildTerms", cb);
        } else {
          this.forceFallback(`${CARD} does not show data vis`);
        }
        break;
      case "merchant-listing":
        merchantRecommendations.call(this, "MI:buildMerchant");
        break;
      case "merchant-title":
        this.settings.image = "merchrec_title";
        merchantRecommendations.call(this, "MI:buildMerchantStatic");
        break;
      case "merchant-cta":
        this.settings.image = "merchrec_cta";
        merchantRecommendations.call(this, "MI:buildMerchantStatic");
        break;
      case "rundown-header":
        rundownHeader.call(this);
        break;
      default:
        this.forceFallback('block is undefined');
    }

  }
}

export default App;
