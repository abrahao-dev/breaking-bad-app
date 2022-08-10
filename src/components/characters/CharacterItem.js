import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nome do autor:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Apelido:</strong> {item.nickname}
            </li>
            <li>
              <strong>Aniversário:</strong> {item.birthday} <p>(mm-dd-yy)</p>
            </li>
            <li>
              <strong>Aparições:</strong> {item.category}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
