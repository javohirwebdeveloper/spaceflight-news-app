// ArticleDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css'; // Stil faylini import qilamiz

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container article-detail">
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      {/* Other article details */}
    </div>
  );
};

export default ArticleDetail;
