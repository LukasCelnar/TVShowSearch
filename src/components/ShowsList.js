import React from 'react';
import { connect } from 'react-redux';
import { selectShow } from '../actions';
import SearchInput from './SearchInput';
import './ShowList.css';

class ShowsList extends React.Component {
    state = {
        // opened true means that SelectedShow component is rendered while screen width is less then 1000px
        opened: false
    }

    moreButtonClicked(show) {
        this.props.selectShow(show)

        if (window.innerWidth < 1000) {
            this.setState({opened: !(this.state.opened)})
        }
    }

    showsListClicked() {
        if (this.state.opened) {
            this.setState({opened: false})
            this.props.selectShow(null)
        }
    }


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
                                <div onClick={() => this.moreButtonClicked(show)} className="ui animated button" tabIndex="0">
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
            <div onClick={() => this.showsListClicked()} style={(window.innerWidth < 1000 && this.state.opened) ? {filter: 'blur(4px)'} : {}} className="shows_list">
                <h1 className="shows_list__header">Search every TV Show that exist</h1>
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