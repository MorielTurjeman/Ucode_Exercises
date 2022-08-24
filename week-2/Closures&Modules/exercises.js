// Spot Check 1
// const family=function{
//     const members=[],
//     const birth= function(name){
//         member.push(name)
//         console.log(members)

//     }
//     return birth
// }

// const giveBirth =family()
// giveBirth("Yossi")
// giveBirth("Haim")



//Modules

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }


// return {
//     add: add,
//     sub: subtract,
//     mult: multiply,
//     div: divide
// }
// }



// const m= mathOperations();
// console.log(m.add(2,3))


// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()
// usersModule.addUser('Haim')
// usersModule.addUser('Nurit')
// usersModule.listUsers()


// Exercise 1


const StringFormatter = function () {

    const capitalizeFirst = function (str) {
        console.log(str)
        return str.charAt(0).toUpperCase() + str.slice(1);

    }

    const skewerCase = function (str) {
        console.log(str)
        return str.replace(/-/g, ' ');
    }


    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box



// Exercise 2

const Bank = function() {
    let money = 500;

    const depositCash = function (cash) {
        return Bank.money += cash
    }

    const checkBalance = function () {
        return Bank.money
    }

    return {
        depositCash: depositCash,
        checkBalance: checkBalance
    }

}


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950



// Exercise 3



const SongsManager = function(){

    const songs = {}
    baseUrl="https://www.youtube.com/watch?v="
    const _splitIdentifier= url =>url.split("").splice(32).join("")
    const _getUrl=identifier =>baseUrl+identifier


    const addSong= function(name, url){
        return baseUrl+identifier
    
    
    
    const getSong= name =>console.log(_getUrl(songs[name]))
    
    return{
        addSong:addSong,
        getSong:getSong
    }

}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ