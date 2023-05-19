export const Button = ({ text, clickHendler }) => {
  return (
    <button type="button" onClick={clickHendler}>
      {text}
    </button>
  );
};
