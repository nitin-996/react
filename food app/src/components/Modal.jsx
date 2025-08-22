import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose , className = "" }) {
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

    // agar kisi ne ECS key se modal close ker dia tho humare react ko iske bare mein pta nhi lag pata
    // bcz when we press ECS key, broswer default functionality is used and closed out modal.
    //, so we are implementing the functionality so react will know about it.
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
