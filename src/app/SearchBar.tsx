import {useParams, useSearchParams} from "react-router-dom";

const SearchBar = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (val: string) => void;
}) => {
  const [_, setParams] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({query: e.target.value});
    setSearchText(e.target.value);
  };
  return (
    <div className="mb-6 ml-1 ">
      <input
        className="input input-bordered"
        placeholder="search here...."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
