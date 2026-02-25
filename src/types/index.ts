export type Image = {
    src: string
    alt: string
}

export type Review = {
    content: string
    name: string
}

export type NavLink = {
    label: string;
    href: string;
}

export type NavItem = {
    label: string;

} & ({
    isLink: true;
    href: string;
} | {
    isLink: false;
    menu: NavLink[];
    href?: string;
})

export type Question = {
    value: string
    question: string
    answer: string
}

export type Offer = {
    title: string
    link: string
    list: string[]
}