function getLinks() {
  var links = document.getElementsByTagName('a');
  var linkList = [];
  for (var i = 0; i < links.length; i++) {
    linkList.push(links[i].href);
  }
  return linkList;
}

function sendLinksToClipboard(links) {
  var linkListText = links.join('\n');

  var tempTextarea = document.createElement('textarea');
  tempTextarea.value = linkListText;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  document.execCommand('copy');

  document.body.removeChild(tempTextarea);

  console.log('Links copied to clipboard.');
}

// Example usage
var links = getLinks();
sendLinksToClipboard(links);
