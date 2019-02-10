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

if(os == 'win') {
  doModal(`
      <h2><i class="fab fa-windows"></i> Using Windows?</h2>
      <p>
        MagicCap is a capture suite for macOS and Linux only.<br>
        For Windows, we recommend the similar FOSS project, <a href="https://getsharex.com/">ShareX</a>. You may also wish to check out the <a href="javascript:alert('todo')">AlternativeTo page</a> for other options.
      </p>
    `);
}
