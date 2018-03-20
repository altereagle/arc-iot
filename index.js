module.exports = ({incoming}) => {
  const { path } = incoming;

  const pathRelatedThings = {
    'enable-myo': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'enable-leap-motion': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'enable-arduino': () => {
      return `I don't do this yet, but I will soon!`;
    }
  };

  // Do path related things
  // ----------------------
  if(path != null && pathRelatedThings[path]) return pathRelatedThings[path]();

  return `Hey, I'll do all sorts of neat hardware things for you soon!`;
};