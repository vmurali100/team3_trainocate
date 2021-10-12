import React from 'react'

export const UserInfo = ({user, handleChange, createUser, updateUser, isEdit, isInvalid}) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input type="text" className="form-control" name="name" value={user.name} onChange={(event) => {handleChange(event)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Username
                    </label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={(event) => {handleChange(event)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                        </label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={(event) => {handleChange(event)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Phone
                        </label>
                    <input type="text" className="form-control" name="phone" value={user.phone} onChange={(event) => {handleChange(event)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Website
                        </label>
                    <input type="text" className="form-control" name="website" value={user.website} onChange={(event) => {handleChange(event)}}/>
                </div>
                { isEdit 
                ? <button type="button" className="btn btn-primary" onClick={updateUser}>Update</button>
                : <button type="button" className="btn btn-primary" onClick={createUser} disabled={isInvalid}>Submit</button>
                }
            </form>

        </div>
    )
}
