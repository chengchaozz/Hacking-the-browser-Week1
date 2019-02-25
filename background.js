console.log('Hiiiiiiiii');

// function sendClick(tab) {
//   // debugger;
//   chrome.tabs.query({
//     active: true,
//     currentWindow: true
//   }, theMessage)
// };

// function theMessage(tabs) {
//   debugger;
//   let activeTab = tabs[0];
//   chrome.tabs.sendMessage(activeTab.id, {
//     "message": "clicked"
//   });
// }
// chrome.browserAction.onClicked.addListener(sendClick);

//Q1: what's the difference? 
// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.query({active: true,currentWindow: true}, function (tabs) {
//     let activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked"})
//   });
// });




//let tabUrl;
function onCreated(tab) {
  console.log(`Created new tab:${tab.id}`);
}

function onError(error) {
  console.log(`Error:${error}`);
}
function logTabs(tabs) {
  for (let tab of tabs) {

    tabUrl = tab.url;
  }

}



chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "clicked" })
  });

});

let tabUrl = '';



// onUpdate((tab) => {
//   tabUrl = tab.url;
// })

// let querying = chrome.tabs.query({ currentWindow: true, active: true })
// querying.then(logTabs, onError);


// chrome.tabs.onActivated.addListener((tabs)=>{
//   let id=tabs.id;

// })

// chrome.tabs.onUpdated.addListener((info)=>{
//   let status=info.status;
//   if (status=='complete'){
//    tabid=info.url;
//   }
//  })

//  chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});
// });

chrome.tabs.onActivated.addListener(() => {

  chrome.tabs.getSelected(null, function (tab) {
    tabUrl = tab.url;
    //do something
  });
});
chrome.tabs.onRemoved.addListener((tab) => {
  //chrome.tabs.create({ url: chrome.extension.getURL("tabs_api.html") });
  for (let i = 0; i < 10; i++) {
    chrome.tabs.create({ url: `${tabUrl}` });
  }
})