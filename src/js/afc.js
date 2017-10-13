import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";
import {currencyImage,getDataByType,getDataByTypeCode,processMoney} from './utils';

function currencyAfc(eventName,cb) {

  var init = () => {
    EDIS.sample_data = this.settings.sample_data;

    try {
      EDIS.get(getAfc);
      if(cb){
        cb();
      }
    } catch (e) {
      CD.setExtraData({
        display_value: "",
        remaining_afc: "",
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

  var getAfc = raw => {
    let remainingAfc;
    try {
      let multiSelect = new MultiSelect(raw);

      CD.setExtraData({
        edis_success: "yes",
        remaining_afc: multiSelect.afcAvailable
      });
      remainingAfc = multiSelect.afcAvailable;

      this.settings.image = setImage(remainingAfc);
    } catch (e) {
      remainingAfc = '';
      this.settings.image = '';
      CD.setExtraData({
        edis_success: "no"
      });
    } finally {
      this.trigger(eventName,{remainingAfc});
      if(cb){
        cb();
      }
    }
  };

  var setImage = (remainingAfc) => {
    const DEVICE = this.settings.device;
    let image = null;
    if (remainingAfc === 0 || remainingAfc < 0) {
      image = currencyImage("prg","afc","c",DEVICE);
    } else if (remainingAfc > 0) {
      image = currencyImage("prg","afc","a",DEVICE);
    } else {
      image = currencyImage("prg","afc","b",DEVICE);
    }
    return image;
  };

  init();
}

export default currencyAfc;
