class MultiSelect {

  constructor(raw){
    let data = JSON.parse(raw);
    let multiselect = _.get(data , 'multiselect.multiSelectDataList' , null);
    if(multiselect.length && multiselect !== null){
      this.multiselect = multiselect;
    }else{
      throw 'NO multiSelectDataList';
    }
  }

  getDataByType(type) {
    let section = _.find(this.multiselect, function(v) {
      return v.type == type;
    });
    return section && section.data ? section.data : "";
  }

  processMoney(moneyString) {
    let moneyFloat = parseFloat(moneyString);
    if (isNaN(moneyFloat)) {
      return "";
    } else {
      return Math.round(moneyFloat * 100) / 100;
    }
  }

  get afcAvailable() {
    let afcSection = this.getDataByType(1014);
    let availableAmount = _.get(
      afcSection,
      "airline_fee_credit_summary.annual_summary[0].available_amt.value",
      ""
    );
    return this.processMoney(availableAmount);
  }

  get afcClaimed() {
    let afcSection = this.getDataByType(1014);
    let claimedAmount = _.get(
      afcSection,
      "airline_fee_credit_summary.annual_summary[0].claimed_amt.value",
      ""
    );
    return this.processMoney(claimedAmount);
  }

  get loungeVisits() {
    let loungeSection = this.getDataByType(1012);
    let loungeVisits = !isNaN(parseFloat(loungeSection.number_of_visits)) ? parseFloat(loungeSection.number_of_visits) : '';
    return loungeVisits;
  }

  get points() {
    let mrSection = this.getDataByType(1007);
    let pointVal = '';
    if(mrSection.hasOwnProperty('value')){
      pointVal = !isNaN(parseFloat(mrSection.value)) ? parseFloat(mrSection.value) : '';
    }
    return pointVal;
  }

  get remainingRoc() {
    let rocSection = this.getDataByType('DATA TYPE CODE NEEDED');
    let availableAmount = _.get(
      rocSection,
      "airline_fee_credit_summary.annual_summary[0].available_amt.value",
      ""
    );
    availableAmount = !isNaN(parseFloat(availableAmount,10)) ? parseFloat(availableAmount,10) : "";
    // availableAmount = 13;
    return availableAmount;
  }

  get rewardDollars() {
    let rewardsSection = this.getDataByType(1011);
    let dollarsValue = _.get(rewardsSection,'LoyaltyResponseParams.AccountList.Account[0].LoyaltyAccountInfoList.LoyaltyAccountInfo[0].LoyaltyAccount.AccountBalance[0].Currency.currencyValue','');
    dollarsValue = !isNaN(parseFloat(dollarsValue)) ? parseFloat(dollarsValue) : '';
    return dollarsValue;
  }

  get savings() {
    let savingsSection = this.getDataByType(1006);
    return this.processMoney(savingsSection);
  }

  get merchantRecos() {
    return this.getDataByType(1008);
  }

};

export default MultiSelect;
