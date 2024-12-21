const insanlar = [
    {
        ad: "Oğuzhan",
        soyad: "Yılmaz",
        yas: 23
    },
    {
        ad: "Furkan",
        soyad: "Özay",
        yas: 25
    },
    {
        ad: "Ali",
        soyad: "Çelik",
        yas: 18
    }
]

function filtre() {
    return insanlar.filter(insanlar => insanlar.yas > 18)
}


const filtrelenen = filtre()

console.log(filtrelenen);
