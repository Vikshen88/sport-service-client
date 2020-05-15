import React, {Component} from "react";
import PostListContainer from "../post-list";
import CategoryListContainer from "../category-list";
import Pagination from "rc-pagination";
import '../rc-pagination/assets/index.css'
import {changePage, fetchPages} from "../../actions";
import withSportService from "../hoc";
import {connect} from "react-redux";


class MainPage extends Component {


    componentDidMount() {
        this.props.fetchPages(this.props.category);
    }

    onChangeCategory = (category) => {
        this.props.fetchPages(category);
    };


    render() {

        const {category, totalPages, currentPage, loading, error} = this.props;

        console.log(this.props);

        return (
            <div className="row">
                <PostListContainer category={category} page={currentPage}/>
                <CategoryListContainer onChangeCategory={this.onChangeCategory}/>
                <Pagination
                    defaultCurrent={currentPage}
                    total={totalPages*10}
                    onChange={(page) => this.props.changePage(page-1)}/>
            </div>
        )
    }
};

const mapStateToProps = ({mainPage: {curCategory, totalPages, currentPage, loading, error}}) => {
    return {
        category: curCategory,
        totalPages: totalPages,
        currentPage: currentPage,
        loading: loading,
        error: error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {sportService} = ownProps;
    return {
        fetchPages:(category) =>  dispatch(fetchPages(sportService, category)()),
        changePage: (page) => dispatch(changePage(page))
    }
};

export default withSportService()(connect(mapStateToProps, mapDispatchToProps)(MainPage));