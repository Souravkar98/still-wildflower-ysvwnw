import { STATUS } from "./constant";
import { useEffect, useRef } from "react";

export default function Checkbox({ status, handleChange, id }) {
  const checkboxRef = useRef();
  useEffect(() => {
    if (status === STATUS.INDETERMINATE) {
      checkboxRef.current.indeterminate = true;
    } else {
      checkboxRef.current.indeterminate = false;
    }
  }, [status]);
  return (
    <input
      ref={checkboxRef}
      type="checkbox"
      checked={status === STATUS.CHECKED}
      onChange={(e) => handleChange(id, e.target.checked)}
    />
  );
}
