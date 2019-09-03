export interface Permission {
    id: number;
    name: string;
    description: string;
    version: number;
    tstamp: Date;
    tags: Array<string>;
    color: string; // RGB or HEX format???
    active: number; // number(0-1) or boolean???
}
