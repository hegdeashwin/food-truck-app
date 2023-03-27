import { FaUserAstronaut } from 'react-icons/fa'
import { GiFoodTruck } from 'react-icons/gi'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <GiFoodTruck style={{ fontSize: '3em' }} />
        </a>
        <div className="pt-3">
          <a className="navbar-brand" href="#">
            {' '}
            Meals on Wheels
          </a>
          <p className="text-muted">
            Order food from favourite food truck near you.
          </p>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text ms-4">
            <FaUserAstronaut /> Ashwin Hegde
          </span>
        </div>
      </div>
    </nav>
  )
}
