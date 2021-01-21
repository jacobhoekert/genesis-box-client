import { formatDate } from '../../../lib/articles'

export const BlogArticle = ({articleData}) => {
  const formattedDate = formatDate(articleData.article.published_at);
  const cleanHtmlBody = articleData.article.body_html.replace(/(<[p|br\/]>\s<\/p>)/ig, '<p><\/p>');
  return (
    <div className="article">
      <div className="article-title-container">
        <h4 className="article-title">{articleData.article.title}</h4>
        <div className="article-author-and-date">
          <p className="article-author">by {articleData.article.author}</p>
          <p className="article-date">{formattedDate}</p>
        </div>
      </div>
      <div className="article-body" dangerouslySetInnerHTML={{__html: cleanHtmlBody}}></div>
    </div>
  );
};