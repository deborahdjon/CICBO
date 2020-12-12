export * from './alarm.service';
import { AlarmService } from './alarm.service';
export * from './guest.service';
import { GuestService } from './guest.service';
export * from './room.service';
import { RoomService } from './room.service';
export * from './staff.service';
import { StaffService } from './staff.service';
export const APIS = [AlarmService, GuestService, RoomService, StaffService];
