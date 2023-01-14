import React from 'react'

const ListUser = ({user}) => {

  return (
    <div>
        <h3>Github User</h3>
        <ul className='users'>
            {user.map((user)=>{
                const { id, login, avatar_url, html_url } = user;
                return (
                  <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div>
                      <h4>{login}</h4>
                      <a href={html_url}>profile</a>
                    </div>
                  </li>
                );
            })}
        </ul>
    </div>
  )
}

export default ListUser