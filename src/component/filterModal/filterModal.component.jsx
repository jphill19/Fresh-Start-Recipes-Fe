import './filterModal.css'

function FilterModal({ onClose, children }) {
  console.log("Displaying")
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default FilterModal;