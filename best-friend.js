// friends in array search the my best friends 
// ==============================================
// input
const friends = ["tanvir","alam","shine khan", "Md. Tanvir Alam"];
function bestFriend(friends) {
    let mybestFriend = '';
    for(const friend of friends ){
        if(mybestFriend.length < friend.length){
            mybestFriend = friend;
        }
    }
    return mybestFriend;
}
// calling function 
const output = bestFriend(friends);
console.log("My Best Friend: ",output);