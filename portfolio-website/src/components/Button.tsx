interface Props {
  children: string;
  buttonColor?: string
  onButtonPress: (text: string) => void;
}

function Button({ children, buttonColor = "primary", onButtonPress }: Props) {
  let cName = "btn btn-" + buttonColor;

  return (
    <>
      <button
        type="button"
        className={cName}
        onClick={() => {
          onButtonPress(children);
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
