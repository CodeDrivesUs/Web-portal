import {IConfigDto} from "../../shared/dto/config/IConfigDto";
import {IApplicationDto} from "../../shared/dto/application/IApplicationDto";

export interface IApplicationState {
    application: IApplicationDto;
}

export const initialApplicationState: IApplicationState = {
    application: {} as IApplicationDto
};
