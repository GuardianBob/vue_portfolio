import APIService from "./api"

class ParseWP {
  async parse_images(post) {
    let media,
      urls = [],
      rex = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;

    while (media = rex.exec(post)) {
      urls.push(media[1]);
    }
    console.log(urls);
    
    return urls
  } 
  
  async parse_text(post) {
    let paragraphs = document.querySelectorAll('p'); // finds all paragraphs
    let text = [];
    for (let i = 0; i < paragraphs.length; ++i) {
        text.push(paragraphs[i].textContent);
    }
    console.log(text)
    return text;
  } 

  async format_post(post) {
    let media,
      urls = [],
      // rex = /<img[^>]+src="?([^"\s]+)"+width="?([^"\d]+)"?[^>]*\/>/g;
      r_width = /<img[^>]+width="?([^"\s]+)"?[^>]*\/>/g,
      r_height = /<img[^>]+height="?([^"\s]+)"?[^>]*\/>/g;
    let post_string = JSON.stringify(post)
    let new_post
    new_post = await post.replace(/\bwidth="(\d+)"/g, 'width="100%"')
    new_post = await new_post.replace(/\bheight="(\d+)"/g, '')

    // while (media = r_width.exec(post)) {
    //   // urls.push(media[1]);
    //   console.log(media[0])

    // }
    // console.log(new_post);
    return new_post
  }

  async get_posts() {
    let posts
    await APIService.get_posts().then(async (results) => {
      posts = results.data;
      posts.forEach(async (post) => { 
        if (post.featured_media != 0) {
          let url = await APIService.get_media(post.featured_media)
      // console.log(`url: ${url.data.source_url}`);
          post.featured_media = url.data.source_url
        }
      })
      console.log(posts)
    })
    return posts
  }
}

export default new ParseWP();