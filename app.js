console.log("TEST!");

const images = [
    {src: "./Tanjiro.jpg", alt: "The character Tanjiro from The Demon Slayer anime/manga series, holding his sword."},
    {src: "./Nezuko.jpg", alt: "The character Nezuko from The Demon Slayer anime/manga series."},
    {src: "./Zenitsu.jpg", alt: "The character Zenitsu from The Demon Slayer anime/manga series"},
    {src: "./Giyu.jpg", alt: "The character Giyu from The Demon Slayer anime/manga series"},
    {src: "./Muichiro.jpg", alt: "The character Muichiro from The Demon Slayer anime/manga series"},
]

document.getElementById("thumbnailContainer");
document.getElementById("largeImageContainer");

function createThumbnails(imagesarray) {
    imagesarray.forEach (function (imgitem) {
            const newImg = document.createElement("img");
            newImg.src = imgitem.src;
            newImg.alt = imgitem.alt;
            newImg.className = "thumbnail-img";
            thumbnailContainer.appendChild(newImg);
            // newImg.addEventListener("click", handleClick);
        }
    )
    }
      //I need to create more than one thumbnail --> I can use a loop
  //You can use different ways to loop thorugh your array: for loop / forEach()
  //Inside the loop, we have a few steps to do:
  //create an image element
  //we need assign values to the image element properties
  //src = value
  //we also need to assign a value to the className property
  //we need add an event to the image elements we are creating here
  //we need to append the images to the thumbnail container
    


createThumbnails(images);




function createLargeImagesHandler(largeImage){
    largeImageContainer.innerHTML = null

}
