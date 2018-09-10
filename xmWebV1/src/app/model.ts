export interface slide_show{
    id:string;
    description:string;
    title:string;
}

export interface marker {
	lat: number;
	lng: number;
    draggable: boolean;
    info:string;
}
