export interface IAuthProvider {
    signJwt(path: string, bodyJson?: any): string;

    getApiKey(): string;
}

export interface IAsyncAuthProvider {
    async signJwt(path: string, bodyJson?: any): Promise<string>;

    getApiKey(): string;
}
