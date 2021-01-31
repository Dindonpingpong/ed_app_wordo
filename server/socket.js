
const { setStatus } = require('../models/user');

module.exports = function (io) {
    const mySpace = io.of('/socks');
    let classics = new Map();

    mySpace.on('connection', (socket) => {

        socket.on('create_classico', (data) => {
            const { uuid, me, you } = data;

            classics.set(uuid, {
                users: [me, you],
                turn: me,
                words: ['start']
            });
            socket.join(uuid);
        })

        socket.on('game', (data) => {
            const { uuid, user } = data;

            if (!classics.has(uuid) || !classics.get(uuid).users.includes(user))
                return;

            socket.emit('started', classics.get(uuid));
        })

        socket.on('new_word', (data) => {
            const { uuid, user, word } = data;

            if (!classics.has(uuid) || !classics.get(uuid).users.includes(user))
                return;

            let tmp = classics.get(uuid);
            tmp.turn = user;
            tmp.words.push(word);
            classics.set(uuid, tmp);
            socket.emit('started', tmp);
        })

        socket.on('disconnect', () => {
            const nickname = getKeyByValue(users, socket.id);

            if (users && nickname)
                setStatus(["Offline", nickname])
                    .then()
                    .catch();
        })
    })

}