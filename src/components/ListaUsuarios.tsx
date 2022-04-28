import { useState } from 'react'

interface Tprops {
    users: User[];
}

type User = {
    name: string,
    id: number,
    email: string
  };

export const ListaUsuarios = (props: Tprops ) => {

    /*
    const listaUsuarios = users.map( (user) => {
        return 
    })
    */

    return(
        <ol>
            {props.users.map(user => (  
                <li key={user.id}>  
                    {user.name} - {user.email}
                </li>  
            ))}
        </ol>
    )
}

