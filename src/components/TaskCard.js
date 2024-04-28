

export const TaskCard = ({character, handleDelete, gender}) => {
  return (
    <>
    <li className= {gender === "female" ? "fe" : "me"}>
                  <span>
                  {character.name}
                  </span>
                  <button className="delete" onClick={() => handleDelete(character.id)}>
                    Delete
                  </button>
    </li>
    </>
  )
}
