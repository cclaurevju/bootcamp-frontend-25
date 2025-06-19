import "./atoms.css";

export default function Checkbox({ label, checked, onChange }) {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label className={checked ? "checked" : ""}>{label}</label>
    </div>
  );
}
