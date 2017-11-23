import React from 'react';
import * as helper from '../../../helpers/TransformToView';

const ArticleListItem = (props) => {

    return (
        <li className="card-wrapper" onClick={() => props.showArticle(props.id)}>
            <div className="card-small shadowed-card">
                <div className="card-img">
                    <img src={props.imgPath} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-date-by">
                        <span>By {props.owner ? helper.subEmail(props.owner): 'you'}</span>
                        <span>{helper.formatDate(props.date)}</span>
                    </div>
                    <div className="card-title">
                        <h3>{helper.subText(props.title, 89)}</h3>
                    </div>
                    <div className="card-resume">
                        <p>{helper.subText(props.resume, 195)}</p>
                    </div>
                </div>
                <div className="card-category-wrapper">
                    <div className="card-divider">
                        <div>
                            <hr />
                        </div>
                        <div>
                            <span className={`dot dot-${helper.lowercase(props.category)}`}></span>
                        </div>
                    </div>
                    <div className="card-category">
                        <span>{helper.firstLetterUppercase(props.category)}</span>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default ArticleListItem;