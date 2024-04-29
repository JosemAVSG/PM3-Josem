
const Register = () => {
  return (
   <>
    <form method="post"  action="" className="form-register">

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="form-group">
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" className="form-control" id="birthdate" />
      </div>
      <div className="form-group">
        <label htmlFor="nDni">DNI</label>
        <input type="number" className="form-control" id="nDni" />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
   </>
  )
}

export default Register