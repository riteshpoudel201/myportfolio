"use client";

const CustomInput = ({
    labelText,
    inputType,
    inputName,
    inputId,
    placeholder,
    changeEvent="",
    containerClass="",
    labelClass="",
    inputClass=""
  }: any) => {
    return (
      <div className={`w-full bg-white rounded-lg px-4 ${containerClass}`}>
        <label className={`flex flex-col bg-white  ${labelClass}`}>
          <span className="font-bold text-sm text-slate-700">{labelText}</span>
          <input
            className={`outline-none w-full focus:py-2 ${inputClass}`}
            type={inputType}
            name={inputName}
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
    inputId: string;
    cols: number;
    rows: number;
    changeEvent?: any;
    containerClass?:any,
    labelClass?:any,
    textareaClass?:any
  }) => {
    return (
      <div className={`w-full bg-white px-4 rounded-lg  ${ containerClass }`}>
        <label className={`flex flex-col bg-white ${ labelClass }`}>
          <span className="text-sm font-bold text-slate-700">{labelText}</span>
          <textarea
            className={`outline-none resize-none focus:py-2${textareaClass}`}
            name={inputName}
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