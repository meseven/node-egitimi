const user = { id: 10, name: 'mehmet' };
const friends = [ { id: 11, name: 'kenan' }, { id: 12, name: 'murat' } ];

const getUser = () => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve(user);
     }, 500);
  });
};

const getFriends = (userId) => {
  return new Promise((resolve, reject) => {
     setTimeout(() => {
        resolve(friends);
     }, 1000);
  });
};

// callback hell
let userId;
getUser().then(function (user) {
    userId = user.id;
    getFriends(userId).then(function (friends) {
        console.log(user);
        console.log(friends);
    })
});

// promise chain
getUser()
    .then((user) => {
        return getFriends(user.id);
    })
    .then((friends) => {
        console.log(friends);
    });

// async/await
async function asenkronAkis () {
    const user = await getUser();
    const friends = await getFriends(user.id);
    console.log(user, friends);
}

asenkronAkis();