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

export interface ISection {
   id: string;
   sectionName: string;
   data: Record<string, any>[];
   createdAt: string;
   updatedAt: string;
   deletedAt: string;
}

export interface ISharePrice {
   type: string;
   lables: string;
   price: string;
}

export interface IChartData {
   labels: string[];
   data: number[];
}
