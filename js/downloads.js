let stableModalString, betaModalString = 'There was an error fetching the latest versions, check the <a href="https://github.com/magiccap">GitHub page</a> for the latest releases.';

async function getVersionInfo() {
  await fetch(`https://api.magiccap.me/version/latest`).then(resp => {
    if(resp) {
      resp.json().then(json => {
            for(e of document.getElementsByClassName('latest-v')) {
              e.innerHTML = json['release']['version'];
            }
            
            for(e of document.getElementsByClassName('macDwn')) {
              e.href = json['release']['mac'];
            }
            
            for(e of document.getElementsByClassName('linuxDwn')) {
              e.href = json['release']['linux'];
            }

            stableModalString = `
              <h2>Changelogs for ${json['release']['version']}</h2>
              <pre>${json['release']['changelogs']}</pre>

              <hr>

              <h3>Previous Versions</h3>
              <p>Download previous versions from <a href="https://github.com/MagicCap/MagicCap/releases">GitHub</a></p>
            `;


            betaModalString = `
              <h2>Latest Beta Version: <span style="font-weight: normal;">${json['beta']['version']}</span></h2>
              <p>Download for: <a href=\"${json['beta']['mac']}\">macOS</a> &bull; <a href="${json['beta']['linux']}">Linux</a></p>
              <pre>${json['beta']['changelogs']}</pre>

              <hr>
              <h3>Previous Versions</h3>
              <p>Download previous versions from <a href="https://github.com/MagicCap/MagicCap/releases">GitHub</a></p>
            `;
      });
    } else {
      for(e of document.getElementsByClassName('latest-v')) {
        e.innerHTML = 'error getting the latest version';
      }
      
      for(e of document.getElementsByClassName('macDwn')) {
        e.href = `javascript:doModal(stableModalString);`;
      }
      
      for(e of document.getElementsByClassName('linuxDwn')) {
        e.href = `javascript:doModal(stableModalString);`;
      }
    }
  });
}

getVersionInfo();