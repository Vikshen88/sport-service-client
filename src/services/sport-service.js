export default class SportService {

    _baseApiUrl = 'http://localhost:8080/SportMatch/';

    getResource = async (url) => {
        const res = await fetch(`${this._baseApiUrl}${url}`, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }});
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._baseApiUrl}${url}, received ${res.status}`)
        }

        const body = await res.json();
        console.log(body);
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
        if(category === undefined) {
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
        if(category === undefined) {
            category = "";
        }
        const res = await this.getResource(`post/${category}?page=0`);
        return res.totalPages;
    }

}