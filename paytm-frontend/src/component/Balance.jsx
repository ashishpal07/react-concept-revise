
function Balance({ value }) {
  return (
    <div className="flex items-center">
      <div className="font-bold text-xl p-2">
        Your balance
      </div>
      <div className="font-semibold ml-2">
        Rs { value }
      </div>
    </div>
  )
}

export default Balance;
