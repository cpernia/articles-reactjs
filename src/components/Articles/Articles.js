import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Articles.css';
import { tryFetchArticles } from "./ArticleActions";
import ArticleListItem from './ArticleListItem/ArticleListItem';

class Articles extends Component {

    constructor(props) {
        super(props);
        this.showArticle = this.showArticle.bind(this);
    }

    componentWillMount() {
        document.title='Articles | Board';
        this.props.tryFetchArticles();
    }

    renderArticles() {
        return (
            _.map(this.props.articles, (article, i) => {
                return (
                    <ArticleListItem key={i} {...article}
                                     showArticle={this.showArticle}/>
                )
            })
        )
    }

    showArticle(id) {
        this.props.history.push(`/articles/${id}`);
    }

    render() {
        return (
            <div>
                <div className="route-name-wrapper">
                    <span>Articles </span>
                    {this.props.renderGreeting()}
                </div>
                <ul id="articles-wrapper">
                    {this.renderArticles()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { articles: state.articles.articles };
}

export default connect(mapStateToProps, { tryFetchArticles })(Articles);
