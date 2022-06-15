function Modal({ setIsModalOpen, modal }) {
  return (
    <div className="modal-container">
      <div className={`modal ${modal.className}`}>
        <p>{modal.message}</p>
        <button onClick={() => setIsModalOpen(false)}>{modal.button}</button>
      </div>
    </div>
  );
}

export default Modal;