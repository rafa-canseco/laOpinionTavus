import React from 'react';
import "./Modal Spinner.css";

interface SpinnerModalProps {
  isVisible: boolean;
  message: string;
}

const SpinnerModal: React.FC<SpinnerModalProps> = ({ isVisible, message }) => {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SpinnerModal;