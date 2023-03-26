import { Container, styled } from "@mui/material";
import React from "react";
import ImageContainer from "./ImageContainer";

const StyledContainer = styled(Container)({
    marginTop: '20px',
    marginBottom: '-10px',
    padding: '0px 20px',
    height: '100%',
});
const SectionContainer = ({ orientation, background, style, copy, title }) => {
    return (
        <>
            <StyledContainer>
                <ImageContainer image={background} style={{ width: '100%', zIndex: 0 }}/>
            </StyledContainer>
        </>
    );
}

export default SectionContainer;