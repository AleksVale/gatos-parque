import { ApiProperty } from "@nestjs/swagger";
import { Feed } from "@prisma/client";


export class FeedResponse implements Feed{
    @ApiProperty()
    status: boolean;
    @ApiProperty()
    id: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    photo_key: string | null;
    @ApiProperty()
    userId: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
