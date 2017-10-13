import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";
import {currencyImage,displayDate} from './utils';

function currencyPoints(cb) {

  const DEVICE = this.settings.device;
  const CARD = this.settings.cardProduct;

  var cardControl = ()=> {

    switch (this.settings.cardProduct) {
      case "prg":
      case "gold":
      case "amgold":
      case "green":
      case "aed":
      case "aep":
      case "mercedes":
      case "morgstan":
      case "blue":
        this.settings.image = setImage();
        initEdis();
        break;
      case "hiltons":
      case "hiltonb":
        this.settings.image = setImage(null,this.settings.hiltonPoints);
        this.trigger(
          "MI:buildPoints",
          {
            points : this.settings.hiltonPoints,
            date : this.settings.hiltonDate,
          }
        );
        break;
      case "spg":
        this.settings.image = currencyImage(CARD,"pib","a",DEVICE);
        this.trigger("MI:buildPoints",{});
        break;
      default:
        this.forceFallback('cardProduct does not show points')
        break;
    }
  }

  var initEdis = () => {

    EDIS.sample_data = this.settings.sample_data;

    CD.setExtraData({
      edis_points: "",
      merged_points: CARD.indexOf('hilton') == 0 ? this.settings.hiltonPoints : this.settings.mergedPoints
    });


    try {
      EDIS.get(getPoints);
    } catch (e) {
      CD.setExtraData({
        display_value: "",
        edis_points: "",
        edis_success: "no",
        presents_edis_data: "no"
      });
      console.log(e);
      this.trigger("MI:buildPoints",{});
      if(cb){
        cb();
      }
    }
  };

  var getPoints = raw => {
    let displayValues = {
      points:null,
      date:null,
    };
    try {
      const multiSelect = new MultiSelect(raw);
      let pointVal = multiSelect.points;

      CD.setExtraData({
        edis_success: "yes",
        edis_points: pointVal
      });

      this.settings.edisPoints = pointVal;
      this.settings.image = setImage(pointVal,this.settings.mergePoints);

      if(pointVal === 0 || pointVal > 0){
        this.settings.displaysEdisPoints = true;
        displayValues.points = pointVal;
        displayValues.date = displayDate();
      }else if(this.settings.mergePoints === 0 || this.settings.mergePoints > 0){
        this.settings.displaysEdisPoints = false;
        displayValues.points = this.settings.mergePoints;
        displayValues.date = this.settings.mergeDate;
      }else{
        throw "No point values available to use";
      }

    } catch (e) {
      CD.setExtraData({
        edis_success: "no"
      });
    } finally {
      this.trigger("MI:buildPoints",displayValues);
      if(cb){
        cb();
      }
    }
  };

  var setImage = (edisPoints,mergedPoints) => {

    let image = null;

    if (edisPoints === 0) {
      image = currencyImage(CARD,"pib","b",DEVICE);
    } else if (edisPoints > 0) {
      image = currencyImage(CARD,"pib","a",DEVICE);
    } else if (mergedPoints === 0) {
      image = currencyImage(CARD,"pib","b",DEVICE);
    } else if (mergedPoints > 0) {
      image = currencyImage(CARD,"pib","a",DEVICE);
    } else {
      image = currencyImage(CARD,"pib","c",DEVICE);
    }

    return image;

  };

  cardControl();

}

export default currencyPoints;
