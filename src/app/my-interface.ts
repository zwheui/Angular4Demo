export interface INavItem {
    link: ILink;
    title?: string;
    hideTitle?: boolean;
    isShow?: boolean;
    childItemList?: INavItem[];
}

export interface ILink {
    name: string;
    href?: string;
    routerLink?: string;
    queryParams?: Object;
}
