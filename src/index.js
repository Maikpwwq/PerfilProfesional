const facebook = {
    color: "#3b5998"
  };
  const twitter = {
    color: "#38A1F3"
  }
  const linkedin = {
    color: "#0e76a8"
  }
  const github = {
    color: "#333"
  }
  
  const getColor = (name) => {
    if (name === 'facebook') return facebook;
    if (name === 'twitter') return twitter;
    if (name === 'linkedin') return linkedin;
    if (name === 'github') return github;
  }
const move = keyframes {
0% { background-position: 0 0; }
100% { background-position: 50px 50px; }
}
const spin = keyframes {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}