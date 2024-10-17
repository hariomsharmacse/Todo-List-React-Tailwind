import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuCircle } from "react-icons/lu";

const Todoitem = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="text-green-600 flex items-center my-3 gap-2 cursor-pointer">
      <div onClick={() => {toggle(id)}} className="flex flex-1 items-center gap-3 cursor-pointer text-[17px]">
      {isComplete ? <FaCheckCircle /> : <LuCircle /> }
      <p className={`${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <RiDeleteBin5Line onClick={() => {deleteTodo(id)}}/>
    </div>
  )
}

export default Todoitem;