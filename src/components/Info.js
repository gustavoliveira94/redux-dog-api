import React from 'react'

function Info({dogs}) {
  console.log('Dogs:', dogs)
  if (dogs.loading) {
    return 'Loading...'
  } else {
    return (
      <div>
        {dogs.data.status === 'success' ? (
          <img src={dogs.data.message} alt="doggy" />
        ) : (
          <p>{dogs.data.message}</p>
        )}
      </div>
    )
  }
}

export default Info
