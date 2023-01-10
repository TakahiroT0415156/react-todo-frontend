export const Button = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

export const Input = (props) => {
  const { type, placeholder, onChange } = props;
  return <input type={type} placeholder={placeholder} onChange={onChange} />;
};
