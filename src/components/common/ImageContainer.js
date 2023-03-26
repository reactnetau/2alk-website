import { Box } from "@mui/system";
import React from "react";
const ImageContainer = ({ image, style }) => {
    return (
        <Box
        component="img"
        sx={{
            ...style,
            aspectRatio: 1
        }}
        alt="The house from the offer."
        src={image}      />
    );
}

export default ImageContainer;