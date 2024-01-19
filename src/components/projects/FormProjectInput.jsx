export default function FormProjectInput({ type, name, label }) {
  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      {type === "description" ? (
        <textarea className="bg-gray-200" name={name} required />
      ) : (
        <input className="bg-gray-200" type={type} name={name} required />
      )}
    </div>
  );
}
