import {Hero} from '../models/hero';
export const HEROES: Array<Hero> = [
    {
        id: 1,
        name: 'Iron Man',
        image: 'https://www.enjpg.com/img/2020/iron-man-8-scaled.jpg',
        skills: [
            {
                id: 1,
                name: "Năng lượng uni-beam"
            },
            {
                id: 2,
                name: "Bay"
            }
        ]
    },
    {
        id: 2,
        name: 'Spider Man',
        image: 'https://images8.alphacoders.com/105/1052327.jpg',
        skills: [
            {
                id: 3,
                name: "Bắn tơ"
            },
            {
                id: 4,
                name: "Nhanh nhẹn"
            }
        ]
    },
    {
        id: 3,
        name: 'Captain America',
        image: 'https://wallpaperaccess.com/full/1307302.jpg',
        skills: [
            {
                id: 5,
                name: "Khiên titanium"
            },
            {
                id: 6,
                name: "Sức mạnh thể chất"
            }
        ]
    }
]