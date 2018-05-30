import axios from 'axios';

export const mostStarredOfAllTime = async () => {
  const response = await axios('https://api.github.com/search/repositories', {
    params: {
      q: 'stars:>10000',
      sort: 'stars',
    },
  });

  return response.data.items.map(reduceRepository);
};

const reduceRepository = item => ({
  name: item.name,
  fullName: item.full_name,
  description: item.description,
  language: item.language,
  stargazersCount: item.stargazers_count,
  url: item.html_url,
});
