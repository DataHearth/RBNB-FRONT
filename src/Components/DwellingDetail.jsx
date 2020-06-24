import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../css/dwellingDetail.css';
import '../js/dwellingDetail.js';

class DwellingDetail extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.id = id;
    this.state = {
      details: {},
      user: {},
    };
  }

  UNSAFE_componentWillMount() {
    axios.get(`http://localhost:8080/dwellings/${this.id}`)
      .then((res) => {
        const details = res.data;
        this.setState({
          details,
        });
        axios.get(`http://localhost:8080/users/${this.state.details.user}`)
          .then((res2) => {
            const user = res2.data;
            this.setState({
              user,
            });
          });
      });
  }

  render() {
    const { details, user } = this.state;
    return (
      <div className="App">
        <section className="detail-section">
          <div className="pictures-container" style={{ backgroundImage: `url(${details.pictures === undefined ? require('../images/no-photo.png') : details.pictures[0]})` }} />
          <div className="descr-res-container">
            <div className="descr-container">
              <div className="top-descr">
                <div className="top-left-descr">
                  <div className="top-left-top-descr">
                    {details.title}
                  </div>
                  <div className="top-left-bottom-descr">
                    {details.location}
                  </div>
                </div>
                <div className="top-right-descr">
                  <div className="user_img" style={{ backgroundImage: `url(${user.picture === undefined ? require('../images/no-photo.png') : details.pictures[0]})` }} />
                  <div className="user_name">{user.firstname}</div>
                </div>
              </div>
              <div className="bottom-descr">
                {details.description}
              </div>
            </div>
            <div className="res-container">
              <form className="res-form">
                <div className="top-res">
                  <div className="top-top-res">
                    <span className="res-price">
                      <span id="price">{details.price}</span>
                      €
                    </span>
                    {' '}
                    par nuit
                  </div>
                  <div className="top-bottom-res">
                    <i
                      className="fa fa-star"
                      style={{ color: '#d3b35c' }}
                    />
                    {' '}
                    Aucune note
                  </div>
                </div>
                <div className="bottom-res">
                  <div className="quick-search-item quick-search-item-input">
                    <div className="quick-search-item-input-title">
                      <div className="quick-search-item-input-title-split">Arrivée</div>
                      <div className="quick-search-item-input-title-split">Départ</div>
                    </div>
                    <div className="quick-search-item-input-input">
                      <input id="date-start" className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa" />
                      <input id="date-end" className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa" />
                    </div>
                  </div>
                  <div className="quick-search-item quick-search-item-input">
                    <div className="quick-search-item-input-title">Nombre d&apos;étudiant(s)</div>
                    <div className="quick-search-item-input-input">
                      <select className="custom-input" placeholder="Partout">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div id="calc-price" className="quick-search-item quick-search-item-button" style={{ justifyContent: 'left', padding: '10px 0' }} />
                  <div className="quick-search-item quick-search-item-button">
                    <div className="quick-search-item-button-button">
                      <button type="button" className="custom-button">Réserver</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(DwellingDetail);
