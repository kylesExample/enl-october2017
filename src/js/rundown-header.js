function rundownHeader(cb) {
  const DEVICE = this.settings.device;
  const CARD = this.settings.cardProduct;

  switch (this.settings.cardProduct) {
    case "blue":
    case "mercedes":
    case "morgstan":
    case "hiltonb":
    case "hiltons":
    case "green":
    case "prg":
    case "amgold":
    case "gold":
    case "aed":
    case "aep":
    case "bce":
    case "bcp":
    case "spg":
      this.settings.image = `data_title${DEVICE == "mobile" ? "" : "_desk"}`;
      this.trigger("MI:buildStatic");
      break;
    default:
      this.forceFallback(`${CARD} does not display Rundown Header`);
      break;
  }
}

export default rundownHeader;
