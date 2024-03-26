export default class BooksService {
    data = [
        {
            id: 1, //IT book store
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32.59,
            coverImage: 'https://m.media-amazon.com/images/I/41yJ75gpV-L._AC_SY780_.jpg'
        },
        {
            id: 2, //IT book store
            title: 'Release It',
            author: 'Michael T. Nygard',
            price: 42.05,
            coverImage: 'https://m.media-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
        },
        {
            id: 3, //best book store
            title: 'The Hunter: A Novel',
            author: 'by Tana French',
            price: 13.99,
            coverImage: 'https://m.media-amazon.com/images/I/A1sHlOQxF0L._SL1500_.jpg'
        },
        {
            id: 4, //best book store
            title: 'James: A Novel',
            author: 'by Percival Everett',
            price: 14.99,
            coverImage: 'https://m.media-amazon.com/images/I/61PLB76vF8L._SL1500_.jpg'
        },{
            id: 5, //100 book store
            title: 'A Brief History of Time',
            author: 'by Stephen Hawking',
            price: 22.82,
            coverImage: 'https://m.media-amazon.com/images/I/91ebghaV-eL._SL1500_.jpg'
        },
        {
            id: 6, //100 book store
            title: 'Fahrenheit 451',
            author: 'by Ray Bradbury',
            price: 12.99,
            coverImage: 'https://m.media-amazon.com/images/I/61z7RDG3OIL._SL1500_.jpg'
        },
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                }
                else {
                    resolve(this.data)
                }
                                
            }, 400);
        });
    }
}