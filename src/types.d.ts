export interface IQuote {
    id: string;
    author: string;
    text: string;
    category: string;
}

export interface IQuoteForm {
  author: string;
  text: string;
  category: string;
}

export interface IQuoteAPI {
    [id: string]: IQuoteForm;
}

