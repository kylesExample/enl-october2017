import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";
import {currencyImage,displayDate} from './utils';

function currencyDollars(cb) {

  const DEVICE = this.settings.device;
  const CARD = this.settings.cardProduct;

  var initEdis = () => {

    EDIS.sample_data = this.settings.sample_data;
    CD.setExtraData({
      edis_points: "",
      merged_points: this.settings.mergedPoints,
    });

    this.settings.image = currencyImage("mr","c",this.settings.device);

    try {
      EDIS.get(getDollars);
    } catch (e) {
      CD.setExtraData({
        display_value: "",
        edis_points: "",
        edis_success: "no",
        presents_edis_data: "no"
      });
      console.log(e);
      this.trigger("MI:buildDollars" , {});
      if(cb){
        cb();
      }
    }
  };

  var getDollars = raw => {

    let displayValues = {
      dollars:null,
      date:null,
    };

    try {
      const multiSelect = new MultiSelect(raw);
      let rewardDollars = multiSelect.rewardDollars;

      CD.setExtraData({
        edis_success: "yes",
        edis_dollars: rewardDollars
      });

      this.settings.image = setImage(rewardDollars);
      displayValues.dollars = rewardDollars;
      displayValues.date = displayDate();

    } catch (e) {
      console.log(e);
      CD.setExtraData({
        edis_success: "no"
      });
    } finally {
      this.trigger("MI:buildDollars",displayValues);
      if(cb){
        cb();
      }
    }
  };

  var setImage = (dollars) => {

    let image = null;

    if (dollars === 0) {
      image = currencyImage(CARD,"rdib","b",DEVICE);
    } else if (dollars > 0) {
      image = currencyImage(CARD,"rdib","a",DEVICE);
    } else {
      image = currencyImage(CARD,"pib","c",DEVICE);
    }

    return image;
  };

  initEdis();
}

export default currencyDollars;
