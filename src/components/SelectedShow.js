import React from 'react';
import { connect } from 'react-redux';
import './SelectedShow.css';

class SelectedShow extends React.Component {
    render() {
        const { show } = this.props

        console.log(show)

        if (!show) {
            return <div className="selected_show"></div>
        }

        return (
            <div className="selected_show">
                <div className="ui items" key={show.show.id}>
                    <div className="item">
                        <div className="image">
                            <img alt={show.show.name} src={show.show.image ? show.show.image.original ? show.show.image.original : 'https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg' : 'https://www.generationrealty.ca/wp-content/uploads/2017/06/No-image-found.jpg'} />
                        </div>
                        <div className="content">
                            <a className="header" href={show.show.officialSite}>{show.show.name}</a>
                            <div className="description">
                                <p><b>Genres: {show.show.genres.join(", ")}</b></p>
                            </div>
                            <div className="description">
                                {show.show.rating.average ? <p><b>Rating: {show.show.rating.average}/10</b></p> : null}
                            </div>
                            <div className="description">
                                {show.show.status ? <p><b>Status: {show.show.status}</b></p> : null}
                            </div>
                            <div className="description">
                                {show.show.language ? <p><b>Language: {show.show.language}</b></p> : null}
                            </div>
                            <div className="description">
                                {show.show.network ? <p><b>Network: {show.show.network.name}</b></p> : null}
                            </div>
                            <div className="description">
                                {show.show.runtime ? <p><b>Runtime: {show.show.runtime} min</b></p> : null}
                            </div>
                            <div className="description">
                                {show.show.premiered ? <p><b>Premiered: {show.show.premiered}</b></p> : null}
                            </div>
                            <div className="description">
                                {show.show.schedule ? <p><b>Scheduled: {show.show.schedule.days} {show.show.schedule.time}</b></p> : null}
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