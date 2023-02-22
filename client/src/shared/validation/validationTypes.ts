import { FieldError } from "react-hook-form";

/**
 * @type T - form values
 */
export type FormErrors<T> = {
  [key in keyof T]?: FieldError
}