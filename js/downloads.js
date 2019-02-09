let stable;
let vNum;
let lDwn;
let mDwn;
let changelog;
let stabStr;

let beta;
let BvNum;
let BlDwn;
let BmDwn;
let Bchangelog;
let betaStr;

$.getJSON('https://api.magiccap.me/version/latest', function(json) {
  stable = json['release'];
  vNum = stable['version'];
  lDwn = stable['linux'];
  mDwn = stable['mac'];
  changelog = stable['changelogs'];

  for(e of document.getElementsByClassName('latest-v')) {
    e.innerHTML = vNum;
  }

  for(e of document.getElementsByClassName('macDwn')) {
    e.href = mDwn;
  }

  for(e of document.getElementsByClassName('linuxDwn')) {
    e.href = lDwn;
  }

  stabStr = `
    <h2>Changelogs for ${vNum}</h2>
    <pre>${changelog}</pre>

    <hr>

    <h3>Previous Versions</h3>
    <p>Download previous versions from <a href="https://github.com/MagicCap/MagicCap/releases">GitHub</a></p>
  `;



  beta = json['beta'];
  BvNum = beta['version'];
  BlDwn = beta['linux'];
  BmDwn = beta['mac'];
  Bchangelog = beta['changelogs'];

  betaStr = `
    <h2>Latest Beta Version: ${BvNum}</h2>
    <p>Download for: <a href=\"${BmDwn}\">macOS</a> &bull; <a href="${BlDwn}">Linux</a></p>
    <pre>${Bchangelog}</pre>

    <hr>
    <h3>Previous Versions</h3>
    <p>Download previous versions from <a href="https://github.com/MagicCap/MagicCap/releases">GitHub</a></p>
  `;

});
