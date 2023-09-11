import Image, { StaticImageData } from "next/image"

export type contact={
    id:number | string,
    name:string,
    address:string,
    contact:number,
    image:StaticImageData 
}