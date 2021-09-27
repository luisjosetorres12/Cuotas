import React, { useState } from "react";
import { IState as Props } from './../App'

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ( {
  people, setPeople
} ) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    notes: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if(
      !input.name || 
      !input.age ||
      !input.url
      ) {
        return
      }

      setPeople([
        ...people,
        {
          name: input.name,
          age: +input.age,
          url: input.url,
          notes: input.notes
        }
      ])

      setInput({
        name: "",
        age: "",
        url: "",
        notes: ""
      })

  }

  return (
    <div className="AddToList">

      <input 
        type=""
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input 
        type=""
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input 
        type=""
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea 
        placeholder="Notes"
        className="AddToList-input"
        value={input.notes}
        name="notes"
        onChange={handleChange}
      />
      <button 
        className="AddToList-btn"
        onClick={handleClick}
      >
        Add to List
      </button>
    </div>
  )
}

export default AddToList;
