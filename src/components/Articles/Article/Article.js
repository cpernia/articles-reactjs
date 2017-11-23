import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Article.css';
import { tryFetchArticle } from '../ArticleActions';
import * as helper from '../../../helpers/TransformToView';

class Article extends Component {

    componentWillMount() {
        document.title='Articles | Show';
        this.props.tryFetchArticle(this.props.match.params.id);
    }

    render() {
        if(this.props.article.title !== '') {
            return (
                <div>
                    <div className="route-name-wrapper">
                        <span>Article </span>
                        <span>{this.props.renderGreeting()}</span>
                    </div>
                    <div className="article-wrapper shadowed-card">
                        <div className="article-info-wrapper">
                            <div className="resume-img-wrapper">
                                <div className="img-wrapper-ind">
                                    <img src={this.props.article.imgPath} alt="" />
                                </div>
                            </div>
                            <div className="context-wrapper">
                                <h2>{this.props.article.title}</h2>
                                <hr />
                                <div className="info-article-wrapper">
                                    <div className="by-category-wrapper">
                                        <div>
                                            <span>by {this.props.article.owner}</span>
                                        </div>
                                        <div>
                                            <span>/ {helper.uppercase(this.props.article.category)}</span>
                                        </div>
                                        <div>
                                            <span className={`dot dot-${helper.lowercase(this.props.article.category)}`}></span>
                                        </div>
                                    </div>
                                    <div className="date-wrapper">
                                        <span>{helper.formatDate(this.props.article.date)}</span>
                                    </div>
                                </div>
                                <div className="resume-wrapper">
                                    <p>
                                        {this.props.article.resume}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <p>
                                {this.props.article.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

        return <div>Loading...</div>

    }
}

function mapStateToProps(state) {
    return {
        article: state.articles.articleViewed
    };
}

export default connect(mapStateToProps, { tryFetchArticle })(Article);
