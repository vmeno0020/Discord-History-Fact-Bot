module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=pqBEL-YfcZI');
    }
}