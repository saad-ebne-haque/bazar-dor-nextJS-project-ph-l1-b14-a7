import { convertToBanglaLocale } from "./banglaConvertFunction";

export function banglaToday() {
    const engDate = new Date();

    const [day, month, date, year] = engDate.toDateString().split(' ');

    function convertBangaDate() {
        switch (day.toLowerCase()) {
            case 'sat':
                return 'শনিবার';
            case 'sun':
                return 'রবিবার';
            case 'mon':
                return 'সোমবার';
            case 'tue':
                return 'মঙ্গলবার';
            case 'wed':
                return 'বুধবার';
            case 'thu':
                return 'বৃহস্পতিবার';
            case 'fri':
                return 'শুক্রবার';
            default:
                return day;
        }
    }
    function convertBangaMonth() {
        switch (month.toLowerCase()) {
            case 'jan':
                return 'জানুয়ারী';
            case 'feb':
                return 'ফেব্রুয়ারী';
            case 'mar':
                return 'মার্চ';
            case 'apr':
                return 'এপ্রিল';
            case 'may':
                return 'মে';
            case 'jun':
                return 'জুন';
            case 'jul':
                return 'জুলাই';
            case 'aug':
                return 'আগস্ট';
            case 'sep':
                return 'সেপ্টেম্বর';
            case 'oct':
                return 'অক্টোবর';
            case 'nov':
                return 'নভেম্বর';
            case 'dec':
                return 'ডিসেম্বর';
            default:
                return month;
        }
    }
    const banglaDate = convertBangaDate();
    const banglaMonth = convertBangaMonth()
    return `${banglaDate}, ${convertToBanglaLocale(Number(date))} ${banglaMonth}, ${String(convertToBanglaLocale(Number(year))).split(',').join('')}`;
}