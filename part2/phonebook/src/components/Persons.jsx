const Persons = ({ searchTerm, persons }) => {
  const filteredPersons = searchTerm === ''
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div>
      {filteredPersons.map(person => 
        <div key={person.id}>{person.name} {person.number}</div>
     )}
    </div>
  )
}

export { Persons }