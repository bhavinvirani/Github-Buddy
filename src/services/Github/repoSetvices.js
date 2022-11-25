import axios from 'axios';

export const fetchRepos = async (
  selectedLanguage,
  stars,
  searchText,
  selectedLabel
) => {
  try {
    const apiUrl = 'https://api.github.com/search/repositories';

    let searchUrl = `${apiUrl}?q=${searchText.replace(/ /g, '+')}+in:readme`;

    if (selectedLanguage) {
      searchUrl += `+language:${selectedLanguage.toLowerCase()}`;
    }

    if (selectedLabel) {
      searchUrl += `+${selectedLabel}:>0`;
    }

    searchUrl += `+stars:0..${stars}&sort=stars&order=desc&per_page=100`;

    console.log('URL => ', searchUrl);

    const { data } = await  axios.get(searchUrl);
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const saveUserPreference = (stars, language, selectedLabel) => {
  localStorage.setItem(
    'user-pref',
    JSON.stringify({ stars, language, selectedLabel })
  );
};

export const getUserPreference = () =>
  JSON.parse(localStorage.getItem('user-pref'));
