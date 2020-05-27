const calcByVoteRating = (votes, circumference) => {
  const [rating, maxRating] = votes.split('/');
  const calculatedProgress = ((maxRating - rating) * circumference) / maxRating;
  return calculatedProgress;
};

const calcByPercentage = (percentage, circumference) => {
  const [percentageValue] = percentage.split('%');
  const calculatedProgress = ((100 - percentageValue) * circumference) / 100;
  return calculatedProgress;
};

const calcRating = (value, source, circumference) => {
  let newProgress;
  if (source === 'Internet Movie Database') {
    newProgress = calcByVoteRating(value, circumference);
  } else if (source === 'Rotten Tomatoes') {
    newProgress = calcByPercentage(value, circumference);
  } else if (source === 'Metacritic') {
    newProgress = calcByVoteRating(value, circumference);
  }
  return newProgress;
};

export default calcRating;
