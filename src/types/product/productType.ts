export interface Product {
    id: number
    slug: string
    nameBn: string
    category: string
    categoryNameBn: string
    categoryIcon: string
    unit: 'kg' | 'litre' | 'dozen' | 'piece';
    image: string
    today: number
    yesterday: number
    lastWeek: number
    lastMonth: number
    change: Change
    markets: Market[]
}

interface Change {
    dir: "flat" | "down" | "up";
    pct: number
}

interface Market {
    market: string
    division: string
    min: number
    max: number
}
