import "./atoms.css";

export default function Checkbox({ label, checked, onChange, id }) {
  return (
    <div>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
