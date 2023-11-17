
const CustomerInputs = ({ label, placeholder, labelColor, inputLength }) => {
  
return (
  <div className={`flex  flex-col items-start justify-center text-left gap-2 py-2 `}>
    <label className={`text-[0.8rem] font-NotoSans font-[600] 
       ${labelColor ? `${labelColor}` : "text-dark"}`}>{label}</label>
        <input placeholder={placeholder ? placeholder : ''}
            className={`border ${inputLength  ? `${inputLength}`: "w-full"} border-gray-400 p-2 text-[0.8rem] rounded-md `}
        />
    </div>
  );

}

export default CustomerInputs
