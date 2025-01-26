
export function InputBox({ label, placeholder, onChange }) {
  return (
    <div className="flex flex-col w-[80%]">
      <div className="text-black font-semibold text-xl">
        { label }
      </div>
      <input onChange={onChange} className="px-3 py-2 border-2 border-slate-500 rounded-md" placeholder={placeholder} />
    </div>
  );
}
