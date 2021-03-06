const plat = navigator.platform.toLowerCase();
let os = undefined;

if (plat) {
  if (plat.includes('mac') || plat.includes('darwin')) {
    os = 'mac';
  } else if (plat.includes('linux')) {
    os = 'linux';
  } else if (plat.includes('win')) {
    os = 'win';
  }

  if (os !== undefined) {
    if (os == 'linux') {
      document.getElementById('buttMac').style.display = 'none';
    } else if (os == 'mac') {
      document.getElementById('buttLinux').style.display = 'none';
    } else {
      document.getElementById('notOS').style.display = 'none';
    }
  }
}

function showBoth() {
  document.getElementById('buttMac').style.display = 'inline-block';
  document.getElementById('buttLinux').style.display = 'inline-block';
  document.getElementById('notOS').style.display = 'none';
}

function showBeta() {
  document.getElementById('buttBeta').style.display = 'inline-block';
}

if(os == 'win') {
  doModal(`
      <h2><i class="fab fa-windows"></i> Using Windows?</h2>
      <p>
        <b>MagicCap is a capture suite for macOS and Linux only.</b><br><br>
        For Windows, we recommend the similar FOSS project, <a href="https://getsharex.com/">ShareX</a>.<br>
        Our <a href="https://alternativeto.net/software/magiccap/">AlternativeTo page</a> has other options.
      </p>
    `);
}
