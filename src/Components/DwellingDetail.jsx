import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../css/dwellingDetail.css';

class DwellingDetail extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.id = id;
    this.state = {
      details: {
        pictures: ['../images/vue-appartement-evian.jpg'],
      },
    };
  }

  UNSAFE_componentWillMount() {
    axios.get(`http://localhost:8080/dwellings/${this.id}`)
      .then((res) => {
        const detailsTab = res.data;
        this.setState({
          details: detailsTab,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="true" searchContent="Partout" />
        <section className="detail-section">
          <div className="pictures-container" style={{ backgroundImage: `url(${this.state.details.pictures})` }} />
          <div className="descr-res-container">
            <div className="descr-container">
              <div className="top-descr">
                <div className="top-left-descr">
                  <div className="top-left-top-descr">
                    {this.state.details.title}
                  </div>
                  <div className="top-left-bottom-descr">
                    {this.state.details.location}
                  </div>
                </div>
                <div className="top-right-descr">
                  <div className="user_img" style={{ backgroundImage: 'url(/static/media/vue-appartement-evian.e0f60ab7.jpg)' }} />
                  <div className="user_name">Brigy</div>
                </div>
              </div>
              <div className="bottom-descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
            </div>
            <div className="res-container">
              <form className="res-form">
                <div className="top-res">
                  <div className="top-top-res">
                    <span className="res-price">50€</span>
                    {' '}
                    par nuit
                  </div>
                  <div className="top-bottom-res">
                    <i
                      className="fa fa-star"
                      style={{ color: '#d3b35c' }}
                    />
                    {' '}
                    4.2
                  </div>
                </div>
                <div className="bottom-res">
                  <div className="quick-search-item quick-search-item-input">
                    <div className="quick-search-item-input-title">
                      <div className="quick-search-item-input-title-split">Arrivée</div>
                      <div className="quick-search-item-input-title-split">Départ</div>
                    </div>
                    <div className="quick-search-item-input-input">
                      <input className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa" />
                      <input className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa" />
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
                  <div className="quick-search-item quick-search-item-button" style={{ justifyContent: 'left', padding: '10px 0' }}>
                    50€ x 4 = 200€
                  </div>
                  <div className="quick-search-item quick-search-item-button">
                    <div className="quick-search-item-button-button">
                      <button type="submit" className="custom-button">Rechercher</button>
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
