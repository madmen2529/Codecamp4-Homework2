import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Topic2 extends React.Component {
  render() {
    return (
    <div>
      <Trello />
    </div>
    )
  }
 }
 

function Trello(props) {
    return (
      <div class="card bg-gray mt-5">
        <div class="card-body">
          <div class="row ml-2">
            <div class="col-sm-8 font-weight-bold pl-0">Phone Features</div>
            <div class="col-sm-4 text-right pr-4">...</div>
          </div>
          
          <div class="row ml-2 mr-2">
            <div class="col-sm-12 bg-white p-2 mt-2">Subwoofer</div>
            <div class="col-sm-12 bg-white p-2 mt-2">Wings</div>
            <div class="col-sm-12 bg-white p-2 mt-2">Beveled Bezel</div>
            <div class="col-sm-12 bg-white p-2 mt-2">Bezeled Bezel</div>
            <div class="col-sm-12 bg-white p-2 mt-2">Seedless</div>
          </div>

          <div class="row ml-2">
            <div class="col-sm-12 text-muted pl-0 mt-2">Add a card...</div>
          </div>
        </div>
      </div>
    );
}

export default Topic2;