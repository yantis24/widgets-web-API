
const thumbs = document.getElementById('thumbnail');
const brandingMedia = document.getElementById('branding-media');
const titleMedia = document.getElementById('title-media');
const catMedia = document.getElementById('category-media');
const imageMedia = document.getElementById('image-media');
const mediaUrl = document.getElementById('media-url');
const url = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}
function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url)
  .then((resp) => resp.json()) //transform the data into json
  .then(function(data) {  // Create and append the list
    let items = data.list
      return items.map (item => {
        const article_name = item.name;
        const article_branding = item.branding;
        const article_categories = item.categories[0];
        const article_url = item.url;
        const images = item.thumbnail
          images.map(image => {
            let article_image = image;
            let imageUrl = (Object.values(article_image));
        let imageUpload = imageUrl[0];
        // let div = createNode('div');
        // let span = createNode('span');
        // span.innerHTML = `${article_categories}`;
        // append(div,span);

        catMedia.innerHTML = `${article_categories}`;
        mediaUrl.href = `${article_url}`;
        imageMedia.src = `${imageUpload}`;
        brandingMedia.innerHTML = `${article_branding}`;
        titleMedia.innerHTML = `${article_name}`;

        console.log(article_categories);
        // console.log(article_name);
        // console.log(article_branding);
        // console.log(article_url);
        console.log (imageUpload);
      })
    })
  })
  .catch(function(error){
  });

