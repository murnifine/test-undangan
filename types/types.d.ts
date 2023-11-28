
import { Prisma, User } from "@prisma/client";

export interface PropsDataUser {
  dataWeddings?: any;
  user: User;
  defaultFoto?: string;
}

// 1: Define a type that includes the relation to `Post`
type UserProps = Prisma.UserGetPayload<{
  include: {
    ucapan: true;
    photo_moment: true;
    template: {
      include: {
        admin: true;
      };
    };
  };
}>;
