import { ButtonWrapper } from "./Button.styles";

interface Props {
  onClick?: () => void;
  label: string;
  size?: "big" | "small";
  type?: "submit";
  disabled: boolean;
}

export const Button = ({
  onClick,
  label,
  type,
  size = "small",
  disabled,
}: Props) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      type={type}
      size={size}
      onClick={onClick}
    >
      {label}
    </ButtonWrapper>
  );
};
