
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
    ucapan: true;
    order: true;
    photo_moment: true;
    template: {
      include: {
        user: true;
      };
    };
  };
}>;

export interface PaymentStatus {
  status_code: string;
  transaction_id: string;
  gross_amount: string;
  currency: string;
  order_id: string;
  payment_type: string;
  signature_key: string;
  transaction_status: string;
  fraud_status: string;
  status_message: string;
  merchant_id: string;
  va_numbers: VaNumber[][];
  payment_amounts: any[];
  transaction_time: string;
  expiry_time: string;
}

export interface VaNumber {}
