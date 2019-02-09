let r;
let vNum;
let lDwn;
let mDwn;
let changelog;

$.getJSON('https://api.magiccap.me/version/latest', function(json) {
  r = json['release'];
  vNum = r['version'];
  lDwn = r['linux'];
  mDwn = r['mac'];
  changelog = r['changelogs'];

  for(e of document.getElementsByClassName('latest-v')) {
    e.innerHTML = vNum;
  }

  for(e of document.getElementsByClassName('macDwn')) {
    e.href = mDwn;
  }

  for(e of document.getElementsByClassName('linuxDwn')) {
    e.href = lDwn;
  }
});
