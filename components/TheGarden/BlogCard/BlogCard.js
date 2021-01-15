import Link from "next/link";

export const BlogCard = props => {
  return (
    <Link href={props.linkUrl}>
      <div className="blog-card">
        <img
          className="blog-image"
          src={props.image}
          alt={props.alt}
        />
        <div className="blog-text">
          <h4 className="blog-title">{props.title}</h4>
          <div className="blog-author-and-date">
            <p className="blog-author">by {props.author}</p>
            <p className="blog-date">{props.date}</p>
          </div>
          <p>{props.summary}</p>
        </div>
      </div>
    </Link>
  );
};