import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Topic1 extends React.Component {
  render() {
    return (
    <div>
      <Popup heading="This Is Important" footer="Cancel">Here is important text or error or something </Popup>
    </div>
    )
  }
 }
 

function Popup(props) {
    return (
            <div class="card">
  <div class="card-header bg-white">
  <h5>{props.heading}</h5>
  </div>
  <div class="card-body">
    <p class="card-text">{props.children}</p>
  </div>
  <div class="card-footer bg-white text-right">
    <a href="#" class="btn btn-outline-secondary">{props.footer}</a>
  </div>
</div>
    );
}

export default Topic1;