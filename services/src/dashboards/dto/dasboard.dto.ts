import { IsDate, IsInt, IsString, ValidateNested } from 'class-validator';

import { WidgetDto } from './widget.dto';

export class DashboardDto {

    name: string;

    daterangefrom: number;

    daterangeto: number;

    widgets: WidgetDto[];
}