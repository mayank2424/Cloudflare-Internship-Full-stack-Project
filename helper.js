const popup_replacer = `
<div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">
    <div class="text-center">
  
    <div class="rounded-full p-2 bg-indigo-800 items-center mt-3 mb-3 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
      <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
      <span class="font-semibold mr-2 text-left flex-auto">We got something new here</span>
      <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-3/6 m-auto h-40" src="https://mayankg.me/assets/images/heist%20(1).png" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"> Hey Human &#128515, I'm Mayank Gupta</div>
        <p class="text-gray-700 text-base">
           Checkout my Cool Digital Assistant, Powered by Dialogflow,hit the below button and Boom!
        </p>
      </div>
      <div class="px-2 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Developer</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Yo ! &#129304</span>
      </div>

      <div class="mt-5 sm:mt-6 px-2 py-2">
        <span class="flex rounded-md shadow-sm">
          <a target="_blank" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="https://mayankg.me" id="url">
          Take me there
          </a>
        </span>
    </div>
    </div>
    </div>
</div>`

const popup_replacer2 = `

<div class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center" style="
    background-image: url(https://videodelivery.net/3f279831ceb2750c366d1b8bce3fa7bd/thumbnails/thumbnail.jpg?width=800);
    background-repeat: no-repeat;
    background-size: cover;
">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-transparent"></div>
      </div>

      <div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all lg:max-w-lg sm:w-full sm:p-6">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
                <img src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg"/>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h1 class="text-lg leading-6 font-medium text-gray-900" id="title"> Hey Welcome to Cloudflare Demo</h1>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500" id="description">
                Breathe in, Breathe out &#128540 ,Have a look at this video
                </p>
                <div class="mt-8 mb-8">
                    <iframe width="100%" height="238" src="https://www.youtube.com/embed/9Av27ejxsvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <span class="flex w-full rounded-md shadow-sm">
              <a target="_blank" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5" href="https://www.youtube.com/watch?v=9Av27ejxsvY" id="url">
                Open in Youtube
              </a>
            </span>
          </div>
      </div>
  </div>
`

const h1_title_replacer = `<h1 class="text-lg leading-6 font-medium text-gray-900" id="title"> Hey, Wassup, How you doing, You are </h1>`

const title_replacer = `<title>Hey Wassup</title>`;

const title_replacer2 = `<title>Welcome to Cloudflare demo</title>`


module.exports = {
    h1_title_replacer:h1_title_replacer,
    title_replacer:title_replacer,
    title_replacer2:title_replacer2,
    popup_replacer2:popup_replacer2,
    popup_replacer:popup_replacer
}
