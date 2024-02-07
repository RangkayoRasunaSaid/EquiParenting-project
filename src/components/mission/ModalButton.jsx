import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import Modal from "styled-react-modal";

export default function ModalButton({ btnContent, mdlContent, maxWidth='400px' }) {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const StyledModal = Modal.styled`
        max-width: ${maxWidth};
        max-height: 95vh;
        border-radius: 25px;
        background-color: white;
        opacity: ${(props) => props.opacity};
        transition : all 0.3s ease-in-out;
        overflow-y: auto;
    `;

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
                backgroundProps={{ opacity }}
            >
                <div className="grid justify-items-end sticky top-0 z-50">
                    <button className="pe-5 pt-5" onClick={toggleModal}><BsXLg /></button>
                </div>
                {mdlContent}
            </StyledModal>
        </div>
    );
}