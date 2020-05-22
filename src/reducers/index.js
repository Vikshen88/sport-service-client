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

const updateMainPage = (state, action) => {
    if (state === undefined) {
        return {
            curCategory: '',
            totalPages: 0,
            currentPage: 0,
            loading: true,
            error: false
        }
    }
    switch (action.type) {
        case 'FETCH_PAGES_LOADING':
            return {
                curCategory: '',
                totalPages: 0,
                currentPage: 0,
                loading: true,
                error: false
            };

        case 'FETCH_PAGES_SUCCESS':
            return {
                curCategory: action.payload.category,
                totalPages: action.payload.pages,
                currentPage: 0,
                loading: false,
                error: false
            };
        case 'FETCH_PAGES_ERROR':
            return {
                curCategory: '',
                totalPages: 0,
                currentPage: 0,
                loading: false,
                error: true
            };
        case 'CHANGE_PAGE':
            return {
                curCategory: state.mainPage.curCategory,
                totalPages: state.mainPage.totalPages,
                currentPage: action.payload,
                loading: false,
                error: false
            };
        default:
            return state.mainPage
    }
};

const updateCommentList = (state, action) => {
    if (state === undefined) {
        return {
            comments: [],
            visible: 3,
            loading: true,
            error: false
        }
    }
    switch (action.type) {
        case 'FETCH_COMMENTS_REQUEST':
            return {
                comments: [],
                visible: 3,
                loading: true,
                error: false
            };
        case 'FETCH_COMMENTS_SUCCESS':
            return {
                comments: action.payload,
                visible: 3,
                loading: false,
                error: false
            };
        case 'FETCH_COMMENTS_FAILURE':
            return {
                comments: [],
                visible: 3,
                loading: false,
                error: true
            };

        case 'LOAD_MORE_COMMENTS':{
            let visible = state.commentList.visible;
            let visibleMore = visible + 3;
            return {
                comments: state.commentList.comments,
                visible: visibleMore,
                loading: false,
                error: false
            }
        }

        case 'ADD_NEW_COMMENT':{
            let commentList = state.commentList.comments;
            let newCommentList = [...commentList, action.payload];
            return {
                comments: newCommentList,
                visible: state.commentList.visible,
                loading: state.commentList.loading,
                error: state.commentList.error
            }
        }

        default:
            return state.commentList;
    }
};

const updateUserInfo = (state, action) => {
    console.log('ACTION:', action.type, 'STATE V REDUCER:', state);
    if(state === undefined) {
        return {
            user: null,
            loading:true,
            error: false
        }
    }

    switch(action.type){
        case 'FETCH_USER_REQUEST':
            return {
                user: state.userInfo.user,
                loading: true,
                error: false
            };
        case 'FETCH_USER_SUCCESS':
            return {
                user: action.payload,
                loading: false,
                error: false
            };

        case 'FETCH_USER_FAILURE':
            return {
                user: null,
                loading: false,
                error: true
            };

        case 'ADD_NEW_USER':
            return {
                user: action.payload,
                loading: false,
                error: false
            };

        default:
            return state.userInfo;
    }
};

const reducer = (state, action) => {
    return {
        categoryList: updateCategoryList(state, action),
        postList: updatePostList(state, action),
        postItem: updatePostItem(state, action),
        mainPage: updateMainPage(state, action),
        commentList: updateCommentList(state, action),
        userInfo: updateUserInfo(state, action)
    }
};

export default reducer;