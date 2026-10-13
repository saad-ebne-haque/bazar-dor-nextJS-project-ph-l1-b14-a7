export const convertToBanglaLocale = (number: number) => {
    return new Intl.NumberFormat('bn-BD').format(number);
};

export const convertUnitToBangla = (unit: string): string => {
    if (!unit) return '';


    const lowerUnit = unit.toLowerCase().trim();

    switch (lowerUnit) {
        case 'kg':
            return 'কেজি';
        case 'litre':
            return 'লিটার';
        case 'dozen':

            return 'ডজন';

        case 'piece':
            return 'পিস';
        default:
            return unit;
    }
};