import EDIS from "./edis.1.4.0";
import MultiSelect from "./multi-select";


function merchantRecommendations(triggerName,cb) {

  this.settings.merchants = [];
  var init = () => {

    try {
      EDIS.get(getRecommendations);
    } catch (e) {
      CD.setExtraData({
        edis_success: "no",
      });
      console.log(e);
      this.trigger(triggerName);
      if(cb){
        cb();
      }
    }
  };

  var getRecommendations = (raw) => {

    try {

      let multiSelect = new MultiSelect(raw);
      let recoSection = multiSelect.merchantRecos;
      let recommendations = recoSection.filter(function(v){
        return v.merchantRecommendationInfo.RecommendationType === 'PERSONALIZED';
      });

      let reco_num = recommendations.length;

      CD.setExtraData({
        edis_success: "yes",
      });

      if(recommendations && recommendations.length){
        for(let i = 0 ; i < recommendations.length; i++){
          let store = recommendations[i].merchantRecommendationInfo;
          store.address = addAddress(store);
          store.clickthrough = addDynamicLink(store);
          store.results = reco_num;
          this.settings.merchants.push(store);
        }
      }
    } catch(e) {
      console.log(e);
      this.settings.merchants = [];
      CD.setExtraData({
        edis_success: "no"
      });
    }finally {
      this.trigger(triggerName);
      if(cb){
        cb();
      }
    }
  }

  function addDynamicLink(store) {
    let url = [
      "https://shopsmallnow.americanexpress.com/us/small-business/shop-small/maps/",
      "near=",
      encodeURIComponent(
        store.DigitalRecoLocationList.DigitalRecoLocation[
          0
        ].digitalRecoAddressDef.CityNM
      ),
      ",%20",
      encodeURIComponent(
        store.DigitalRecoLocationList.DigitalRecoLocation[
          0
        ].digitalRecoAddressDef.StateNM
      ),
      ",%20United%20States",
      "/key=",
      encodeURIComponent(store.merchantName),
      "?extInd=0[mi_verbatim]"
    ].join("");
    return url;
  }

  function addAddress(store) {
    let sLocation = store.DigitalRecoLocationList.DigitalRecoLocation[
      0
    ].digitalRecoAddressDef;
    let displayPostal = sLocation.AddrPostalCd.split("-")[0];
    displayPostal = displayPostal.substring(0, 5);
    let displayPhone;
    if (sLocation.Phone && sLocation.Phone.length == 10) {
      displayPhone = "(" +
        sLocation.Phone.slice(0, 3) +
        ") " +
        sLocation.Phone.slice(3, 6) +
        "-" +
        sLocation.Phone.slice(6);
    } else if (sLocation.Phone) {
      displayPhone = sLocation.Phone.split(".").join("");
      displayPhone = displayPhone.split("-").join("");
      displayPhone = displayPhone
        .replace("(", "")
        .replace(")", "")
        .replace(" ", "");
      displayPhone = "(" +
        displayPhone.slice(0, 3) +
        ") " +
        displayPhone.slice(3, 6) +
        "-" +
        displayPhone.slice(6);
    }
    let address = {
      address1 : sLocation.StreetAddressLine1DS,
      city :  sLocation.CityNM,
      state : sLocation.StateNM,
      postal : displayPostal,
      phone : displayPhone || ''
    }
    return address;
  }

  init();
}

export default merchantRecommendations;
