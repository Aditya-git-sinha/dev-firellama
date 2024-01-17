import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Dialog.css'; // Adjust the import path to where your CSS file is located

const Dialog = ({ isOpen, closeDialog, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="dialog-overlay" onClick={closeDialog}>
            <div className="dialog-content" onClick={e => e.stopPropagation()}>
                <div className="dialog-body">
                    {children}
                </div>
                <button onClick={closeDialog} className="close-btn">Close</button>
            </div>
        </div>,
        document.body
    );
};

export default Dialog;