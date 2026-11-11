import axios from 'axios';
import React, { useState } from 'react'

const Testimg = () => {
    const [image, setImage] = useState(null);
const [imageUrl, setImageUrl] = useState("");

const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl("");
};

const uploadImage = async () => {

   if (!image) {
            alert("Please select an image");
            return;
        }

        try {

            const formData = new FormData();
            formData.append("image", image);

            const response = await axios.post(
                "http://localhost:8080/api/images/upload",
                formData
            );

            setImageUrl(response.data.imageUrl);

            alert("Image uploaded successfully!");

        } catch (error) {

            console.log(error);
            alert("Image upload failed");

        }
};
  return (
     <div className="p-5">

            <h2>Upload Course Image</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />

            <button onClick={uploadImage}>
                Upload Image
            </button>

            {imageUrl && (
                <div className="mt-5">

                    <h3>Uploaded Image</h3>

                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="w-64 h-48 object-cover"
                    />

                </div>
            )}

        </div>
    );
}

export default Testimg
