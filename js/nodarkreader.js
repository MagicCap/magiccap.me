// nicked from https://thelmgn.com/
// https://botstion-site-3--thelmgn.repl.co/nodarkreader.js

function removeDR() {
  for (var dr of document.querySelectorAll(".darkreader")
  ) {
    dr.remove()
  }
}
removeDR()
setInterval(removeDR)
setTimeout(removeDR,1000)
