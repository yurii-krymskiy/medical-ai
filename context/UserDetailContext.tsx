import { UsersDetail } from "@/app/provider";
import { createContext } from "react";


type UsersDetailContextType = {
  userDetail?: UsersDetail;
  setUserDetail: React.Dispatch<React.SetStateAction<UsersDetail | undefined>>;
};

export const UsersDetailContext = createContext<UsersDetailContextType | null>(null);