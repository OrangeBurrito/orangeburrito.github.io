console.clear()
const l = console.log
const imageUrls = [
  'https://storage.googleapis.com/orangeburrito-content/dumb.png',
  'https://storage.googleapis.com/orangeburrito-content/milklogo.jpg',
  'https://storage.googleapis.com/orangeburrito-content/think.png',
  'https://storage.googleapis.com/orangeburrito-content/truump.png',
  'https://storage.googleapis.com/orangeburrito-content/birdperson.png',
  'https://storage.googleapis.com/orangeburrito-content/ralphegg.png'
]

function loadImages(urls) {
  const gallery = document.querySelector('.gallery')
  
  for(let i = 0; i < urls.length; i++) {
    const url = urls[i]
    const item = createItem(url)
    gallery.appendChild(item)
  }
}


function createItem(url) {
  const item = document.createElement('div')
  item.classList.add('item')
  
  item.appendChild(createImgTag(url))
  return item
}

function createImgTag(url) {
  const img = document.createElement('img')
  img.src = url
  return img
}

loadImages(imageUrls)