import { BsFilter } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

export default function SearchBar(setFilter) {
  return (
    <div className="inline-flex gap-2 text-gray-400 justify-center items-center bg-slate-900 px-3 py-3 w-full">
      <div className="p-2 bg-gray-700 w-5/6 inline-flex items-center justify-around rounded-xl">
        <IoSearch color="currentColor" size="24px" />
        <input
          type="text"
          placeholder="Search Chat"
          className="p-2 rounded-md w-full bg-transparent focus:outline-none"
        />
      </div>

      <BsFilter
        size="30px"
        color="currentColor"
        onClick={(prev) => (console.log("filter"), setFilter(!prev))}
      />
    </div>
  );
}
