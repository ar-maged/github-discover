import axios from 'axios';

export const mostStarred = async () => {
  const response = await fetchMostStarredRepos();
  return response.data.items.map(reduceRepo);
};

const fetchMostStarredRepos = () => {
  const url = 'https://api.github.com/search/repositories';
  const params = {
    q: 'stars:>10000',
    sort: 'stars',
  };

  return axios(url, { params });
};

const reduceRepo = item => ({
  name: item.name,
  fullName: item.full_name,
  description: item.description,
  language: item.language,
  stargazersCount: item.stargazers_count,
  url: item.html_url,
});
