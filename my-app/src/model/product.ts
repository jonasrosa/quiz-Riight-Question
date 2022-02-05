export type DetailOfTheBooks={
   
    title:string;
    publisher:string;

}
export type Product={
    id:string;
    volumeInfo:{
        title:string,

        description:string;
        imageLinks:{
            smallThumbnail:string
        }
    } 


}
