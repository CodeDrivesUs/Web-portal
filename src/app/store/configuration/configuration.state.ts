import {IConfigDto} from "../../shared/dto/config/IConfigDto";

export interface IConfigurationState {
    configuration: IConfigDto;
    loading: boolean
    isSuccess: boolean
}

export const initialConfigurationState: IConfigurationState = {
    configuration: {} as IConfigDto,
    loading: false,
    isSuccess: false
};
