import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";
import {currencyImage,processMoney} from './utils';

function rocData(eventName,cb) {

  var init = () => {

    EDIS.sample_data = this.settings.sample_data;

    try {
      EDIS.get(getRoc);
      if(cb){
        cb();
      }
    } catch (e) {
      CD.setExtraData({
        display_value: "",
        remaining_roc: "",
        edis_success: "no",
        presents_edis_data: "no"
      });
      console.log(e);
      this.trigger(eventName,{});
      if(cb){
        cb();
      }
    }
  };

  var getRoc = raw => {
    let remainingRoc;
    try {
      const multiSelect = new MultiSelect(raw);
      console.log(multiSelect);
      console.log(remainingRoc);
      CD.setExtraData({
        edis_success: "yes",
        remaining_roc: multiSelect.remainingRoc
      });
      remainingRoc = multiSelect.remainingRoc;
      console.log(multiSelect.remainingRoc);
      this.settings.image = setImage(remainingRoc);
    } catch (e) {
      remainingRoc = '';
      this.settings.image = '';
      CD.setExtraData({
        edis_success: "no"
      });
    } finally {
      this.trigger(eventName,{remainingRoc});
      if(cb){
        cb();
      }
    }
  };

  var setImage = (remainingRoc) => {
    const CARD = this.settings.cardProduct;
    const DEVICE = this.settings.device;
    let image = null;

    if (remainingRoc === 0 || remainingRoc < 0) {
      image = currencyImage(CARD,"roc","a",DEVICE);
    } else if (remainingRoc > 0) {
      image = currencyImage(CARD,"roc","b",DEVICE);
    }

    console.log(image);
    return image;
  };

  init();
}

export default rocData;
