export interface IUserInfoDto {
    login: string;
    token: string;
}

export const EmptyUserInfoDto = (): IUserInfoDto => {
    return {
        login: '',
        token: ''
    }
}
