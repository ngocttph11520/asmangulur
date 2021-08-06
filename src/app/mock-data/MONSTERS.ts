import {Monster} from '../models/monster';
export const MONSTERES: Array<Monster> = [
    {
        id: 1,
        name: 'Thanos',
        image: 'https://static.comicvine.com/uploads/original/11129/111299848/6910437-0504786609-Thano.png',
        detail: 'Siêu ác nhân mạnh nhất marvel',
        spells: [
            {
                id: 1,
                name: "Five Stone"
            },
            {
                id: 2,
                name: "Giác đấu"
            }
        ]
    },
    {
        id: 2,
        name: 'Venom',
        image: 'https://www.teahub.io/photos/full/192-1929863_venom-wallpaper-hd-venom.jpg',
        detail: 'Sinh vật không gian',
        spells: [
            {
                id: 3,
                name: "Biến đổi hình dạng"
            },
            
        ]
    },
    {
        id: 3,
        name: 'Ultron',
        image: 'https://i.pinimg.com/originals/4e/60/5c/4e605c29cd9620b59d7eeacfe40c1fe2.jpg',
        detail: 'Trí thông minh nhân tạo',
        spells: [
            {
                id: 4,
                name: "Điều khiển máy móc"
            }
        ]
    }
]