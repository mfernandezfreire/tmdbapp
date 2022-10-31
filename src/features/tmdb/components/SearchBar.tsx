
interface SearchBarProps {
  searchValue: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetSearchValue: (value: string) => void
}

export const SearchBar = (
  {
    searchValue,
    handleChangeValue,
    resetSearchValue
  }: SearchBarProps
) =>
(<>
  <input name='movieToSearch' value={searchValue} onChange={(e) => handleChangeValue(e)} />
  <button onClick={() => resetSearchValue('')}> reset </button>
</>
)