import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="flex text-center font-semibold text-xl">
      <div className="">
        { label }
      </div>
      <Link className="ml-2 underline" to={to}>
        { buttonText }
      </Link>
    </div>
  )
}
