const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (file, folder) => {
  // Uploads the file fron client request to cloudinary.
  const result = await cloudinary.uploader.upload(file.path, {
    folder: folder,
  });

  const url = cloudinary.url(result.public_id);

  return url;
};

module.exports = uploadToCloudinary;
