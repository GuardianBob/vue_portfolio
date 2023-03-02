export var post_data = {
  post_title: "Random Movie App",
  title_image: "http://jmeyer-dev.com/backend/wp-content/uploads/2023/02/random_movie_app.gif",
  demo: "https://random-movie.jmeyer-dev.com/",
  info: [
    {
      title: "Tech Stack",
      list: [
        "Vue.js",
        "Quasar",
        "JavaScript",
        "TMDB API"
      ]
    },
    {
      title: "Features",
      list: [
        "Random movie/TV list generator",
        "Trending movie/TV list generator",
        "Filter by Start/End Year",
        "Filter by Genre",
        "Filter by Min/Max Rating",
        "Filter by Sort By",
        "Filter by Country of Origin (US or Japan only at the moment)"
      ],
    },
    {
      title: "Bugs",
      list: [
        "None"
      ]
    }
  ],
  writeup: [
    {
      text_align: "start",
      text: `
          This was a passion project that I've wanted to build for years!  For a long time now I'd often have trouble picking something to watch at night.  I've looked before for websites or apps that would generate a random list of movies for me to pick from but none of the ones I found were ever quite what I was looking for.  A couple years ago I finished a coding bootcamp and one of the first personal projects I built afterwards was a random movie list generator!  I spent the past year learning how to build full-stack apps in Vue.js and recently decided to upgrade it to be faster, lighter, and have a more modern layout.
        `,          
      image: "http://jmeyer-dev.com/backend/wp-content/uploads/2023/02/vue_rndm_movie_01.png",
      width: "30%",
      alt: "Random Movie 01"
    },
    {
        text_align: "end",
        text: `
          Initially part of my plan was to also practice and see if I could build a desktop app with Electron and Vue.js.  I've wanted to build a desktop app in Electron for a while just to see if I could and to build some useful desktop apps with a sleek interface (my last desktop app was a vb.net app with an interface that looked like it was from Windows 98).  I tried to also add a user account feature that utilized a local database system like SQLite3 or NeDB.  This eventually took too long and I decided to also finish it as a web app first and come back to finishing the desktop app later.
        `,            
        width: "30%",
        image: "http://jmeyer-dev.com/backend/wp-content/uploads/2023/02/vue_rndm_movie_02-1024x545.png",
        alt: "Random Movie 02"
    },
    {
      text_align: "full",
      text: `
          This web-app version is built with the Quasar framework for Vue.js, which gave me several advanced features that I could utilize without having to fully build them out myself.  I was able to get this version up and running pretty quickly since I had already built something similar with Python and Django.  I ran into some issues with duplicate movies being returned though and that took me a minute to resolve.  The TMDB API has a feature that lets you pull lists of trending movies and shows but the random movie list was something I had to build out.  I basically created a simple array and would validate each movie id being returned against that array.  I also had to set up to keep making requests until my list of movies I was creating was full because the API would only return about 20 movies per page so I had to add a formula to keep track of how many pages to request and when to stop.
`,
    },
    {
      language: "javascript",
      code: `
let item_list = []
let id_list = []
let i = 0
let k = 20
k < results.data.total_results ? null : k = results.data.total_results
while (id_list.length < k) {
  let rand_number = Math.floor(Math.random() * results.data.total_results);
  if (!item_list.includes(rand_number)) {
        i++
        item_list.push(rand_number)
        let page = Math.floor(rand_number / 20)
        page == 0 ? page = 1: null
        let page_item = rand_number % 20
        params["page"] = page
        let rand_results = await axios.get(url, { params })
        if (!id_list.includes(rand_results.data.results[page_item].id)) {
          id_list.push(rand_results.data.results[page_item].id)
          random_list.push(rand_results.data.results[page_item])
        }
      }      
    }
    return random_list
      `,            
    },
    {
        text_align: "end",
        text: `
          Eventually I was able to get the functions working correctly and also decided to add a "Trending" section as well.  After I added this I decided that I also wanted to provide info and trailers for the movies listed as well.  I chose to just add a link to the TheMovieDB.org pages for each movie rather than trying to import data in order to save time and the amount of code necessary and it has worked out great so far!  This app has actually been very useful for me on many occasions and even some of my friends have enjoyed using it.
        `,            
        width: "30%",
        image: "http://jmeyer-dev.com/backend/wp-content/uploads/2023/02/vue_rndm_movie_03.png",
        alt: "Random Movie 03"
    },
  ]
}
