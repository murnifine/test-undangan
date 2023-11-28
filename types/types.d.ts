import { Profile, User } from "@prisma/client";

export type PropsDataUser = {
        dataWeddings?: any;
        user: User;
        profile? : Profile
        defaultFoto? : string
}