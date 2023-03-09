import React from 'react';
import Button from './Button';

class App extends React.Component {
  render() {
    return (
      <section>
        <div className="wrapper">
          <Button iconClass="fa-instagram" text="Instagram" />
          <Button iconClass="fa-facebook-f" text="Facebook" />
          <Button iconClass="fa-twitter" text="Twitter" />
          <Button iconClass="fa-linkedin" text="LinkedIn" />
          <Button iconClass="fa-youtube" text="YouTube" />
          <Button iconClass="fa-github" text="Github" />
        </div>
      </section>
    );
  }
}

export default App;