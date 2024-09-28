import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;


// we can create modal like this or below is the other method.

// Yes, you can definitely create a modal using `forwardRef` in React, which allows you to pass refs from a parent component to a child component.
//  This is particularly useful if you want to expose certain methods or functionality (like opening/closing the modal) to the parent component, 
//  rather than having all the logic contained within the modal itself.

// Using `forwardRef`, the parent component can control the modal more explicitly. Here's an alternative approach to creating a modal using `forwardRef`.

// ### Example: Modal Using `forwardRef`

// ```jsx
// import React, { useRef, useImperativeHandle, forwardRef } from 'react';
// import { createPortal } from 'react-dom';

// // Define Modal component using forwardRef
// const Modal = forwardRef(({ children }, ref) => {
//   const dialog = useRef();

//   // Expose methods to parent using useImperativeHandle
//   useImperativeHandle(ref, () => ({
//     open: () => dialog.current.showModal(),
//     close: () => dialog.current.close()
//   }));

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

// export default Modal;
// ```

// ### How This Works:

// #### 1. **`forwardRef`**:
//    The `Modal` component is wrapped with `forwardRef`, which allows it to receive a `ref` from the parent component. Normally, functional components don't accept `ref`,
//     but `forwardRef` enables this functionality.

// #### 2. **`useImperativeHandle`**:
//    - The `useImperativeHandle` hook is used inside the `Modal` component to expose certain methods (`open` and `close`) to the parent component.
//     These methods control the opening and closing of the `<dialog>` element.
//    - This provides the parent component with a simple interface to control the modal without having to directly manipulate the internal `dialog` ref.

// #### 3. **`createPortal`**:
//    Just like in the previous approach, `createPortal` is used to render the modal in a specific part of the DOM, outside the component tree (e.g., a `<div id="modal">` in your HTML).

// ### Using the Modal in a Parent Component

// Here's how you would use this modal in a parent component and control it with `open` and `close` methods via the `ref`:

// ```jsx
// import React, { useRef } from 'react';
// import Modal from './Modal'; // Import the Modal component

// function App() {
//   const modalRef = useRef();

//   const openModal = () => {
//     modalRef.current.open(); // Call the `open` method exposed by Modal
//   };

//   const closeModal = () => {
//     modalRef.current.close(); // Call the `close` method exposed by Modal
//   };

//   return (
//     <div>
//       <h1>Modal Example with forwardRef</h1>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal ref={modalRef}>
//         <h2>This is a modal</h2>
//         <button onClick={closeModal}>Close Modal</button>
//       </Modal>
//     </div>
//   );
// }

// export default App;
// ```

// ### Explanation:

// 1. **Parent Component (`App`)**:
//    - The parent component (`App`) declares a `modalRef` using `useRef()`.
//    - This `ref` is passed to the `Modal` component. The `Modal` exposes `open` and `close` methods to the parent via `useImperativeHandle`, 
//    so the parent can control when the modal opens and closes.
   
// 2. **Opening and Closing the Modal**:
//    - When the "Open Modal" button is clicked, `modalRef.current.open()` is called, which triggers the `showModal()` method inside the modal.
//    - Inside the modal, there is a "Close Modal" button, which calls `modalRef.current.close()` to close the modal using `close()`.

// ### Benefits of This Approach:

// - **Better Parent Control**: The parent component has full control over when to open or close the modal by calling `open()` and `close()`. 
// This makes it easy to integrate the modal into more complex parent logic.
  
// - **Cleaner Separation**: This approach decouples the modal's internal logic from the parent's state,
//  making it easier to work with in scenarios where the modal's state should be controlled externally.

// - **Reusability**: By using `forwardRef` and exposing methods, this modal is now reusable. You can call the `open` and `close` methods in different contexts easily.

// ### Summary:

// By using `forwardRef` with `useImperativeHandle`, you expose methods like `open()` and `close()` to the parent component, allowing for better control over the modal's behavior.
//  This pattern can be useful when the parent component needs to manage the modal's state or when integrating the modal into more complex flows (e.g., opening a modal after an API call, etc.).
