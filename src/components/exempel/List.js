import User from './User'
const users = [
    {
      'id': 1,
      'name': 'Jane Doe1',
      'email': 'janedoe@nackademin.se'
    },
    {
      'id': 2,
      'name': 'Jane Doe2',
      'email': 'janedoe@nackademin.se'
    },
    {
      'id': 3,
      'name': 'Jane Doe3',
      'email': 'janedoe@nackademin.se'
    }
  ]
  return (
    <div className="App">
      <ul>
        {users.map(user =>
          <User key={user.id} user={user} />
        )}

      </ul>
    </div>



  )