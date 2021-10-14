import React from 'react'
import { ConUserConsumer } from './conUserContext'

export const ContextUserCompC = () => {
    return (
        <div>
            <ul>
            <ConUserConsumer>
                { (val) => val.map((user, i) => <li>{user.name}</li>) }
            </ConUserConsumer>
            </ul>

        </div>
    )
}
