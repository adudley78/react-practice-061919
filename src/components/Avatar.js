import React from 'react'

function Avatar(props) {
    return (
        <img className="Avatar"
            arc={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

export default Avatar