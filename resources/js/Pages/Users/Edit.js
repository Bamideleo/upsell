import React, { useState, useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Layout from '@/Shared/Layout'
import { HalfCircleSpinner } from 'react-epic-spinners'

export default function Edit(props) {
  const [name, setName] = useState(props.hero.name);
  const [health, setHealth] = useState(props.hero.health);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      const abortController = new AbortController();
      abortController.abort();
    };
   }, [])

  const updateUser = event => {
    event.preventDefault();

    setLoading(true);

    Inertia.patch(`/heros/${props.hero.id}`, {
      name,
      health
    })
      .then(() => {
        setLoading(false);
      })
  }

  const deleteUser = event => {
    event.preventDefault();

    if (confirm('Are you sure you want to delete this contact?')) {
      Inertia.delete(`/heros/${props.hero.id}`)
        .then(() => {

        })
    }
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

          <form action="/users" method="POST" className="my-5" onSubmit={updateUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" defaultValue={props.hero.name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Health</label>
              <input type="text" className="form-control" id="health" placeholder="health" defaultValue={props.hero.health} onChange={(e) => setHealth(e.target.value)} />
            </div>
            <button type="submit" className="d-flex btn btn-primary" disabled={loading}>
              { loading &&
                <HalfCircleSpinner
                  size={20}
                  color={'#fff'}
                  className="mr-2"
                />
              }
              <span>Update Hero</span>
            </button>
          </form>
        </div>

        <button className="btn btn-danger" onClick={deleteUser}>Delete Hero</button>
      </div>
    </Layout>
  )
}
