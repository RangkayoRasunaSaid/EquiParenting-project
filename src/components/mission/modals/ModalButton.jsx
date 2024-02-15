import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import Modal from "styled-react-modal";
import PropTypes from 'prop-types';

// Define StyledModal outside of ModalButton component
const StyledModal = Modal.styled`
    max-width: ${(props) => props.$maxwidth}; /* Use $maxwidth */
    border-radius: 25px;
    position: relative;
    background-color: white;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;
`;

export default function ModalButton({ btnContent, mdlContent, maxWidth='400px' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    function toggleModal(e) {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    return (
        <div>
            {React.cloneElement(btnContent, { onClick: toggleModal })}
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                $maxwidth={maxWidth} // Use $maxwidth instead of maxwidth
                backgroundProps={{ opacity }}
            >
                <button className="absolute top-0 right-0 z-50 pe-5 pt-5" onClick={toggleModal}><BsXLg /></button>
                {mdlContent}
            </StyledModal>
        </div>
    );
}
ModalButton.propTypes = {
    btnContent: PropTypes.element.isRequired,
    mdlContent: PropTypes.element.isRequired,
    maxWidth: PropTypes.string, 
};

ModalButton.defaultProps = {
    maxWidth: '400px', // Default value for maxWidth if not provided
};