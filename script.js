let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let purifyButton = document.querySelector("#purify")

let studentOne = {

}

let students = [
  {
  profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F72665225_433320377578233_480487577770524672_n.jpg?v=1585187395549",
  name: "Farid Oumouru",
  quote: "Everything disappointed is a blessing, MY FAULT!",
  superlative: "Most Ocky", 
  babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F64564639_2098315820278224_7429852500737392640_n.jpg?v=1585187381093",
},
  {
  profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F79736425_455798018468932_1530259644558082048_n.jpg?v=1585187399120",
  name: "Ronel Franco",
  quote: "White Girl Wednesday is MY EVERYDAY!",
  superlative: "Most likely to be a tiktok star",
  babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F50236650_2433732053535795_7304875171536437248_n.jpg?v=1585187347333",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91124842_240112297387228_2509135390565203968_n.jpg?v=1585187446290",
    name: "Mahel Napo",
    quote: "You thought you caught time but time has you in it's grasp.",
    superlative: "Biggest Tech Head",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F59345468_559915531198804_8548297886247419904_n.jpg?v=1585187371876",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91400511_1102384636788534_6877133245314498560_n.jpg?v=1585187461885",
    name: "Gabriela Diaz",
    quote: "What's your damage!",
    superlative: "Best Smile",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91692219_297860497868123_806518300396748800_n.jpg?v=1585542772498",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F90383059_2564907217115156_5025379579070513152_n.jpg?v=1585187404811",
    name: "Nancy Martinez",
    quote: "Have the courage to exist.",
    superlative: "Most likely to stalk a K-Pop star",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91352199_715808972558982_6501852613741379584_n.jpg?v=1585542775498",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F90908198_249742876188824_2073034757905580032_n.jpg?v=1585187414175",
    name: "Jeordy Abreu",
    quote: "POG Champ!",
    superlative: "Most likely to get to Challenger's",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F67820870_2260310720890995_4561636996455333888_n.jpg?v=1585187383213",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F90769649_153192672607198_6062610216799698944_n.jpg?v=1585187411265",
    name: "Anthony Bello",
    quote: "I'm naked in animal crossing!",
    superlative: "Most likely to lag out of a call",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91252020_640350480089712_3755225305736806400_n.jpg?v=1585542779488",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91201497_169748620690423_4749464824071585792_n.jpg?v=1585191166199",
    name: "Thierno Diallo",
    quote: "A small step is still a step.",
    superlative: "Most likely to surprise the world.",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91117547_1421896931312349_460733502757797888_n.jpg?v=1585187435071",
  },
  {
    profileImage: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91064503_855935104908428_8756735234692612096_n.jpg?v=1585187431693",
    name: "Brandon Rivera",
    quote: "Top?",
    superlative: "Most likely to be the number one meme page.",
    babyPic: "https://cdn.glitch.com/ed4cec1e-1cfd-4895-8c28-3a1fffbc87ef%2F91026703_1048352895536357_5674552602981826560_n.jpg?v=1585542977947",
  }
  ]

let count = 0

  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = `Name: ${students[count].name}`
  document.querySelector("#quote").innerHTML = `Quote: ${students[count].quote}`
  document.querySelector("#superlative").innerHTML = `Superlative: ${students[count].superlative}`
  document.querySelector("#pic").src = students[count].babyPic
nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  if (count == 9){
    count = 0
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = `Name: ${students[count].name}`
  document.querySelector("#quote").innerHTML = `Quote: ${students[count].quote}`
  document.querySelector("#superlative").innerHTML = `Superlative: ${students[count].superlative}`
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  if (count == -1){
    count = 9
  }
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = `Name: ${students[count].name}`
  document.querySelector("#quote").innerHTML = `Quote: ${students[count].quote}`
  document.querySelector("#superlative").innerHTML = `Superlative: ${students[count].superlative}`
})

purifyButton.addEventListener("click",()=>{
  console.log('back')
  console.log(count)
  document.querySelector("#pic").src = students[count].babyPic
})