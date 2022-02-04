export type DetailOfTheBooks={
    authors:string;
    description:string;
    imageLinks:string;
    title:string;
    publisher:string;

}
export type Product={
    id:string;
    volumeInfo:Array<DetailOfTheBooks>   


}
