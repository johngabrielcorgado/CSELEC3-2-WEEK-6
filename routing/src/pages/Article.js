import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Article.css'; // Import a new CSS file for styling

export default function Article({ articles }) {
  const { urlId } = useParams();
  const navigate = useNavigate();
  const article = articles.find(({ id }) => id === urlId);

  if (!article) {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <div className="article-container">
      {!article && <p>No records found!</p>}
      {article && (
        <div key={article.id} className="article-content">
          <h2>{article.title}</h2>
          <p className="author">By {article.author}</p>
          <p className="body">{article.body}</p>
          <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
        </div>
      )}
    </div>
  );
}