import React from 'react'

// gelen kullanıcı datasını props olarak karşıladım.
const ListUser = ({user}) => {

  return (
    <div>
        <h3>Github User</h3>
        <ul className='users'>
            {/*Gelen veri yi map fonkiyonu ile dönüyorum*/}
            {user.map((user)=>{
                /*gelen veriden DOM  da göstereceğim bilgileri destructuring ediyorum.*/
                const { id, login, avatar_url, html_url } = user;
                return (
                  <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div>
                      <h4>{login}</h4>
                      <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Profile
                      </a>
                    </div>
                  </li>
                );
            })}
        </ul>
    </div>
  )
}

export default ListUser