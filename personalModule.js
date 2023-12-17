function greetingMessage(name){
    let currentDate = new Date();
    let currentTimeInHours = currentDate.getHours();
    let message = (currentTimeInHours < 5 && currentTimeInHours >= 23) ? 'Good night':
        (currentTimeInHours >= 5 && currentTimeInHours < 11) ? 'Good morning':
        (currentTimeInHours >= 11 && currentTimeInHours < 17) ? 'Good day': 'Good evening'
    return `${message}, ${name}`
};

module.exports = {greetingMessage};