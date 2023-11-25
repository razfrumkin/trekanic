import { Appointment, IssueCategory, ObjectID } from './Models/Appointment'
import { HashMap } from './Utilities'

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
        id: 'random1',
        code: 10127,
        title: 'כיוון הילוכים',
        price: 35,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random2',
        code: 10128,
        title: 'יישור אוזן',
        price: 50,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random3',
        code: 10129,
        title: 'החלפת כבל הילוכים - MADONE',
        price: 80,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random4',
        code: 10130,
        title: 'החלפת כבל בלם / הילוכים כולל כבל',
        price: 70,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random5',
        code: 10131,
        title: 'החלפת כבל הילוכים\\מעצור  טנדם',
        price: 75,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random6',
        code: 10132,
        title: 'החלפת מעביר אחורי',
        price: 65,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random7',
        code: 10133,
        title: 'החלפת מעביר קדמי',
        price: 70,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random8',
        code: 10146,
        title: 'הרכבת קראנק',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random9',
        code: 10147,
        title: 'החלפת  / תיקון שרשרת',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random10',
        code: 10148,
        title: 'החלפת קסטה',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random11',
        code: 10164,
        title: 'החלפת גלגל שיניים קראנק',
        price: 60,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random12',
        code: 10166,
        title: "טיפול קלאץ' מעביר אחורי",
        price: 70,
        category: {
            name: 'מערכת הילוכים',
            id: 'mh'
        }
    },
    {
        id: 'random13',
        code: 10139,
        title: 'טיפול הד-סט',
        price: 80,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: 'random14',
        code: 10140,
        title: 'טיפול פדלים',
        price: 85,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: 'random15',
        code: 10141,
        title: 'טיפול מוט אוכף טלסקופי',
        price: 90,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: 'random16',
        code: 10150,
        title: 'התקנת כידון',
        price: 100,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: 'random17',
        code: 10151,
        title: 'התקנת עמוד כידון (סטם)',
        price: 50,
        category: {
            name: 'מערכות שליטה',
            id: 'ms'
        }
    },
    {
        id: 'random18',
        code: 10122,
        title: 'כיוון בלמים',
        price: 45,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random19',
        code: 10123,
        title: 'נקוז אוויר ללא שמן (צד אחד)',
        price: 70,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random20',
        code: 10124,
        title: 'בלידינג לברקס הידראולי (צד אחד)',
        price: 110,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random21',
        code: 10126,
        title: 'החלפת רפידות צד אחד',
        price: 40,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random22',
        code: 10145,
        title: 'החלפת קליפר+בלידינג',
        price: 150,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random23',
        code: 10153,
        title: 'הרכבת סט מעצור דיסק הידראולי כולל בלידינג',
        price: 130,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random24',
        code: 10154,
        title: 'החלפת רוטור',
        price: 50,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random25',
        code: 10155,
        title: 'יישור רוטור',
        price: 50,
        category: {
            name: 'מערכת בלמים מכאני / הידראולי',
            id: 'mbmh'
        }
    },
    {
        id: 'random26',
        code: 10111,
        title: 'איזון גלגל',
        price: 50,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random27',
        code: 10112,
        title: 'החלפת שפיץ+איזון גלגל ללא שפיץ',
        price: 65,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random28',
        code: 10116,
        title: 'החלפת פנימית לאופנים חשמליים',
        price: 150,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random29',
        code: 10117,
        title: 'החלפת פנימית',
        price: 25,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random30',
        code: 10118,
        title: 'החלפת צמיג כביש טיובלס',
        price: 35,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random31',
        code: 10119,
        title: 'החלפת צמיג כביש\\שטח',
        price: 30,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random32',
        code: 10161,
        title: 'החלפת מיסבים בנבה קדמית',
        price: 40,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random33',
        code: 10162,
        title: 'החלפת מיסבים בנבה אחורית',
        price: 70,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random34',
        code: 10163,
        title: 'התקנת סרט חישוק בגלגל',
        price: 50,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random35',
        code: 10165,
        title: 'החלפת לב נבה בגלגל',
        price: 30,
        category: {
            name: 'גלגלים',
            id: 'g'
        }
    },
    {
        id: 'random36',
        code: 10107,
        title: 'שטיפה וניקוי דרג א\' ללא פירוק חלקים',
        price: 80,
        category: {
            name: 'ניקיון ושימון',
            id: 'nv'
        }
    },
    {
        id: 'random37',
        code: 10108,
        title: 'שטיפת וניקוי אופניים דרג ב - כולל פירוק הד סט וציר מרכזי',
        price: 175,
        category: {
            name: 'ניקיון ושימון',
            id: 'nv'
        }
    },
    {
        id: 'random38',
        code: 10156,
        title: 'ניקוי מערכת הניע',
        price: 50,
        category: {
            name: 'ניקיון ושימון',
            id: 'nv'
        }
    },
    {
        id: 'random39',
        code: 10135,
        title: 'הרכבת קליטים',
        price: 25,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: 'random40',
        code: 10136,
        title: 'הרכבת אוכף',
        price: 45,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: 'random41',
        code: 10138,
        title: 'התקנת סרט כידון - אופני כביש',
        price: 70,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: 'random42',
        code: 10149,
        title: 'התקנת ידיות כידון- אופני הרים',
        price: 30,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: 'random43',
        code: 10167,
        title: 'הרכבת פדלים',
        price: 35,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: 'random44',
        code: 10168,
        title: 'טיפול צירי פדלים- ניקוי וגירוז',
        price: 50,
        category: {
            name: 'שונות',
            id: 's'
        }
    },
    {
        id: 'random45',
        code: 10134,
        title: 'החלפת ציר מרכזי',
        price: 90,
        category: {
            name: 'ציר מרכזי',
            id: 'tm'
        }
    },
    {
        id: 'random46',
        code: 10152,
        title: 'גירוז חיזוק ובדיקת ציר מרכזי',
        price: 60,
        category: {
            name: 'ציר מרכזי',
            id: 'tm'
        }
    },
    {
        id: 'random47',
        code: 10120,
        title: 'טיובלס ביתי עבודה בלבד ללא חומרים',
        price: 60,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: 'random48',
        code: 10115,
        title: 'הדבקת טובולר כולל דבק',
        price: 100,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: 'random49',
        code: 10143,
        title: "הוספת חומר ג'יפה בגלגל SLIME",
        price: 40,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: 'random50',
        code: 10144,
        title: 'הוספת חומר טיובלס בונטרגר',
        price: 40,
        category: {
            name: 'טיובלס',
            id: 't'
        }
    },
    {
        id: 'random51',
        code: 10102,
        title: 'אופניים כללי  - הרכבה / החלפת שלדה / הצלבת חלקים',
        price: 300,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random52',
        code: 10103,
        title: 'אופני כביש AERO- הרכבה / החלפת שלדה / הצלבת חלקים',
        price: 425,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random53',
        code: 10104,
        title: 'אופני נג"ש - הרכבה / החלפת שלדה / הצלבת חלקים',
        price: 500,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random54',
        code: 10109,
        title: 'השתלת תותב למחזיק בקבוק',
        price: 95,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random55',
        code: 10110,
        title: 'הדבקת ציר מרכזי כולל אפוקסי',
        price: 105,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random56',
        code: 10142,
        title: 'משלוח בולם קדמי / אחורי אצל היבואן',
        price: 80,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random57',
        code: 10157,
        title: 'החלפת מיסבי שלדה',
        price: 300,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random58',
        code: 10169,
        title: 'טיפול ISO SPEED',
        price: 30,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random59',
        code: 10170,
        title: 'טיפול ISO SPEED, כולל החלפת מיסבים',
        price: 50,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random60',
        code: 10171,
        title: 'טיפול ISO STRUT, כולל החלפת אטמים וספוגים',
        price: 50,
        category: {
            name: 'מתלים ובניית אופנים',
            id: 'mvh'
        }
    },
    {
        id: 'random61',
        code: 10105,
        title: 'בדיקת אופניים כללית + חיזוקים',
        price: 70,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },{
        id: 'random62',
        code: 10106,
        title: 'בדיקת אופנים יד 2 לפני קניה',
        price: 65,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: 'random63',
        code: 10137,
        title: 'הרכבת מחשבון (שלא נקנה בחנות)',
        price: 45,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: 'random64',
        code: 10158,
        title: 'אריזת אופנים בקרטון +קרטון',
        price: 100,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: 'random65',
        code: 10159,
        title: 'תיקון פנס EXPOSURE- כולל משלוח לאנגליה',
        price: null,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    },
    {
        id: 'random66',
        code: 10160,
        title: 'בדיקת אופניים לאחר קניה',
        price: 50,
        category: {
            name: 'טיפולים כלליים',
            id: 'tk'
        }
    }
]

//export const appointments: HashMap<Appointment> = {}
export const appointments: HashMap<Appointment> = {
        "5VrprdKtgAwWclbw": {
            "id": "5VrprdKtgAwWclbw",
            "issue": {
                "id": "random30",
                "code": 10118,
                "title": "החלפת צמיג כביש טיובלס",
                "price": 35,
                "category": {
                    "name": "גלגלים",
                    "id": "g"
                },
                "duration": 2700000
            },
            "date": new Date("2023-11-04T11:00:00.000Z"),
            "description": "this is a description",
            "customer": "ZDlzsVjavYnFiiYo",
            "mechanic": "",
            "product": "product lol"
        },
        "ronjoVvTgypMlxI5": {
            "id": "ronjoVvTgypMlxI5",
            "issue": {
                "id": "random17",
                "code": 10151,
                "title": "התקנת עמוד כידון (סטם)",
                "price": 50,
                "category": {
                    "name": "מערכות שליטה",
                    "id": "ms"
                },
                "duration": 1800000
            },
            "date": new Date("2023-11-05T13:30:00.000Z"),
            "description": "imma loogah",
            "customer": "U0pcId6GwQ1C3eQ6",
            "mechanic": "",
            "product": "product lol"
        },
        "0xXcStJ84eNCjkEH": {
            "id": "0xXcStJ84eNCjkEH",
            "issue": {
                "id": "random23",
                "code": 10153,
                "title": "הרכבת סט מעצור דיסק הידראולי כולל בלידינג",
                "price": 130,
                "category": {
                    "name": "מערכת בלמים מכאני / הידראולי",
                    "id": "mbmh"
                },
                "duration": 1800000
            },
            "date": new Date("2023-11-04T18:30:00.000Z"),
            "description": "this is also a new appointment",
            "customer": "JOM0fMedbSvyrCen",
            "mechanic": "",
            "product": "product lol"
        },
        "5MWski6xqltw4w1w": {
            "id": "5MWski6xqltw4w1w",
            "issue": {
                "id": "random61",
                "code": 10105,
                "title": "בדיקת אופניים כללית + חיזוקים",
                "price": 70,
                "category": {
                    "name": "טיפולים כלליים",
                    "id": "tk"
                },
                "duration": 1800000
            },
            "date": new Date("2023-11-03T09:00:00.000Z"),
            "description": "yarn dev",
            "customer": "B8TTHbFJVEuTvuGC",
            "mechanic": "",
            "product": "product lol"
        },
        "fk31mpQkNsxEpklF": {
            "id": "fk31mpQkNsxEpklF",
            "issue": {
                "id": "random38",
                "code": 10156,
                "title": "ניקוי מערכת הניע",
                "price": 50,
                "category": {
                    "name": "ניקיון ושימון",
                    "id": "nv"
                },
                "duration": 1800000
            },
            "date": new Date("2023-11-03T19:00:00.000Z"),
            "description": "Description here...",
            "customer": "dNB6Lnp9J43VHgyD",
            "mechanic": "",
            "product": "product lol"
        },
        "1650ZeP5uJmCMEtA": {
            "id": "1650ZeP5uJmCMEtA",
            "issue": {
                "id": "random45",
                "code": 10134,
                "title": "החלפת ציר מרכזי",
                "price": 90,
                "category": {
                    "name": "ציר מרכזי",
                    "id": "tm"
                },
                "duration": 3600000
            },
            "date": new Date("2023-11-02T13:00:00.000Z"),
            "description": "localhost:5173",
            "customer": "EV9IR2279cVnjqaC",
            "mechanic": "",
            "product": "product lol"
        }
}