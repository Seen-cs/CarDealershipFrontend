import React, { useEffect, useState } from 'react'
import SubscribeService from '../services/SubscribeService'

export default function SubUser() {
    const [users, setUser] = useState([])
    useEffect( () => {
        const subscribeService = new SubscribeService();
        subscribeService.getBySubUser().then(result => setUser(result.data))
    })
  return (

    <>
     <section className="leftSide">
        <div className="categoriesTitleContainer">
          <p>Takip Edenler</p>
        </div>
        <ul className="categoriesList">
          {users && users.map((user) => (
            <li key={user.id}>
              <a href="#">{user.firstName} {user.lastName}</a>
            </li>
          ))}
        </ul>
      </section></>
  )
}
