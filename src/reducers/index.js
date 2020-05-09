const updateCategoryList = (state, action) => {

    if (state === undefined) {
        return {
            categories: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case 'FETCH_CATEGORIES_REQUEST':
            return {
                categories: [],
                loading: true,
                error: false
            };

        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                categories: action.payload,
                loading: false,
                error: false
            };

        case 'FETCH_CATEGORIES_FAILURE':
            return {
                categories: [],
                loading: false,
                error: true
            };

        default:
            return state.categoryList;
    }
};

const updatePostList = (state, action) => {
    console.log(action.type, 'ACTION');
    if (state === undefined) {
        return {
            posts: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return {
                posts: [],
                loading: false,
                error: false
            };

        case 'FETCH_POSTS_SUCCESS':
            return {
                posts: action.payload,
                loading: false,
                error: false
            };

        case  'FETCH_POSTS_FAILURE':
            return {
                posts: [],
                loading: false,
                error: true
            };

        default:
            return state.postList;
    }
};

const updatePostItem = (state, action) => {
    if (state === undefined) {
        return {
            post: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                post: [],
                loading: true,
                error: false
            };

        case 'FETCH_POST_SUCCESS':
            return {
                post: action.payload,
                loading: false,
                error: false
            };
        case 'FETCH_POST_FAILURE':
            return {
                post: [],
                loading: false,
                error: true
            };

        default:
            return state.postItem
    }
};

const reducer = (state, action) => {
    return {
        categoryList: updateCategoryList(state, action),
        postList: updatePostList(state, action),
        postItem: updatePostItem(state,action)
    }
};

export default reducer;