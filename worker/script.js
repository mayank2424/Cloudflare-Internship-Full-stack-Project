!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){addEventListener("fetch",e=>{e.respondWith(async function(e){const t=await(await a()).json(),n=Math.floor((Math.random()<.5?0:.5)*t.variants.length),r=function(e,t){let n=null,r=e.headers.get("Cookie");if(r){r.split(";").forEach(e=>{if(e.split("=")[0].trim()===t){let t=e.split("=")[1];n=t}})}return n}(e,"secretNum"),i={url:r&&"undefined"!=r?t.variants[Number(r)]:t.variants[n],method:"GET"};let d=await l(i);return d=s.transform(d),d.headers.set("Set-Cookie","secretNum="+(r&&"undefined"!=r?Number(r):n)),r&&"undefined"!=r?1==Number(r)?s.transform(d):o.transform(d):1==n?s.transform(d):o.transform(d)}(e.request))});const r=n(1);const s=(new HTMLRewriter).on("title",new class{element(e){e.replace(r.title_replacer,{html:!0})}}).on(".bg-white",new class{element(e){e.replace(r.popup_replacer,{html:!0})}}),o=(new HTMLRewriter).on("title",new class{element(e){e.replace(r.title_replacer2,{html:!0})}}).on(".bg-white",new class{element(e){e.replace(r.popup_replacer2,{html:!0})}});async function a(e){return fetch("https://cfw-takehome.developers.workers.dev/api/variants",{headers:{"Content-Type":"application/json"},method:"GET"})}async function l(e){const t=e.url,n=e.method;return fetch(t,{headers:{"Content-Type":"text/html","Cache-Control":!0},method:n})}e.exports={fetchWebResponseFromUrl:l,fetchWebsitesFromCloudFlareAPI:a}},function(e,t){e.exports={h1_title_replacer:'<h1 class="text-lg leading-6 font-medium text-gray-900" id="title"> Hey, Wassup, How you doing, You are </h1>',title_replacer:"<title>Hey Wassup</title>",title_replacer2:"<title>Welcome to Cloudflare demo</title>",popup_replacer2:'\n\n<div class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center" style="\n    background-image: url(https://videodelivery.net/3f279831ceb2750c366d1b8bce3fa7bd/thumbnails/thumbnail.jpg?width=800);\n    background-repeat: no-repeat;\n    background-size: cover;\n">\n      <div class="fixed inset-0 transition-opacity">\n        <div class="absolute inset-0 bg-transparent"></div>\n      </div>\n\n      <div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all lg:max-w-lg sm:w-full sm:p-6">\n          <div>\n            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full">\n                <img src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg"/>\n            </div>\n            <div class="mt-3 text-center sm:mt-5">\n              <h1 class="text-lg leading-6 font-medium text-gray-900" id="title"> Hey Welcome to Cloudflare Demo</h1>\n              <div class="mt-2">\n                <p class="text-sm leading-5 text-gray-500" id="description">\n                Breathe in, Breathe out &#128540 ,Have a look at this video\n                </p>\n                <div class="mt-8 mb-8">\n                    <iframe width="100%" height="238" src="https://www.youtube.com/embed/9Av27ejxsvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\n                    </iframe>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="mt-5 sm:mt-6">\n            <span class="flex w-full rounded-md shadow-sm">\n              <a target="_blank" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="https://www.youtube.com/watch?v=9Av27ejxsvY" id="url">\n                Open in Youtube\n              </a>\n            </span>\n          </div>\n      </div>\n  </div>\n',popup_replacer:'\n<div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">\n    <div class="text-center">\n  \n    <div class="rounded-full p-2 bg-indigo-800 items-center mt-3 mb-3 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">\n      <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>\n      <span class="font-semibold mr-2 text-left flex-auto">We got something new here</span>\n      <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>\n    </div>\n\n    <div class="max-w-sm rounded overflow-hidden shadow-lg">\n      <img class="w-3/6 m-auto h-40" src="https://mayankg.me/assets/images/heist%20(1).png" alt="Sunset in the mountains">\n      <div class="px-6 py-4">\n        <div class="font-bold text-xl mb-2"> Hey Human &#128515, I\'m Mayank Gupta</div>\n        <p class="text-gray-700 text-base">\n           Checkout my Cool Digital Assistant, Powered by Dialogflow,hit the below button and Boom!\n        </p>\n      </div>\n      <div class="px-2 py-4">\n        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Developer</span>\n        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Yo ! &#129304</span>\n      </div>\n\n      <div class="mt-5 sm:mt-6 px-2 py-2">\n        <span class="flex rounded-md shadow-sm">\n          <a target="_blank" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="https://mayankg.me" id="url">\n          Take me there\n          </a>\n        </span>\n    </div>\n    </div>\n    </div>\n</div>'}}]);