import { Label, Input } from "./styles";

export function FileInput({ children, ...rest }) {
  return (
    <Label>
      {children}
      <Input {...rest} />
    </Label>
  );
}
