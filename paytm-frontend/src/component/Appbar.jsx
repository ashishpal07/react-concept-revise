function Appbar() {
  return (
    <div className="p-2 items-center">
      <div className="border-2 border-black"></div>
      <div className="flex justify-between p-2 border-b border-b-slate-300">
        <div className="text-xl font-bold items-center flex justify-center">PayTm App</div>
        <div className="flex items-center">
          <div className="font-semibold text-xl mr-3 text-center">Hello</div>
          <div className="flex border rounded-full h-12 w-12 justify-center items-center bg-slate-300">
            <div className="">U</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
