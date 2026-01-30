const Filter = ({ searchTerm, setSearchTerm }) => {
  return (
    <form >
      <div>
        filter shown with <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /> 
      </div>
    </form>
  )
}

export { Filter }