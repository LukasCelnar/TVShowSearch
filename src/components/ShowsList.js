import React from 'react';
import { connect } from 'react-redux';
import { selectShow } from '../actions';
import SearchInput from './SearchInput';
import './ShowList.css';

class ShowsList extends React.Component {

    renderedShows() {
        return this.props.inputValue.map(show => {
            return(
                <div className="ui items" key={show.show.id}>
                    <div className="item">
                        <div className="image">
                            <img alt={show.show.name} src={show.show.image ? show.show.image.medium ? show.show.image.medium : 'https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg' : 'https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg'} />
                        </div>
                        <div className="content">
                            <a className="header" href={show.show.officialSite}>{show.show.name}</a>
                            <div className="meta">
                                <span>{show.show.genres.join(", ")}</span>
                            </div>
                            <div className="description">
                                <p dangerouslySetInnerHTML={{__html: show.show.summary}}></p>
                            </div>
                            <div className="extra">
                                <div onClick={() => this.props.selectShow(show)} className="ui animated button" tabIndex="0">
                                    <div className="visible content">More</div>
                                    <div className="hidden content">
                                        <i className="right arrow icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {

        return (
            <div className="shows_list">
                <h1 className="shows_list__header">Search for every TV Show that exist</h1>
                <SearchInput />

                {this.renderedShows()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { inputValue: state.inputValue }
}

export default connect(mapStateToProps, { selectShow })(ShowsList);