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
    // new_post = await post.replace(/\bwidth="(\d+)"/g, 'width="100%"')
    // new_post = await new_post.replace(/\bheight="(\d+)"/g, '')

    // while (media = r_width.exec(post)) {
    //   // urls.push(media[1]);
    //   console.log(media[0])

    // }
    // console.log(new_post);
    return post
  }
  
  async format_post_2(post) {
    // console.log(post);
    // post = await this.format_title_image(post)
    // post = await this.format_images(post)
    // let title_image = this.format_title_image(post.getElementById("title_image").innerHTML);
    // let collection = document.getElementsByTagName("") 
    // console.log(title_image);
    return post
  }

  async format_title_image(post) {
    // format main image
    // let parser = new DOMParser(); // use to convert string to DOM Element
    // let new_post = parser.parseFromString(post, 'text/html')      
    let main_image = post.getElementById('title_image');
    let main_src = post.getElementById('title_image').firstChild.src;
    console.log(main_src)
    let new_main = post.createElement('div')
    new_main.classList.add('col-lg-6','cols-md-6','col-sm-8','col-xs-8','text-center','full-width', 'q-pb-md')
    new_main.innerHTML = `<img src=${main_src} class="" style="max-width: 80%"/>`
    main_image.parentNode.replaceChild(new_main, main_image);
    return post
  }

  async format_images(post) {
    // format main image
    // let parser = new DOMParser(); // use to convert string to DOM Element
    // let new_post = parser.parseFromString(post, 'text/html')      
    let image = post.getElementsByClassName('wp-block-image');
    let image_src = post.getElementsByClassName('wp-block-image').firstChild.src;
    console.log(image_src)
    let new_image = post.createElement('div')
    new_image.classList.add('col-lg-4','col-md-4','col-sm-10')
    new_image.innerHTML = `<img src=${image_src} class="full-width"/>`
    image.parentNode.replaceChild(new_image, image);
    return post
  }

  async format_title_image2(image) {
    let new_code = `
      <div class="col-lg-10 col-md-10 col-sm-12 text-center">
        ${image}
      </div>
    ` 
    return new_code
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