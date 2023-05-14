import { HttpErrorResponse } from "@angular/common/http";
import { User } from "src/app/interface/user.models";

export interface ILoginRegisterState{
  email: string;
  password: string;
  loading: boolean;
  user: User | null;
  fatalError: HttpErrorResponse | null;
}

