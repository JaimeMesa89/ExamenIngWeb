const CloudinaryImage = (CloudinaryImageId) => {

    const baseImageUrl = "https://res.cloudinary.com/donlijdi0/image/upload/v1701452747/";
    const myImageUrl = baseImageUrl + CloudinaryImageId + ".jpg" 
  return (
    myImageUrl
  );
};

export default CloudinaryImage;