export interface INavLinks {
   name: string;
   href: string;
}

export interface IFaq {
   question: string;
   answer: string;
}

export enum EQueryPurpose {
   BUY = 'Buy',
   SELL = 'Sell'
}

export interface IQueryDto {
   name: string;
   email: string;
   phoneNumber: string;
   quantity: number;
   message: string;
   purposeOfQuery: EQueryPurpose;
}

export type TimeFrame = 'daily' | 'weekly' | 'monthly';
