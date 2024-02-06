"use client";

const CustomInput = ({
    labelText,
    inputType,
    inputName,
    inputValue,
    inputId,
    placeholder,
    changeEvent="",
    containerClass="",
    labelClass="",
    inputClass=""
  }: any) => {
    return (
      <div className={`w-full bg-white rounded-lg px-4 border-[0.5px] border-solid border-gray-200 ${containerClass}`}>
        <label className={`flex flex-col bg-white  ${labelClass}`}>
          <span className="font-bold text-sm text-slate-700">{labelText}</span>
          <input
            className={`outline-none w-full focus:py-2 ${inputClass}`}
            type={inputType}
            name={inputName}
            value={inputValue}
            id={inputId}
            placeholder={placeholder}
            onChange={changeEvent}
          />
        </label>
      </div>
    );
  };


const CustomTextArea = ({
    labelText,
    inputName,
    inputValue="",
    inputId,
    cols,
    rows,
    changeEvent="",
    containerClass="",
    labelClass="",
    textareaClass=""
  }: {
    labelText: string;
    inputName: string;
    inputValue?:any;
    inputId: string;
    cols: number;
    rows: number;
    changeEvent?: any;
    containerClass?:any,
    labelClass?:any,
    textareaClass?:any
  }) => {
    return (
      <div className={`w-full bg-white px-4 rounded-lg border-[0.5px] border-solid border-gray-200 ${ containerClass }`}>
        <label className={`flex flex-col bg-white ${ labelClass }`}>
          <span className="text-sm font-bold text-slate-700">{labelText}</span>
          <textarea
            className={`outline-none resize-none focus:py-2${textareaClass}`}
            name={inputName}
            value={inputValue}
            id={inputId}
            cols={cols}
            rows={rows}
            placeholder="Leave a message here.."
            onChange={changeEvent}

          ></textarea>
        </label>
      </div>
    );
  };
export  {CustomInput , CustomTextArea}