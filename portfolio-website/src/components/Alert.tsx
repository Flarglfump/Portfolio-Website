interface Props {
  children?: string;
  alertColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClose: () => void;
}

function Alert({ children, alertColor = "primary", onClose }: Props) {
  let cname = "alert alert-" + alertColor + " ";
  let text = (children?.trim().length) ? children : "No alert text provided!";

  return (
    <>
      <div className={cname} role="alert">
        {text}
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </>
  );
}

export default Alert;
