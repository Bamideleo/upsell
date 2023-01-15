import React from 'react'
import Layout from '@/Shared/Layout'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function Weapon(props) {
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
            <th scope="col">Heros</th>
            <th scope="col">Total Weapon</th>
            </tr>
          </thead>
          <tbody>
            { props.weapons.map(weapon => (
            <tr key={weapon.id}>
                <td>{weapon.name}</td>
                <td>
                {weapon.weapon_count}
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
