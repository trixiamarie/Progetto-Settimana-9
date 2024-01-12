import React, { Component } from 'react';
import './gallery.css';
import * as handlers from '../eventHandlers';
import ChevronCompactLeft from 'react-bootstrap-icons/dist/icons/chevron-compact-left';
import ChevronCompactRight from 'react-bootstrap-icons/dist/icons/chevron-compact-left';


export default class LordG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://www.omdbapi.com/?s=lord+of+the+rings&apikey=a767248e', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ searchResults: data.Search || [] });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { searchResults } = this.state;

    return (
      <>
      <h4 className="bg-dark text-white m-0 px-4 py-2">
          Lord Of The Rings: The Complete Series
        </h4>
      <div id="cont" className='bg-dark'>
        <button onClick={() => handlers.handleScroll(-250, this.refs)}><ChevronCompactLeft className='fs-5'/></button>
        <div
          id="container"
          ref="container"
        >
          {searchResults.map((x, index) => (
            <img
              key={index}
              className='poster'
              src={x.Poster}
              alt={x.Title}
              onClick={() => handlers.handlePosterClick(this.refs['poster' + index])}
              onMouseEnter={() => handlers.handlePosterHover(this.refs['poster' + index], true)}
              onMouseLeave={() => handlers.handlePosterHover(this.refs['poster' + index], false)}
              ref={'poster' + index}
            />
          ))}
        </div>
        <button onClick={() => handlers.handleScroll(250, this.refs)}><ChevronCompactRight/></button>
      </div>
      </>
    );
  }
}


