export default function Login() {
  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
        
      The prop 'htmlFor' in JSX is the same as attribute 'for' in HTML. It is used for labels to link them with their inputs (using input id). 
        So that when clicking on this label is the same as clicking on the input. It is especially helpful for checkboxes and radio buttons. 
        Simple inputs also get focused when a linked label is clicked. Another way to link label and input is to set the input as a child of label
        
         <label><input/></label>.
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
