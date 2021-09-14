import { formatDate } from '../../../lib/articles'

export const BlogArticle = ({articleData}) => {
  const formattedDate = formatDate(articleData.published_at);
  const cleanHtmlBody = articleData.body_html.replace(/(<[p|br\/]>\s<\/p>)/ig, '<p><\/p>');
  const cleanerHtmlBody = cleanHtmlBody.replace(/(font-weight: 400)/ig, 'font-weight: 300');
  return (
    <div className="article">
      <div className="article-title-container">
        <h4 className="article-title">{articleData.title}</h4>
        <div className="article-author-and-date">
          <p className="article-author">by {articleData.author}</p>
          <p className="article-date">{formattedDate}</p>
        </div>
      </div>
      <div className="article-body" dangerouslySetInnerHTML={{__html: cleanerHtmlBody}}></div>
    </div>
  );
};