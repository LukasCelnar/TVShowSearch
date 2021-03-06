import React from 'react';
import { connect } from 'react-redux';
import './SelectedShow.css';

class SelectedShow extends React.Component {
    render() {
        const { show } = this.props

        if (!show) {
            return null
        }

        return (
            <div className="selected_show">
                <div className="ui items" key={show.show.id}>
                    <div className="item">
                        <div className="image">
                            {window.innerWidth > 500 ? <img alt={show.show.name} src={show.show.image ? show.show.image.original ? show.show.image.original : 'https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg' : 'https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg'} /> : null}
                        </div>
                        <div className="content">
                            <a className="header" href={show.show.officialSite}>{show.show.name}</a>
                            <div className="description">
                                <p><b>Genres:</b> {show.show.genres.join(", ")}</p>
                            </div>
                            <div className="description">
                                {show.show.rating.average ? <p><b>Rating:</b> {show.show.rating.average}/10</p> : null}
                            </div>
                            <div className="description">
                                {show.show.status ? <p><b>Status:</b> {show.show.status}</p> : null}
                            </div>
                            <div className="description">
                                {show.show.language ? <p><b>Language:</b> {show.show.language}</p> : null}
                            </div>
                            <div className="description">
                                {show.show.network ? <p><b>Network:</b> {show.show.network.name}</p> : null}
                            </div>
                            <div className="description">
                                {show.show.runtime ? <p><b>Runtime:</b> {show.show.runtime} min</p> : null}
                            </div>
                            <div className="description">
                                {show.show.premiered ? <p><b>Premiered:</b> {show.show.premiered}</p> : null}
                            </div>
                            <div className="description">
                                {show.show.schedule ? <p><b>Scheduled:</b> {show.show.schedule.days} {show.show.schedule.time}</p> : null}
                            </div>
                            <div className="description">
                                <b>Description: </b>
                                <p dangerouslySetInnerHTML={{__html: show.show.summary}}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { show: state.selectedShow };
}

export default connect(mapStateToProps)(SelectedShow);