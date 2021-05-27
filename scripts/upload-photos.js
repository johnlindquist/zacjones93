const fs = await npm("fs"); 
const plantName = await arg("Enter a plant name:");
const potSize = await arg("Enter pot size: ");
const shotType = await arg("Is this product or detail?", ["product", "detail"]);

const photos = await drop("Drop your images");
console.log(photos);


let renamePhotoToDirectory = (path, plantName) => {
 // going to be a env variable
  let targetDirectory = "/Users/zac/Desktop/photops/photos";

  let photoPath = `${targetDirectory}/${plantName}`;

  fs.rename(path, photoPath, (err) => {
    if (err) return console.log("there was an error: ", err);

    console.log("selectedFiles renamed");
  });
};

photos.map((plant, index) => {
  if (shotType === "detail") {
    renamePhotoToDirectory(
      plant.path,
      `${plantName}Detail${potSize}_${index + 1}.png`
    );
  } else {
    renamePhotoToDirectory(plant.path, `${plantName}${potSize}_${index + 1}.png`);
  }
});
