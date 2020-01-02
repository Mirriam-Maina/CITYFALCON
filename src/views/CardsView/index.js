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

    formatFollowerCount = (followers) => {
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

    formatTime = (time) => {
        let formattedTime = Math.floor(time/3600);
        if(formattedTime === 0){
           formattedTime = Math.floor(time/60);
           return `${formattedTime} minutes`;
        }
        else return `${formattedTime} hours`; 
    }

    formatDomainName = (domainName) => {
      if(domainName.includes('.com')){
          return domainName.split('.')[0]
      } 
      else return domainName.replace(/\s/g, '')
    }

    isTweet = (category) => {
        if((category === 'op') || (category === 'mp') || (category === 'r')) {
            return false;
        }
        return true;
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
                        domainName={this.formatDomainName(item.domain_name)}
                        authorImage={item.author_image_url}
                        followerCount={this.formatFollowerCount(item.author_followers_count)}
                        screenName={item.author_screen_name}
                        publishTime={item.publishTime}
                        score={item.score}
                        title={item.title}
                        isTweet={this.isTweet(item.category)}
                        url={item.url}
                        openDrawer={openDrawer}
                        openDrawerID={openDrawerID}
                        logo={item.domain_cached_logo_url}
                        timeDiff={this.formatTime(item.publishTimeDiff)}
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


