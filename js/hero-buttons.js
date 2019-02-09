const plat = navigator.platform.toLowerCase();
let os = undefined;

if (plat) {
  if (plat.includes('mac') || plat.includes('darwin')) {
    os = 'mac';
  } else if (plat.includes('linux')) {
    os = 'linux';
  }

  if (os !== undefined) {
    if (os == 'linux') {
      document.getElementById('buttMac').style.display = 'none';
    } else if (os == 'mac') {
      document.getElementById('buttLinux').style.display = 'none';
    }
  }
}

function showBoth() {
  document.getElementById('buttMac').style.display = 'inline-block';
  document.getElementById('buttLinux').style.display = 'inline-block';
}

function showBeta() {
  document.getElementById('buttBeta').style.display = 'inline-block';
}
