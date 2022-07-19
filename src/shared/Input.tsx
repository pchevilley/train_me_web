import { ReactNode } from "react";

import "./Input.scss";

export enum InputType {
  Text = "text",
  Select = "select",
}
export function Input(props: {
  type: InputType;
  className?: string;
  children?: ReactNode;
  options?: string[];
  value: string | number;
  placeholder?: string;
  onChange?: (e: any) => void;
}) {
  const { type, options, className, onChange, value, placeholder } = props;

  switch (type) {
    case InputType.Text:
      return (
        <input placeholder={placeholder} onChange={onChange} className={"input " + (className ?? "")} />
      );
    case InputType.Select:
      return (
        <select value={value} onChange={onChange} className={"input " + (className ?? "")}>
          {options?.map((o) => (
            <option
                key={o}
                value={o.toLowerCase()}
            >
              {o}
            </option>
          ))}
        </select>
      );
  }
}