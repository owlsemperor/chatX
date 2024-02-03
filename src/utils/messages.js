const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getDate(),
  }
}

const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().getDate(),
  }
}
module.exports = { generateMessage, generateLocationMessage }
