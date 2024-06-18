export declare class RoutePointResponseDto {
    routeId: number;
    pointId: number;
    checkin: boolean;
}
export declare class RouteResponseDto {
    name: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    RoutePoint: RoutePointResponseDto[];
}
