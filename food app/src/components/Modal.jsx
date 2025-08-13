import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current
    
    if (open) {
        console.log(open);
        
      modal.showModal();
    } 

    // cleaning , it runs only when component execute again (means mount again)

     return ()=> modal.close()
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
