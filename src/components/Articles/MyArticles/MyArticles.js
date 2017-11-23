import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import '../Articles.css';
import './MyArticles.css';

import { tryFetchMyArticles } from '../ArticleActions';
import ArticleListItem from "../ArticleListItem/ArticleListItem";

class MyArticles extends Component {

    constructor(props){
        super(props);
        this.showArticle = this.showArticle.bind(this);
    }

    componentWillMount() {
        document.title='Articles | My Articles';
        this.props.tryFetchMyArticles();
    }

    renderMyArticles() {
        return (
            _.map(this.props.myArticles, (article, i) => {
                return (
                    <ArticleListItem key={i} {...article} showArticle={this.showArticle} />
                )
            })
        )
    }

    showArticle(id) {
        this.props.history.push(`/articles/${id}/edit`);
    }

    render() {
        return (
            <div>
                <div className="route-name-wrapper">
                    <span>Articles </span>
                    {this.props.renderGreeting()}
                </div>
                <ul id="articles-wrapper">
                    {this.renderMyArticles()}
                </ul>
                <div className="add-article-wrapper">
                    <button type='button'
                            className="btn btn-green btn-auto"
                            onClick={() => this.props.history.push('/articles/new')}
                    >
                        Add Article <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myArticles: state.articles.myArticles
    }
}

export default connect(mapStateToProps, { tryFetchMyArticles })(MyArticles);
