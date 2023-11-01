import { Appointment, IssueCategory, ObjectID } from './Models/Appointment'
import { HashMap } from './Utilities'
import { generateId } from './Service'

export type AppointmentTime = {
    date: Date
    duration: number
}

export const availableDates: AppointmentTime[] = [
    {
        date: new Date(2023, 10, 2, 11, 0, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 2, 13, 0, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 2, 15, 0, 0),
        duration: 3600000
    },
    {
        date: new Date(2023, 10, 3, 11, 0, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 3, 12, 0, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 3, 19, 0, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 3, 21, 0, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 4, 13, 0, 0),
        duration: 2700000
    },
    {
        date: new Date(2023, 10, 4, 20, 30, 0),
        duration: 1800000
    },
    {
        date: new Date(2023, 10, 5, 15, 30, 0),
        duration: 1800000
    },
]

export type RawIssue = {
    id: ObjectID
    code: number
    title: string
    price: number | null
    category: IssueCategory
}

export const issueCategories: IssueCategory[] = [
    {
        name: 'מערכת הילוכים',
        id: 'mh'
    },
    {
        name: 'מערכות שליטה',
        id: 'ms'
    },
    {
        name: 'מערכת בלמים מכאני / הידראולי',
        id: 'mbmh'
    },
    {
        name: 'גלגלים',
        id: 'g'
    },
    {
        name: 'ניקיון ושימון',
        id: 'nv'
    },
    {
        name: 'שונות',
        id: 's'
    },
    {
        name: 'ציר מרכזי',
        id: 'tm'
    },
    {
        name: 'טיובלס',
        id: 't'
    },
    {
        name: 'מתלים ובניית אופנים',
        id: 'mvh'
    },
    {
        name: 'טיפולים כלליים',
        id: 'tk'
    }
]

export const rawIssues: RawIssue[] = [
    {
        id: generateId(),
        code: 10127,
        title: 'כיוון הילוכים',
        price: 35,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10128,
        title: 'יישור אוזן',
        price: 50,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10129,
        title: 'החלפת כבל הילוכים - MADONE',
        price: 80,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10130,
        title: 'החלפת כבל בלם / הילוכים כולל כבל',
        price: 70,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10131,
        title: 'החלפת כבל הילוכים\\מעצור  טנדם',
        price: 75,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10132,
        title: 'החלפת מעביר אחורי',
        price: 65,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10133,
        title: 'החלפת מעביר קדמי',
        price: 70,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10146,
        title: 'הרכבת קראנק',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10147,
        title: 'החלפת  / תיקון שרשרת',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10148,
        title: 'החלפת קסטה',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10164,
        title: 'החלפת גלגל שיניים קראנק',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10166,
        title: "טיפול קלאץ' מעביר אחורי",
        price: 70,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: generateId(),
        code: 10139,
        title: 'טיפול הד-סט',
        price: 80,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: generateId(),
        code: 10140,
        title: 'טיפול פדלים',
        price: 85,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: generateId(),
        code: 10141,
        title: 'טיפול מוט אוכף טלסקופי',
        price: 90,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: generateId(),
        code: 10150,
        title: 'התקנת כידון',
        price: 100,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: generateId(),
        code: 10151,
        title: 'התקנת עמוד כידון (סטם)',
        price: 50,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: generateId(),
        code: 10122,
        title: 'כיוון בלמים',
        price: 45,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10123,
        title: 'נקוז אוויר ללא שמן (צד אחד)',
        price: 70,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10124,
        title: 'בלידינג לברקס הידראולי (צד אחד)',
        price: 110,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10126,
        title: 'החלפת רפידות צד אחד',
        price: 40,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10145,
        title: 'החלפת קליפר+בלידינג',
        price: 150,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10153,
        title: 'הרכבת סט מעצור דיסק הידראולי כולל בלידינג',
        price: 130,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10154,
        title: 'החלפת רוטור',
        price: 50,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10155,
        title: 'יישור רוטור',
        price: 50,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: generateId(),
        code: 10111,
        title: 'איזון גלגל',
        price: 50,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10112,
        title: 'החלפת שפיץ+איזון גלגל ללא שפיץ',
        price: 65,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10116,
        title: 'החלפת פנימית לאופנים חשמליים',
        price: 150,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10117,
        title: 'החלפת פנימית',
        price: 25,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10118,
        title: 'החלפת צמיג כביש טיובלס',
        price: 35,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10119,
        title: 'החלפת צמיג כביש\\שטח',
        price: 30,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10161,
        title: 'החלפת מיסבים בנבה קדמית',
        price: 40,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10162,
        title: 'החלפת מיסבים בנבה אחורית',
        price: 70,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10163,
        title: 'התקנת סרט חישוק בגלגל',
        price: 50,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10165,
        title: 'החלפת לב נבה בגלגל',
        price: 30,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: generateId(),
        code: 10107,
        title: 'שטיפה וניקוי דרג א\' ללא פירוק חלקים',
        price: 80,
        category: {
            name: 'ניקיון ושימון',
            id: 'nv'
        }
    },
    {
        id: generateId(),
        code: 10108,
        title: 'שטיפת וניקוי אופניים דרג ב - כולל פירוק הד סט וציר מרכזי',
        price: 175,
        category: {
            name: 'ניקיון ושימון',
            id: 'nv'
        }
    },
    {
        id: generateId(),
        code: 10156,
        title: 'ניקוי מערכת הניע',
        price: 50,
        category: {
            name: 'ניקיון ושימון',
            id: 'nv'
        }
    },
    {
        id: generateId(),
        code: 10135,
        title: 'הרכבת קליטים',
        price: 25,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: generateId(),
        code: 10136,
        title: 'הרכבת אוכף',
        price: 45,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: generateId(),
        code: 10138,
        title: 'התקנת סרט כידון - אופני כביש',
        price: 70,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: generateId(),
        code: 10149,
        title: 'התקנת ידיות כידון- אופני הרים',
        price: 30,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: generateId(),
        code: 10167,
        title: 'הרכבת פדלים',
        price: 35,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: generateId(),
        code: 10168,
        title: 'טיפול צירי פדלים- ניקוי וגירוז',
        price: 50,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: generateId(),
        code: 10134,
        title: 'החלפת ציר מרכזי',
        price: 90,
        category: {
            name: 'ציר מרכזי',
            id: 'tm'
        }
    },
    {
        id: generateId(),
        code: 10152,
        title: 'גירוז חיזוק ובדיקת ציר מרכזי',
        price: 60,
        category: {
            name: 'ציר מרכזי',
            id: 'tm'
        }
    },
    {
        id: generateId(),
        code: 10120,
        title: 'טיובלס ביתי עבודה בלבד ללא חומרים',
        price: 60,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: generateId(),
        code: 10115,
        title: 'הדבקת טובולר כולל דבק',
        price: 100,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: generateId(),
        code: 10143,
        title: "הוספת חומר ג'יפה בגלגל SLIME",
        price: 40,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: generateId(),
        code: 10144,
        title: 'הוספת חומר טיובלס בונטרגר',
        price: 40,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: generateId(),
        code: 10102,
        title: 'אופניים כללי  - הרכבה / החלפת שלדה / הצלבת חלקים',
        price: 300,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10103,
        title: 'אופני כביש AERO- הרכבה / החלפת שלדה / הצלבת חלקים',
        price: 425,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10104,
        title: 'אופני נג"ש - הרכבה / החלפת שלדה / הצלבת חלקים',
        price: 500,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10109,
        title: 'השתלת תותב למחזיק בקבוק',
        price: 95,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10110,
        title: 'הדבקת ציר מרכזי כולל אפוקסי',
        price: 105,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10142,
        title: 'משלוח בולם קדמי / אחורי אצל היבואן',
        price: 80,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10157,
        title: 'החלפת מיסבי שלדה',
        price: 300,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10169,
        title: 'טיפול ISO SPEED',
        price: 30,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10170,
        title: 'טיפול ISO SPEED, כולל החלפת מיסבים',
        price: 50,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10171,
        title: 'טיפול ISO STRUT, כולל החלפת אטמים וספוגים',
        price: 50,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: generateId(),
        code: 10105,
        title: 'בדיקת אופניים כללית + חיזוקים',
        price: 70,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },{
        id: generateId(),
        code: 10106,
        title: 'בדיקת אופנים יד 2 לפני קניה',
        price: 65,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: generateId(),
        code: 10137,
        title: 'הרכבת מחשבון (שלא נקנה בחנות)',
        price: 45,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: generateId(),
        code: 10158,
        title: 'אריזת אופנים בקרטון +קרטון',
        price: 100,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: generateId(),
        code: 10159,
        title: 'תיקון פנס EXPOSURE- כולל משלוח לאנגליה',
        price: null,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: generateId(),
        code: 10160,
        title: 'בדיקת אופניים לאחר קניה',
        price: 50,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    }
]

export const appointments: HashMap<Appointment> = {
    /*'fk3k24rhj3': {
        id: generateId(),
        issue: {
            id: generateId(),
            code: 124124,
            title: 'Fix this lol',
            price: 119.90,
            category: {
                id: generateId(),
                name: '',
            },
            duration: 3600000
        },
        date: new Date(),
        description: 'this is a description\nit\'s multiline too lol',
        customer: generateId(),
        mechanic: 'kd',
        product: 'fk3k24rhj3'
    },
    '2ff23rt': {
        id: generateId(),
        issue: {
            id: generateId(),
            code: 1289421,
            title: 'Yet another title',
            price: 69.90,
            category: {
                id: generateId(),
                name: ''
            },
            duration: 2700000
        },
        date: new Date(),
        description: 'Hello hello hi hi hi',
        customer: generateId(),
        mechanic: 'lbj',
        product: '2ff23rt'
    },
    '3unfum2': {
        id: generateId(),
        issue: {
            id: generateId(),
            code: 99124124,
            title: 'When the imposter is sus',
            price: 89.90,
            category: {
                id: generateId(),
                name: ''
            },
            duration: 1800000
        },
        date: new Date(),
        description: 'hahahaah im goin insane',
        customer: generateId(),
        mechanic: 'jt',
        product: '3unfum2'
    }*/
}