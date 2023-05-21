export interface Note {
    _id:string;
    title?:string;
    text?:string;
    todos?:Array<Todo>;
    imgUrl?:string;
    vidUrl?:string;
    pinned:boolean;
    reminders?:Array<Reminder>;
    archive:boolean;
    trash?:boolean;
    createdBy:string;
}

export interface Reminder {
    date:   Date;
    time:   Date;
    repeat: string;
}

export interface Todo {
    text?:string;
    checked:boolean;
}
