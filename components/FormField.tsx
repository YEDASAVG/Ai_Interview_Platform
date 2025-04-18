import React from "react";
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control : Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string; 
  type?: 'text' | 'password' | 'email' | 'file';
}

const FormField = <T extends FieldValues> ({
   control,
   name ,
   label ,
   placeholder,
   type = "text"}: FormFieldProps <T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" {...field} placeholder={placeholder} type={type} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
