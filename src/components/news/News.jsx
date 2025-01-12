import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styles from './News.module.scss';
import defaultImage from '../../../src/assets/anews.jpg';

const NewsFetch = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=civil%20engineering&apiKey=900485ef383c4b39b8d3c604d489eb7b"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className={styles.spinnerContainer}>
        <ClipLoader color="#3498db" size={50} /> 
        <p>Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  return (
    <div className={styles.main}>
      <h1>News and Happenings</h1>
      <div className={styles.cont}>
        {articles.slice(0, 20).map((article, index) => (
          <div key={index} className={styles.card}>
            <img src={article.urlToImage ? article.urlToImage : defaultImage} alt="pix" className={styles.img} />
            <p className={styles.date}>{formatDate(article.publishedAt)}</p>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.des}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFetch;
