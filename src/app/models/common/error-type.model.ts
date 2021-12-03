export class ErrorType {
    errorMessage: string;
    redirectUrl: string;
    redirectName: string;

    constructor(
        errorMessage: string,
        redirectUrl: string,
        redirectName: string
    ) { 
        this.errorMessage = errorMessage;
        this.redirectUrl = redirectUrl;
        this.redirectName = redirectName;

    }
}
