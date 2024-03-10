export default class BookStoreService {
    data = [
        {
            id: 1,
            name: 'IT book store',
        },
        {
            id: 2, 
            name: 'best book store',
        },
        {
            id: 3, 
            name: '100 book store',
        }
    ];
    getBookStores() {
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