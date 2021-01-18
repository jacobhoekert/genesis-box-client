import { formatDate } from '../../../lib/articles'

export const BlogComments = ({comments}) => {

  return (
    <div className="blog-comments">
      <div className="num-of-comments">{comments.length} comments</div>
      <div className="all-comments-container">
        {
          comments.map((comment) => {
            const formattedDate = formatDate(comment.published_at);
            return (
              <div className="comment-container">
                <p className="comment-body">{comment.body}</p>
                <div className="comment-author-and-date">
                  <p className="comment-author">- {comment.author}</p>
                  <p className="comment-date">{formattedDate}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};