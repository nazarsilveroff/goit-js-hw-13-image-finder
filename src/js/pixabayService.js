const TOKEN = '21146300-df17acb11e029d73c17341eff';
const URL = 'https://pixabay.com/api';

export default class PixabayService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
   
    fetchHits() {
         return fetch(`${URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${TOKEN}`)
            .then(response => response.json())
             .then(({hits}) => {
                
                return hits;
        });
    }
    
    incrementPage(){
        this.page += 1;
    }

    firstPage() {
        this.page = 1;
    }

    get query() {
            return this.searchQuery;
    }
    set query(newQuery) {
            this.searchQuery = newQuery;
    }
}