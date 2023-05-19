function extractEmails() {
  var emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  var text = document.body.innerText;
  var emails = text.match(emailRegex);
  return emails ? emails : [];
}

function sendEmailsToClipboard(emails) {
  var emailListText = emails.join('\n');

  var tempTextarea = document.createElement('textarea');
  tempTextarea.value = emailListText;
  document.body.appendChild(tempTextarea);

  tempTextarea.select();
  document.execCommand('copy');

  document.body.removeChild(tempTextarea);

  console.log('Emails copied to clipboard.');
}

// Example usage
var extractedEmails = extractEmails();
sendEmailsToClipboard(extractedEmails);
