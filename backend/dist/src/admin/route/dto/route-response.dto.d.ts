export declare class RoutePointResponseDto {
    routeId: number;
    pointId: number;
    checkin: boolean;
}
export declare class RouteResponseDto {
    name: string;
    RoutePoint: RoutePointResponseDto[];
}
