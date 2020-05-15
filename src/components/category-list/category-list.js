import React, {Component} from "react";
import './category-list.css';
import withSportService from "../hoc";
import {fetchCategories} from "../../actions";
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const CategoryList = ({categories, onChangeCategory}) => {

    const categoriesList = categories.map((item) => {
        return (
            <li key={item.id} onClick={() => onChangeCategory(item.url)} >
                <a>{item.nameCategory}</a>
            </li>
        )
    });

    return (
        <div className="col-2">
            <div className="list-type4">
                <h3>Категории</h3>
                <ul className="list-group">
                    {categoriesList}
                </ul>
            </div>
        </div>
    )
};

class CategoryListContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {

        const {categories, loading, error} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return <CategoryList categories={categories} onChangeCategory={this.props.onChangeCategory}/>
    }
}

const mapStateToProps = ({categoryList:{categories, loading, error}}) => {
    return {
        categories: categories,
        loading: loading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {sportService} = ownProps;
    return {
        fetchCategories: () => dispatch(fetchCategories(sportService)())
    }
};

export default withSportService()(connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer));


