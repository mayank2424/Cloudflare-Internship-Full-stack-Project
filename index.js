//Fetch event listener
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

//Importing HTML content 
const htmlConfig = require('./helper');


//Class for handling Title for Webpage 1
class TitleRewriter {
  element(element) {
    element.replace(htmlConfig.title_replacer, { html: true })
  }
}

//Class for handling Title for Webpage 2
class TitleRewriter2 {
  element(element) {
    element.replace(htmlConfig.title_replacer2, { html: true })
  }
}

//Class for handling Popup for Webpage 1
class PopupRewriter {
  element(element) {
    element.replace(htmlConfig.popup_replacer, { html:true })
  }
}

//Class for handling Popup for Webpage 2
class PopupRewriter2 {
  element(element) {
    element.replace(htmlConfig.popup_replacer2, { html:true })
  }
}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  
  //Fetch urls
  const urls = await (await fetchWebsitesFromCloudFlareAPI()).json();

  //Secret Number :)
  const randomNum = Math.floor((Math.random() < 0.5 ? 0 : 0.5 )* (urls.variants.length));

  //Get cookie 
  const cookie = getCookie(request, 'secretNum');
  
  //Fetch html config
  const data = {
    url:cookie  && cookie != "undefined" ? urls.variants[Number(cookie)] : urls.variants[randomNum],
    method:'GET'
  }
 
  //Fetch HTML Files
  let webRes = (await fetchWebResponseFromUrl(data));

  // Rewrite HTML;
  webRes =  rewriter.transform(webRes);

  //Setting Cookie here, which will persist webpage when 
  webRes.headers.set('Set-Cookie', `secretNum=${cookie && cookie != "undefined" ? Number(cookie) : randomNum}`);

  //Logic for rewriting html based on cookie and randomNumber
  if(cookie && cookie != "undefined") {
    if(Number(cookie) == 1) {
      return  rewriter.transform(webRes);
    } else {
      return rewriter2.transform(webRes)
    }
  } else {
    if(randomNum == 1) {
      return  rewriter.transform(webRes);
    } else {
      return rewriter2.transform(webRes)
    }
  }
}


//Responsible for Rewrite HTML 
const rewriter = new HTMLRewriter()
                .on('title', new TitleRewriter())
                .on('.bg-white', new PopupRewriter())
               

//Responsible for Rewrite HTML 
const rewriter2 = new HTMLRewriter()
                .on('title', new TitleRewriter2())
                .on('.bg-white', new PopupRewriter2())


//Responsible for fetching URLS JSON                              
async function fetchWebsitesFromCloudFlareAPI(request) {
    const url = "https://cfw-takehome.developers.workers.dev/api/variants";
    const headers = {'Content-Type': 'application/json'};
    const method = 'GET';
    return fetch(url, {headers, method})
}

//Responsible for Fetching HTML Files
async function fetchWebResponseFromUrl(data) {
    const url = data.url;
    const method = data.method;
    const headers = {'Content-Type': 'text/html','Cache-Control' : true}
    return fetch(url, {headers, method})
}


//Responsible for Getting Cookie
function getCookie(request, name) {
  let result = null
  let cookieString = request.headers.get('Cookie')
  if (cookieString) {
    let cookies = cookieString.split(';')
    cookies.forEach(cookie => {
      let cookieName = cookie.split('=')[0].trim()
      if (cookieName === name) {
        let cookieVal = cookie.split('=')[1]
        result = cookieVal
      }
    })
  }
  return result
}



module.exports = {
  fetchWebResponseFromUrl:fetchWebResponseFromUrl,
  fetchWebsitesFromCloudFlareAPI:fetchWebsitesFromCloudFlareAPI

}