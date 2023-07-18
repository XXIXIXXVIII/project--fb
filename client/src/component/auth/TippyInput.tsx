import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import {RiErrorWarningFill} from 'react-icons/ri'

export default function TippyInput({
  content,
  placeholder,
  setValue,
  value,
  type
}: {
  content: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type?:string
}) {
  const [show, setShow] = useState(false);
  const [validate, setValidate] = useState(false);

  return (
    <div className="relative">
      <Tippy
        onClickOutside={() => setShow(false)}
        placement="left"
        visible={show}
        content={content}
      >
        <input
        type={type||"text"}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => {
            setShow(true);
            setValidate(true);
          }}
          style={{
            border:
            validate?
              value?.trim().split("").length > 1
                ? "1px solid #dddfe2"
                : "1px solid red"
          :'"1px solid #dddfe2'}}
          className="rounded-[5px] bg-[#f5f6f7] w-full text-base  p-[11px] outline-none placeholder:text-gray-400"
          placeholder={placeholder}
        />
      </Tippy>
      {validate&&value?.trim().split("").length <= 1&&<div className="absolute right-1 top-1/2 -translate-y-1/2 text-red-600"><RiErrorWarningFill/></div>}
    </div>
  );
}
