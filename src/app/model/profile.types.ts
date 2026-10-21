import { Observable } from "rxjs";
import { Pageble } from "./pagable.types";

export interface Profile {
    id: number;
    username: string;
    description: string;
    avatarUrl: string | null;
    subscriptionsAmount: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    stack: string[];
    city: string;
}

export type ProfileFilterMethod = (params: Record<string, any>) => Observable<Pageble<Profile>>;