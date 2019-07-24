console.log(`Greetings from ${module.id}!`);

import('./RTK_generated');

const localUrl = "./RTK_generated";
const fullUrl = "https://veritas-test-2019-07-02.s3.amazonaws.com/PublicData/RTK_generated.js";
window.fullUrl = fullUrl;

async function getModule(url) {
  const imp = await import(url);
  return imp;
}


getModule(localUrl).then(m => console.log("local module:", m));
getModule(fullUrl).then(m => console.log("global module:", m));
