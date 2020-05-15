//----------------------
//CATEGORIES ACTIONS
const categoriesRequest = () => {
    return {
        type: 'FETCH_CATEGORIES_REQUEST'
    }
};

const categoriesLoaded = (newCategories) => {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: newCategories
    }
};

const categoriesError = (error) => {
    return {
        type: 'FETCH_CATEGORIES_FAILURE',
        payload: error
    }
};


//-------------------------
//POSTS ACTIONS
const postsRequest = () => {
    return {
        type: 'FETCH_POSTS_REQUEST'
    }
};

const postsLoaded = (newPosts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        payload: newPosts
    }
};

const postsError = () => {
    return {
        type: 'FETCH_POSTS_FAILURE'
    }
};

const postRequest = () => {
    return {
        type: 'FETCH_POST_REQUEST'
    }
};

const postLoaded = (postItem) => {
    return {
        type: 'FETCH_POST_SUCCESS',
        payload: postItem
    }
};

const postError = () => {
    return {
        type: 'FETCH_POST_FAILURE'
    }
};
//---------------------
//PAGES ACTION
const pagesRequest = () => {
    return {
        type: 'FETCH_PAGES_REQUEST'
    }
};

const pagesLoaded = (pages, category) => {
    let data = {category, pages};
    return {
        type: 'FETCH_PAGES_SUCCESS',
        payload: data
    }
};

const pagesError = (error) => {
    return {
        type: 'FETCH_PAGES_FAILURE',
        payload: error
    }
};

export const changePage = (page) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
};
//------------------------
//COMMENTS ACTION

const commentsRequest = () => {
    return {
        type: 'FETCH_COMMENTS_REQUEST'
    }
};

const commentsLoaded = (comments) => {
    return {
        type: 'FETCH_COMMENTS_SUCCESS',
        payload: comments
    }
};

const commentsError = (error) => {
    return {
        type: 'FETCH_COMMENTS_FAILURE',
        payload: error
    }
};

export const loadMoreComments = () =>{
    return {
        type: 'LOAD_MORE_COMMENTS'
    }
};

export const addNewComment = (comment) => {
    return {
        type: 'ADD_NEW_COMMENT',
        payload: comment
    }
};



const fetchComments = (sportService, id) => () => (dispatch) => {
    dispatch(commentsRequest());
    sportService.getComments(id)
        .then((comments) => {
            dispatch(commentsLoaded(comments));
        })
        .catch((error) => {
            dispatch(commentsError(error))
        })
};

const fetchPages = (sportService, category) => () => (dispatch) => {
    dispatch(pagesRequest());
    sportService.getPages(category)
        .then((pages) => {
            dispatch(pagesLoaded(pages, category))
        })
        .catch((error) => {
            dispatch(pagesError(error))
        })
};

const fetchPost = (sportService, id) => () => (dispatch) => {
    dispatch(postRequest());
    sportService.getPost(id)
        .then((post) => {
            dispatch(postLoaded(post))
        })
        .catch((error) => {
            dispatch(postError())
        })
};

const fetchPosts = (sportService, category, page) => () => (dispatch) => {
    dispatch(postsRequest());
    sportService.getPosts(category, page)
        .then((data) => {
            dispatch(postsLoaded(data))
        })
        .catch((error) => {
            dispatch(postsError()) //REMAKE
        })
};

const fetchCategories = (sportService) => () => (dispatch) => {
        dispatch(categoriesRequest());
        sportService.getAllCategories()
            .then((data) => {
                dispatch(categoriesLoaded(data))
            })
            .catch((error) => {
                dispatch(categoriesError(error))
            })
};

export {fetchCategories,
        fetchPosts,
        fetchPost,
        fetchPages,
        fetchComments}