import  {v4 as uuidv4} from 'uuid';


function trackStorage () {
    return[
        {
            name: "Peace",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            artist: "chromonicci",
            audio: "https://music.wixstatic.com/mp3/e7f4d3_4ce223112471435c86d2292ddb4a6e7c.mp3",
            color: ["#1D5753","#f79b79"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "",
            cover: "",
            artist: "",
            audio: "",
            color: ["",""],
            id: uuidv4(),
            active: false,
        },
        {
            name: "",
            cover: "",
            artist: "",
            audio: "",
            color: ["",""],
            id: uuidv4(),
            active: false,
        },
        {
            name: "",
            cover: "",
            artist: "",
            audio: "",
            color: ["",""],
            id: uuidv4(),
            active: false,
        },
        {
            name: "",
            cover: "",
            artist: "",
            audio: "",
            color: ["",""],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default trackStorage;