import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";
import { Button, Group } from "@mantine/core";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const [file, setFile] = useState(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageURL(reader.result); // Set the image URL for preview
        setFile(selectedFile); // Save the file for later use
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Handle next step
  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div className="flexColCenter uploadZone">
          <label htmlFor="file-upload" className="upload-label">
            <AiOutlineCloudUpload size={50} color="grey" />
            <span>Upload Image</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>
      ) : (
        <div className="uploadedImage">
          <img src={imageURL} alt="Uploaded" />
        </div>
      )}

      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageURL}>
          Next
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;