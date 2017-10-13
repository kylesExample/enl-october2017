import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";
import { currencyImage } from "./utils";

function benefitThree(eventName,cb) {
  const DEVICE = this.settings.device;
  const CARD = this.settings.cardProduct;

  var cardControl = () => {
    switch (this.settings.cardProduct) {
      case "prg":
      case "gold":
      case "amgold":
      case "green":
      case "aed":
      case "aep":
      case "bce":
      case "bcp":
      case "mercedes":
      case "morgstan":
      case "blue":
        this.settings.image = setImage();
        initEdis();
        break;
      case "deltagold":
      case "deltaplat":
      case "deltares":
      case "deltablue":
      case "hiltons":
      case "hiltonb":
      case "plenti":
      case "spg":
      case "schwab":
        this.settings.image = currencyImage(CARD, "benefit3", "a", DEVICE);
        this.trigger(eventName);
        break;
      default:
        break;
    }
  };

  var initEdis = () => {
    EDIS.sample_data = this.settings.sample_data;
    CD.setExtraData({
      edis_points: ""
    });

    try {
      EDIS.get(getPoints);
    } catch (e) {
      CD.setExtraData({
        display_value: "",
        edis_points: "",
        edis_success: "no"
      });
      console.log(e);
      this.trigger(eventName);
      if (cb) {
        cb();
      }
    }
  };

  var getPoints = raw => {
    try {
      const multiSelect = new MultiSelect(raw);
      let pointVal = multiSelect.points;
      this.settings.image = setImage(pointVal);
      CD.setExtraData({
        edis_success: "yes",
        edis_points: pointVal
      });
    } catch (e) {
      CD.setExtraData({
        edis_success: "no"
      });
    } finally {
      this.trigger(eventName);
      if (cb) {
        cb();
      }
    }
  };

  var setImage = edisPoints => {

    let image = null;
    if (edisPoints > 5000) {
      image = currencyImage(CARD, "benefit3", "b", DEVICE);
    } else if (edisPoints > 0 || edisPoints === 0) {
      image = currencyImage(CARD, "benefit3", "a", DEVICE);
    } else {
      image = currencyImage(CARD, "benefit3", "c", DEVICE);
    }
    return image;

  };

  cardControl();
}

export default benefitThree;
