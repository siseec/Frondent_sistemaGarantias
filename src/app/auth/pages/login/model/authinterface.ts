export interface AuthResponse {
    ok       : boolean,
    usuario? : string,
    codigo   : number,
    mensaje  : string,
    token?   : string
}