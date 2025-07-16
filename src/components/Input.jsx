const Input = ({ label, type = 'text', value, onChange, placeholder }) => (
    <div className="mb-4">
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-300 rounded-md transition-colors duration-200 focus:border-primary focus:outline-none"
      />
    </div>
  );
  export default Input;
  