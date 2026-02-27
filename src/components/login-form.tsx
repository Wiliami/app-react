export function Login() {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="">E-mail</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Senha</label>
                <input type="text"/>
            </div>
            <button>Entrar</button>
        </form>
    </div>
  );
}