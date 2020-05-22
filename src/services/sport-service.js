export default class SportService {

    _baseApiUrl = 'http://localhost:8080/SportMatch/';

    getResource = async (url) => {
        const res = await fetch(`${this._baseApiUrl}${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._baseApiUrl}${url}, received ${res.status}`)
        }

        const body = await res.json();
        return body;
    };

    getAllCategories = async () => {
        const res = await this.getResource('category');
        return res;
    };

    getPost = async (id) => {
        const res = await this.getResource(`post/article/${id}`);
        return res;
    };

    getPosts = async (category, page) => {
        if (category === undefined) {
            category = "";
        }

        const res = await this.getResource(`post/${category}?page=${page}`);
        return res.content;
    };

    getComments = async (id) => {
        const res = await this.getResource(`comment/${id}`);
        return res;
    };

    getPages = async (category) => {
        if (category === undefined) {
            category = "";
        }
        const res = await this.getResource(`post/${category}?page=0`);
        return res.totalPages;
    };

    getUser = async (username, password) => {
        const res = await this.getResource(`user/?username=${username}&password=${password}`);
        return res;
    };

    sendUser = async (username, password) => {
        const rawResponse = await fetch(`${this._baseApiUrl}user/addUser`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password, roles: [{id: 1}]})
        });
        const content = await rawResponse.json();
        return content;
    };

    sendComment = async (comment, user, post) => {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        const rawResponse = await fetch(`${this._baseApiUrl}comment/addComment`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({content: comment, date: today, user: {id: user.id}, idPost: post.id})
        });

        const content = await rawResponse.json();

    }
}

