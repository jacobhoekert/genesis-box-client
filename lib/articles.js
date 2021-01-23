import axios from 'axios'

export function articleTitleToUrl(articleTitle) {
  const array = articleTitle.toLowerCase().split(' ');
  const urlString = array.join('-');
  return normalizeAccentedString(urlString);
}

const articleUrlToTitle = (articleUrl) => {
  const array = articleUrl.split('-');
  return array.join(' ');
}

export async function getAllArticleUrls() {
  const result = await axios.get('https://genesis-box-client-b1tl6mk0t.vercel.app/api/blogs');
  const articles = result.data;

  let arr = [];
  for(let article of articles){
      arr.push({
          params: {
              id: articleTitleToUrl(article.article.title)
          }
      })
  }
  return arr
}

export async function getArticleData(id) {
  const result = await axios.get('https://genesis-box-client-b1tl6mk0t.vercel.app/api/blogs');
  for (const article of result.data) {
    if (normalizeAccentedString(article.article.title.toLowerCase()) == articleUrlToTitle(id)) {
      return article;
    }
  }
}

export function formatDate(dateFromArticle) {
  const date = new Date(dateFromArticle).toDateString();
  const dateArray = date.split(' ');
  const newDateArray = dateArray.slice(1, 4);
  newDateArray.splice(1, 1, newDateArray[1].concat('', ','));
  const newDate = newDateArray.join(' ');
  return newDate;
}

export function formatAmpsCorrectly(summaryFromArticle) {
  if ((summaryFromArticle===null) || (summaryFromArticle===''))
    return false;
  else {
    summaryFromArticle = summaryFromArticle.toString();
  }
  return summaryFromArticle.replace(/(amp;)/ig, '');
}

const normalizeAccentedString = (string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}