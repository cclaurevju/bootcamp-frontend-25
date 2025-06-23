export default function Button({ onClick = () => {} }) {
  return (
    <button id="changeFavorite" onClick={onClick}>
      toggle language
    </button>
  );
}
