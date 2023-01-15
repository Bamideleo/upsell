import React, {useState} from 'react'
import Layout from '@/Shared/Layout'
import { Inertia } from '@inertiajs/inertia'

export default function Create(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = event => {
    event.preventDefault();

    Inertia.post('/heros/save-hero', {
      name,
      health,
    })
      .then(() => {
        // code
      })
  }

  return (
    <Layout>
      <div className="container">
        <div className="col-md-6">
          { Object.keys(props.errors).length > 0 &&
          <div className="alert alert-danger mt-4">
            { props.errors[Object.keys(props.errors)[0]][0] }
          </div>
          }

          <form action="{{route('heros.savehero')}}" method="POST" className="my-5" onSubmit={createUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Health</label>
              <input type="text" className="form-control" id="health" placeholder="Health" onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary">Create Hero</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
