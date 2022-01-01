import "./App.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="form--container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          placeholder="Email address"
          className="form--input"
        />
        <input
          type="password"
          name=""
          placeholder="Password"
          className="form--input"
        />
        <input
          type="password"
          name=""
          placeholder="Confirm Password"
          className="form--input"
        />
        <div className="form--marketing">
          <input type="checkbox" name="" id="okayToEmail" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
