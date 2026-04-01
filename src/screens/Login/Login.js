function Login() {
  return (
    <div className="container">
      <h1>UdeSA Movies</h1>

      <h2 className="alert alert-primary">Iniciar sesión</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingresá tu email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresá tu contraseña"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Iniciar sesión
            </button>
          </form>

          <p className="mt-3 text-center">
            ¿No tenés cuenta? <a href="register.html">Registrarse</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;