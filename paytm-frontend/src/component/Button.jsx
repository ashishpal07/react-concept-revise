
export function Button({ label, onClick }) {
  return (
    <div className="w-[80%] mt-3">
      <button className="py-3 w-full font-bold text-xl bg-black text-white rounded-lg" onClick={onClick} type="button"> { label } </button>
    </div>
  )
}