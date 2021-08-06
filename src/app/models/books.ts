export class Books {
    id: Number;
    title: string;
    image: string;
    price: number;
    categoryId: string;
    authorId: string;

    constructor(id: Number, title: string,image: string, price: number,categoryId: string,authorId: string){
        this.id = id;
        this.title = title;
        this.image = image;
        this.price = price;
        this.categoryId = categoryId;
        this.authorId = authorId;
       
    }
}
