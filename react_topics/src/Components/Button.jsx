export default function Button({ children, onSelect, isSelected }) {
  // children should be written in small letters.

  return (
    <button className={isSelected ? "active" : null} onClick={onSelect}>
      {children}
    </button>
  );
}
