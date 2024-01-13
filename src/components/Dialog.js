import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Dialog.css'; // Make sure the path matches your project structure.

const Dialog = ({ isOpen, closeDialog, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="dialog-overlay" onClick={closeDialog}>
            <div className="dialog-content" onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={closeDialog} className="close-btn">Close</button>
            </div>
        </div>,
        document.body
    );
};

export default Dialog;

