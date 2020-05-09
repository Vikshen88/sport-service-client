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

const fetchPosts = (sportService, category) => () => (dispatch) => {
    dispatch(postsRequest());
    sportService.getPosts(category)
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
        fetchPost}