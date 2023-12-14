
import { Prisma, Profile, User } from "@prisma/client";
import { Select } from "antd";

export interface PropsDataUser {
  // dataWeddings?: any;
  // user: User;
  defaultFoto?: string;
}

// 1: Define a type that includes the relation to `Post`
type UserProps = Prisma.UserGetPayload<{
  include: {
    Profile : {
      include: {
        ucapan: true;
        photo_moment: true;
        template: {
          include: {
            admin: true;
          };
        };
      };
    }
  }
}>;

type TemplateUndanganProps = Prisma.TemplateUndanganGetPayload<{
  // include:{
  //   templates
  // }
  include: {
    user: true;
  };
}>;

// type AllDataProfileProps = {
//   defaultFoto : string,
//   user: UserProps
//       sosialMediaPria: {
//       facebook : string,
//       instagram : string,
//       tiktok : string,
//     },
//     sosialMediaWanita: {
//       facebook : string,
//       instagram : string,
//       tiktok : string,
//     }
// }





type ProfileProps = Prisma.ProfileGetPayload<{
  include: {
    ucapan: true,
    photo_moment: true,
    template: {
      include: {
        user: true,
      },
    },
  },
}>;