import axios from 'axios'

export async function getAllArticlesFromShopify() {
  const ShopifyAdminApi = axios.create({
    baseURL: `https://${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`
  });
  let allArticles = [];
  const result = await ShopifyAdminApi.get(`/blogs/${process.env.NEXT_PUBLIC_THE_GARDEN_BLOG_ID}/articles.json`);
  const articles = result.data.articles;
  let articlesWithTheirComments = [];
  for (const article of articles) {
    const result = await ShopifyAdminApi.get(`/comments.json?article_id=${article.id}&blog_id=${process.env.NEXT_PUBLIC_THE_GARDEN_BLOG_ID}`);
    const comments = result.data.comments;
    let articleAndComments = { article, comments }
    articlesWithTheirComments.push(articleAndComments)
  }
  allArticles = articlesWithTheirComments;
  return allArticles;
}

export async function getAllArticleUrls() {
  const articles = await getAllArticlesFromShopify();

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
  const articles = await getAllArticlesFromShopify();

  for (const article of articles) {
    if (normalizeAccentedString(article.article.title.toLowerCase()) == articleUrlToTitle(id)) {
      return article;
    }
  }
}

export function articleTitleToUrl(articleTitle) {
  const array = articleTitle.toLowerCase().split(' ');
  const urlString = array.join('-');
  return normalizeAccentedString(urlString);
}

const articleUrlToTitle = (articleUrl) => {
  const array = articleUrl.split('-');
  return array.join(' ');
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