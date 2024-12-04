import { v2 as cloudinary } from "cloudinary";

(async function () {
  cloudinary.config({
    cloud_name: "dqjfodxqd",
    api_key: "834442891711716",
    api_secret: "<your_api_secret>",
  });

  const uploadResult = await cloudinary.uploader
    .upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "shoes",
      }
    )
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);

  const optimizeUrl = cloudinary.url("shoes", {
    fetch_format: "auto",
    quality: "auto",
  });

  console.log(optimizeUrl);

  const autoCropUrl = cloudinary.url("shoes", {
    crop: "auto",
    gravity: "auto",
    width: 500,
    height: 500,
  });

  console.log(autoCropUrl);
})();
