import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Button, Modal } from 'antd';
import './Modal.css'
import { useNavigate } from 'react-router-dom';

export interface MediaPreviewModalProps {
    title: string;
    children?: React.ReactNode;
    price: string;
    buttonText?: string; 
    onButtonClick?: () => void;
  }
  
  export interface MediaPreviewModalRef {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setPreviewUrl: React.Dispatch<React.SetStateAction<string>>;
 
  }

const MediaPreviewModal = forwardRef<MediaPreviewModalRef, MediaPreviewModalProps>((props, ref) => {
  const { title, children, price, buttonText, onButtonClick } = props;
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    setOpen,
    setPreviewUrl,
 
  }));

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} title={<div className="custom-modal-title">{title}</div>} footer={null} onCancel={onCancel} width={1000} >
      <div className="modal-content">
      <img src={previewUrl} alt="Preview" />
      <div className="text-content">
        {children} 
        <div className="price_item">{price}</div>
        {buttonText && onButtonClick && (
            <button className="custom-button" onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        {/* <button onClick={() => navigate('/haisan')}>Thử ngay</button> */}
      </div>
      </div>
    </Modal>
  );
});

MediaPreviewModal.displayName = 'PreviewModal';
export default MediaPreviewModal;