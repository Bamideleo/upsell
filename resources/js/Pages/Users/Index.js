import React from 'react'
import Layout from '@/Shared/Layout'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function Index(props) {
  console.log(props);
  return (
    <Layout>
      <div className="container">
        { props.successMessage &&
          <div className="alert alert-success mt-4">
          {props.successMessage}
          </div>
        }

        <div className="my-5">
          <a href="/heros/create" className="btn btn-primary">Create Hero</a>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
            <th scope="col">Heroes</th>
            <th scope="col">Total Damage</th>
            </tr>
          </thead>
          <tbody>
            { props.heros.map(hero => (
            <tr key={hero.id}>
                <td>{hero.name}</td>
                <td>
                {hero.weapon.reduce((total, obj) => obj.damage + total,0)}
                </td>
                {/* <td>
                    <InertiaLink href={`/heros/${hero.id}/edit`}>Edit</InertiaLink>
                </td> */}
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
    )
  }
