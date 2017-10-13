import $ from "jquery";

function commafy(num) {
  num = num + "";
  var str = num.split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length < 2) {
    str[1] = str[1] + "0";
  }
  return str.join(".");
}


function padZeros(number, length) {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

function displayDate() {
  var offset = parseInt(CD.param("mi_tzoffset") || "-700", 10);
  var offsetHours = Math.floor(offset / 100);
  var offsetMinutes = offset % 100;
  var offsetTime = (offsetHours * 60 + offsetMinutes) * 60 * 1000;
  var d = new Date(new Date().getTime() + offsetTime);
  var dateString = [
    d.getMonth() + 1,
    padZeros(d.getDate(), 2),
    (d.getFullYear() + "").slice(-2)
  ].join("/");

  return dateString;
}

function isImage(img) {
  return img instanceof HTMLImageElement;
}


function getCardProduct() {
  var variants = {
    platinum: "plat",
    "platinum mercedes": "plat",
    "platinum mercedes benz": "plat",
    platinummercedes: "plat",
    "platinum ameriprise": "plat",
    "mercedes platinum": "plat",
    "platinum morgan stanley": "plat",
    platinumgoldman: "plat",
    "platinum goldman": "plat",
    ameripriseplatinum: "plat",
    "ameriprise platinum": "plat",
    "platinum golman sachs": "plat",
    "platinum charles schwab": "plat",
    "amex everyday": "aed",
    amexeveryday: "aed",
    "amex everday": "aed",
    "amex everyday preferred": "aep",
    "amex everday preferred": "aep",
    "blue cash": "bce",
    bluecasheveryday: "bce",
    "blue cash everyday": "bce",
    "blue cash everyday preferred": "bcp",
    bluecasheverydaypreferred: "bcp",
    "blue cash preferred": "bcp",
    'delta options': "deltablue",
    deltaoptions: "deltablue",
    deltablue: "deltablue",
    "delta blue": "deltablue",
    "delta gold": "deltagold",
    deltagold: "deltagold",
    "gold delta skymiles": "deltagold",
    delta: "deltagold",
    "delta platinum": "deltaplat",
    deltaplatinum: "deltaplat",
    "delta reserve": "deltares",
    deltareserve: "deltares",
    gold: "gold",
    "ameriprise gold": "amgold",
    ameriprisegold: "amgold",
    green: "green",
    hilton: "hiltonb",
    "hilton honors": "hiltonb",
    "hilton base": "hiltonb",
    "hilton surpass": "hiltons",
    hiltonsurpass: "hiltons",
    mercedes: "mercedes",
    "mercedes-benz": "mercedes",
    "mercedes benz": "mercedes",
    "morgan stanley": "morgstan",
    morganstanley: "morgstan",
    "charles schwab": "schwab",
    charles: "schwab",
    prg: "prg",
    starwood: "spg",
    plenti: "plenti",
    blue: "blue",
    "blue classic": "blue",
    "blue+classic": "blue",
    "blue from american express": "blue"
  };

  var mergedCard = CD.param("mi_card_product") || "";
  var cardToMatch = mergedCard.toLowerCase().trim();
  return variants[cardToMatch] ? variants[cardToMatch] : "blue";
}


function getImageWithHeight(url) {
  var container = $("#mi_size_container");
  container.removeClass('hidden');
  CD.getImage(url, function(img) {
    container.outerHeight(img.naturalHeight);
    container.css("background", 'url("' + img.src + '")');
    container.width();
    CD.waitForAsset(img.src);
  });
}


function pieFiller(percent, color, device) {

  if (device === 'mobile') {
    var multiplier = 2;
    var canvas = document.getElementById("chart-mobile");
  } else {
    var multiplier = 1;
    var canvas = document.getElementById("chart");
  }

  var ctx = canvas.getContext("2d");
  var tau = Math.PI * 2;
  var quarterBack = -tau / 4;

  // background circle
  ctx.beginPath();
  ctx.lineWidth = 20 * multiplier;
  ctx.arc(75 * multiplier, 75 * multiplier, 62 * multiplier, tau, tau * 2, true);
  ctx.strokeStyle = "#f4f4f4";
  ctx.stroke();
  ctx.closePath();

  // percent determined fill of the circle
  ctx.beginPath();
  ctx.arc(75 * multiplier, 75 * multiplier, 62 * multiplier, percent * tau + quarterBack + tau, tau + quarterBack, true);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();

  // create radial ticks using lines drawn through the center of canvas
  ctx.lineWidth = 1 * multiplier;
  ctx.strokeStyle = "#ffffff";
  for (var i = 0; i < 10; i++) {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(180 / 10 * Math.PI / 180);
    ctx.translate(-75 * multiplier, -75 * multiplier);
    ctx.moveTo(75 * multiplier, 15 * multiplier);
    ctx.lineTo(75 * multiplier, 135 * multiplier);
    ctx.stroke();
  }

  // makes the central vertical line thicker
  ctx.moveTo(75 * multiplier, 15 * multiplier);
  ctx.lineTo(75 * multiplier, 135 * multiplier);
  ctx.stroke();
  ctx.moveTo(75 * multiplier, 15 * multiplier);
  ctx.lineTo(75 * multiplier, 135 * multiplier);
  ctx.stroke();
}

function processMoney(moneyString) {

  let moneyFloat = parseFloat(moneyString);
  if (isNaN(moneyFloat)) {
    return ''
  } else {
    return Math.round(moneyFloat * 100) / 100;
  }

}

function currencyImage(card, block, scenario, device) {

  let imageName = [
    card,
    "_",
    block,
    "_",
    scenario,
    device === "desk" ? "_desk" : ""
  ].join("");

  CD.setExtraData({
    image_name: imageName
  });

  return imageName;

};

export {
  commafy,
  currencyImage,
  displayDate,
  isImage,
  getCardProduct,
  getImageWithHeight,
  padZeros,
  pieFiller,
  processMoney
};
