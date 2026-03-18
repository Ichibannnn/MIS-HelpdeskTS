import { TextField, type TextFieldProps } from "@mui/material";
import { Controller, type FieldValues, type Control, type Path } from "react-hook-form";

type TextFieldControlledProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
} & Omit<TextFieldProps, "name">;

const TextFieldControlled = <T extends FieldValues>({ name, control, ...params }: TextFieldControlledProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange } }) => <TextField {...params} inputRef={ref} value={value ?? ""} onChange={onChange} autoComplete="off" />}
    />
  );
};

export default TextFieldControlled;
