import React from 'react'
import { UserConsumer } from './userContext'

export const ContextCompC = () => {
    return (
        <div>
            <UserConsumer>
                {/* {(val) => {
                    return <h2>{val}</h2>
                }} */}

                {(val) => <h2>{val}</h2>}
                
            </UserConsumer>
            
        </div>
    )
}
