console.log("xixi");
$('button').css({ 'border': 'none' });
$('a').css({ 'color': 'black' });
$('a').css({ 'cursor': 'default' });
$('a').css({ 'text-decoration': 'none' });
$('h2,h3').css({ 'text-decoration': 'underline' });

function clear() {
  $('body,button').css({ 'background-color': 'white' });
}

function black() {
  $('body,button').css({ 'background-color': 'black' });
}
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked") {
      window.addEventListener('blur', clear);
      window.addEventListener('focus', black);
      console.log("get");
    }

  }
)