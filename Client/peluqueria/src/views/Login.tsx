
const Login : React.FC = () => {
  return (
    <>
        <form method="post"  action="" className="form-login" >

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>

        </form>
    
    </>
  )
}

export default Login