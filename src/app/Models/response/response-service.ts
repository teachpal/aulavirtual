export class ResponseService {
  data: any;
  errorMessage: string;
  errorId: number;
  token: string;

  constructor(){
    this.data = null;
    this.errorMessage = '';
    this.errorId = 0;
    this.token = '';
  }
}
