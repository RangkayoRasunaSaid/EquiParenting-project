import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        const handleClickInsideModal = (event) => {
            if (event.target.closest('.modal-button')) toggleModal()
        }
        if (isOpen) document.addEventListener('click', handleClickInsideModal)
        return () => document.removeEventListener('click', handleClickInsideModal);
    }, [isOpen]);

    const toggleModal = (e) => {
        setOpacity(0);
        setIsOpen(!isOpen);
    }

    const afterOpen = () => setTimeout(() => setOpacity(1), 100)

    const beforeClose = () => {
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
                <button className="absolute top-5 right-5 modal-button hover:bg-zinc-300 rounded-full"><BsXLg /></button>
                {React.cloneElement(mdlContent, { className: "modal-content" })}
            </StyledModal>
        </div>
    );
}

// export { toggleModal }

ModalButton.propTypes = {
    btnContent: PropTypes.element.isRequired,
    mdlContent: PropTypes.element.isRequired,
    maxWidth: PropTypes.string, 
};

ModalButton.defaultProps = {
    maxWidth: '400px', // Default value for maxWidth if not provided
};