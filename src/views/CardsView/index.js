import React, { Component, Fragment } from 'react';
import Card from '../../components/Card/Card';
import Drawer from '../../components/Card/Drawer';
import { getWatchListRequest } from '../../redux/actions/watchlistActions';
import { connect } from 'react-redux';

class CardView extends Component {
    state = {
        openDrawerID: '',
        openDrawer: false
    }

    componentDidMount() {
        const { retrieveWatchList } = this.props;
        retrieveWatchList();
    }

    openArticle = (url) => {
        window.open(url, '_blank')
    }

    toggleDrawer = (id) => {
        this.setState(prevstate => ({ openDrawerID: id, openDrawer: !prevstate.openDrawer }));
    }

    formatFollowerCount(followers){
        let count = Math.floor(followers/1000);
        if(count === 0){
            return followers;
        }
        else if(count > 1000){
            count = Math.floor(count/1000);
            return `${count}M`
        }
        return `${count}K`
    }

    render() {
        const { watchListData: { watchlist } } = this.props;
        const { openDrawerID, openDrawer } = this.state;

        return (
            watchlist.map((item) =>
                <Fragment>
                    <Card
                        openArticle={() => this.openArticle(item.url)}
                        id={item.id}
                        domainName={item.domain_name.includes('.com') ? item.domain_name.split('.')[0]:
                         item.domain_name.replace(/\s/g, '')}
                        authorImage={item.author_image_url}
                        followerCount={this.formatFollowerCount(item.author_followers_count)}
                        screenName={item.author_screen_name}
                        publishTime={item.publishTime}
                        score={item.score}
                        title={item.title}
                        url={item.url}
                        openDrawer={openDrawer}
                        openDrawerID={openDrawerID}
                        logo={item.domain_cached_logo_url}
                        timeDiff={Math.floor(item.publishTimeDiff/3600)}
                        toggleDrawer={() => this.toggleDrawer(item.id)}
                    />
                    <Drawer
                        openDrawerID={openDrawerID}
                        openDrawer={openDrawer}
                        id={item.id}
                    />
                </Fragment>

            )
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        retrieveWatchList: () => dispatch(getWatchListRequest()),
    }
}

const mapStateToProps = (state) => {
    return {
        watchListData: state.watchListReducer
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);


