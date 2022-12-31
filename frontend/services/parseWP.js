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
}

export default new ParseWP();