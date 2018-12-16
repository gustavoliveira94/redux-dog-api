import React from 'react'

function Info({dogs}) {
  if (dogs.loading) {
    return (
      <p
        style={{
          marginTop: '50px',
          textAlign: 'center',
          fontSize: '28px'
        }}
      >
        Loading...
      </p>
    )
  } else {
    return (
      <div>
        {dogs.data.status === 'success' ? (
          <img
            style={{marginTop: '50px'}}
            src={dogs.data.message}
            alt="doggy"
          />
        ) : (
          <p
            style={{
              marginTop: '50px',
              textAlign: 'center',
              fontSize: '28px'
            }}
          >
            {dogs.data.message}
          </p>
        )}
      </div>
    )
  }
}

export default Info
