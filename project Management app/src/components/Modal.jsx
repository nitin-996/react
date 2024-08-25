import { createPortal } from 'react-dom'; // Import createPortal from React
import { useImperativeHandle, forwardRef, useRef } from 'react'; // Import React hooks and forwardRef

// Define the Modal component using forwardRef
const Modal = forwardRef(function Modal({ children , Buttoncaption }, ref) {
    const dialog = useRef(); // Create a ref to reference the <dialog> element

    // Expose custom methods to the parent using useImperativeHandle
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal(); // The open method shows the dialog when called
            }
        };
    });

    // Render the children inside a <dialog> element, but use createPortal to render it outside the normal DOM hierarchy
    return (
        createPortal(
            <dialog ref={dialog}> {/* Attach the ref to the dialog */}
                {children}  {/* Render the children inside the dialog */}

                {/* to close the dialog */}
                <form method="dialog">
<button>{Buttoncaption}</button>
                </form>
            </dialog>,
            document.getElementById('modal-root') // Render this modal outside the normal DOM tree, under the modal-root element
        )
    );
});

export default Modal;
