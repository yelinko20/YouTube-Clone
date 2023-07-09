import { FormEvent, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

type SearchInputProps = {
  isSmallScreen: boolean;
  mobileSearchActive: boolean;
};

export default function SearchInput({
  isSmallScreen,
  mobileSearchActive,
}: SearchInputProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query && query?.length > 0) {
      navigate(`/results/${query}`);
    } else {
      return null;
    }
  }
  return (
    <form
      className={`${
        isSmallScreen && mobileSearchActive
          ? "h-10 flex items-center"
          : "sm:flex items-center hidden h-10 rounded-full overflow-hidden"
      }`}
      onSubmit={handleSubmit}
    >
      <label htmlFor="search"></label>
      <input
        type="text"
        // name="search"
        className=" focus:outline-none text-White  border border-solid border-Glass1 focus:border-SkyBlue focus:ring-1 px-4  rounded-l-3xl bg-transparent md:w-[500px] sm:w-80 h-full
       "
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="px-6 bg-Glass1 h-full">
        <GoSearch className="text-White text-xl " />
      </button>
    </form>
  );
}
