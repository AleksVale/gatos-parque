import { Feed } from "@prisma/client";
export declare class FeedResponse implements Feed {
    status: boolean;
    id: string;
    title: string;
    description: string;
    photo_key: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
