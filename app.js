
const list = document.getElementById('items');
const url = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}


fetch(url)
  .then(function(resp){
    return resp.json(); //transform the data into json
  })
  .then(function(data) {  // Create and append the list
    // console.log(data);
    let items = data.list
      items.forEach (item => {
        Object.entries(item).forEach( entry => {
          let key  = entry[0];
          let value = entry[1];
          console.log(key.name);
      const article_name = key.name;
      list.innerHTML = `${article_name}`;
        });
      })
    })
      // const article_branding = item.branding;
      // const img = createNode ('img');

      //   console.log(item.thumbnail);


      // console.log(items);
      // let li = createNode ('li');
      // let img = createNode ('img');
      // let p = createNode ('p');
      // let li = createNode ('li');
      // let p = createNode ('p');
      // append(li,img);
      // append(li,p);
