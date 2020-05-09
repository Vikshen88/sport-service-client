import React from "react";
import PostList from "../post-list";
import CategoryListContainer from "../category-list";

const MainPage = ({match, history}) => {

    const {category} = match.params;

    return (
        <div className="row">
            <PostList category={category}/>
            <CategoryListContainer onItemSelected={ (category) => history.push(category)}/>
        </div>
    )

};
export default MainPage;