import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import './ArticlesEdit.css';

import {
    tryCreateArticle,
    tryFetchArticleToEdit,
    resetForm,
    tryEditArticle,
    deleteArticle }
from "../ArticleActions";

class ArticlesEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: ''
        };
    }

    componentWillMount() {
        if (this.props.location.pathname.includes('new')) {
            document.title='Articles | New';
            this.setState({ mode: 'New' });
            this.props.resetForm();
        } else {
            this.setState({ mode: 'Edit' });
            document.title='Articles | Edit';
            const articleId = this.props.computedMatch.params.id;
            const { history } = this.props;
            this.props.tryFetchArticleToEdit(articleId, history);
        }
    }

    renderField({input, compType, category, label, type, rows, meta: { touched, error, warning }}){

        if(compType === 'input') {
            return (
                <div className="input-wrapper">
                    <label>{label}</label>
                    <input {...input} type={type} className={touched && error ? 'highlight-input-error': ''} />
                </div>
            )
        } else if (compType === 'textarea') {
            return (
                <div className="input-wrapper">
                    <label>{label}</label>
                    <textarea {...input} rows={rows} type={type} className={touched && error ? 'highlight-input-error': ''} />
                </div>
            )
        } else {
            return(
                <div className="input-wrapper">
                    <label className="control-label">{label}</label>
                    <select {...input} className={`form-control ${touched && error ? 'highlight-input-error': ''}`}>
                        <option value=""></option>
                        <option value="environment">Environment</option>
                        <option value="politics">Politics</option>
                        <option value="sports">Sports</option>
                        <option value="travel">Travel</option>
                        <option value="food">Food</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="art">Art</option>
                    </select>
                    <span className={`dot dot-${category}`}></span>
                </div>
            );
        }
    }

    renderDeleteButton() {
        if (this.state.mode === 'Edit') {
            return(
                <button type="button" className="btn btn-cancel" onClick={() => this.deleteArticle()}>
                    Delete
                </button>
            )
        }
    }

    deleteArticle(){
        const { history } = this.props;
        const articleId = this.props.initialValues.id;
        this.props.deleteArticle(articleId, history);
    }

    onSubmit(values) {
        const history = this.props.history;
        if (this.state.mode === 'New') {
            this.props.tryCreateArticle(values, history);
        } else {
            const article = {...this.props.articleToEdit, ...values, date: Date.now()};
            const articleForUsersList = {
                category: values.category,
                date: article.date,
                id: article.id,
                imgPath: article.imgPath,
                resume: article.resume,
                title: article.title
            };
            this.props.tryEditArticle(article, articleForUsersList, history);
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className="route-name-wrapper">
                    <span>Articles / {this.state.mode} </span>
                    {this.props.renderGreeting()}
                </div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-wrapper shadowed-card">
                    <div className="left-wrapper">
                        <Field label="Title" name="title" component={this.renderField} compType='input' type="text" />
                        <Field label="Resume" name="resume" component={this.renderField} compType='textarea' rows='3' type="text" />
                        <Field label="Description" name="description" component={this.renderField} compType='textarea' rows='5' type="text" />
                        <Field label='Category' name='category' component={this.renderField} compType='select' category={this.props.category} type='text' />
                    </div>
                    <div className="right-wrapper">
                        <Field label="Image Path" name="imgPath" component={this.renderField} compType='input' type="text" />
                        <div className="img-wrapper">
                            <img src={this.props.imgPath} alt="" />
                        </div>
                        <div className="buttons-wrapper">
                            <button type='button' className="btn btn-cancel"
                                    onClick={() => this.props.history.push('/my-articles')}
                            >
                                Cancel
                            </button>
                            {this.renderDeleteButton()}
                            <button type='submit' className="btn btn-submit" disabled={!this.props.dirty}>
                                {this.state.mode}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {

    const errors = {};

    if (!values.title) {
        errors.title = 'Required'
    }
    if(!values.resume){
        errors.resume = "Required";
    }
    if(!values.description){
        errors.description = "Required";
    }
    if(!values.imgPath){
        errors.imgPath = "Required";
    }
    if(!values.category){
        errors.category = "Required";
    }
    return errors;

}

ArticlesEdit = reduxForm({
    validate,
    form: 'articleForm'
})(ArticlesEdit);

const selector = formValueSelector('articleForm');

ArticlesEdit = connect(
    state => {
        const category = selector(state, 'category');
        const imgPath = selector(state, 'imgPath');
        return {
            initialValues: state.articles.articleToEdit,
            enableReinitialize: true,
            category,
            imgPath
        }
    }
, { tryCreateArticle, tryFetchArticleToEdit, resetForm, tryEditArticle, deleteArticle })(ArticlesEdit);

export default ArticlesEdit;