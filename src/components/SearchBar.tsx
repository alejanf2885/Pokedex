import { Search } from "lucide-react";

interface SearchBarProps {
  setSearch: (value: string) => void;
}

function SearchBar({ setSearch }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    
  };

  return (
    <div className="relative m-8">
      <input
        className="border rounded-3xl px-6 py-2 pl-10 font-mono w-full"
        type="text"
        placeholder="Search Pokemon"
        onChange={handleSearch}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
    </div>
  );
}

export default SearchBar;
