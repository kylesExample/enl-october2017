import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";
import {currencyImage,getDataByType,getDataByTypeCode,processMoney} from './utils';

function currencySavings(cb) {

  const DEVICE = this.settings.device;
  const CARD = this.settings.cardProduct;

  var init = () => {
    EDIS.sample_data = this.settings.sample_data;
    setImage();
    // this.settings.image = currencyImage("std","c",this.settings.device);

    try {
      EDIS.get(getSavings);
    } catch (e) {
      CD.setExtraData({
        display_value: "",
        edis_success: "no",
        edis_savings: "",
        presents_edis_data: "no"
      });
      console.log(e);
      this.trigger('MI:buildSavings',{});
      if(cb){
        cb();
      }
    }
  }

  var getSavings = (raw) =>{
    let savings;
    try {

      const multiSelect = new MultiSelect(raw);
      CD.setExtraData({
        edis_success: "yes",
        edis_savings: multiSelect.savings
      });

      savings = multiSelect.savings;

    } catch (e) {
      console.log(e);
      CD.setExtraData({
        edis_success: "no"
      });
    } finally {
      this.settings.image = setImage(savings);
      this.trigger("MI:buildSavings",{savings});
      if(cb){
        cb();
      }
    }
  }

  var setImage = (savingsVal) => {
    let image = null;
    if (savingsVal === 0) {
      image = currencyImage(CARD,"std","b",DEVICE);
    } else if (savingsVal > 0) {
      image = currencyImage(CARD,"std","a",DEVICE);
    } else {
      image = currencyImage(CARD,"std","c",DEVICE);
    }
    return image;
  };

  init();
}

export default currencySavings;
