const Button = ({ children, onClick, full, variant = 'primary', className }) => {
    const base = 'transition ease-in-out duration-200 rounded-md font-medium';
    const styles = variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary/90'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    return (
      <button
        onClick={onClick}
        className={`${base} ${styles} ${full ? 'w-full' : ''} ${className}`}
      >
        {children}
      </button>
    );
  };
  export default Button;
  