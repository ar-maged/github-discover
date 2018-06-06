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

const reduceRepo = repo => ({
  name: repo.name,
  fullName: repo.full_name,
  description: repo.description,
  language: repo.language,
  stargazersCount: repo.stargazers_count,
  url: repo.html_url,
});
