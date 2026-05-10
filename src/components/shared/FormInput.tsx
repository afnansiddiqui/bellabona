import { FormInputProps } from "@/types/FallBack/formInput";

export const FormInput = ({ label, id, ...props }: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[13px] font-semibold text-[#024930] mb-[7px]"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full h-[46px] rounded-[8px] border border-[#DADDD9] bg-[#F0F4F8] px-4 text-[14px] text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#024930] transition-colors"
        {...props}
      />
    </div>
  );
};
