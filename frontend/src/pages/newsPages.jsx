import React from 'react';
import './newsPages.css';

const NewsPage = () => {
  // Datos de ejemplo para artículos de noticias
  const newsArticles = [
    {
      id: 1,
      title: 'Eco-friendly fashion continues to gain momentum globally',
      summary: 'Eco-friendly fashion continues to gain momentum globally, with initiatives that seek to reduce the environmental impact of the textile industry and promote sustainable practices. Below are some of the most outstanding developments in this area:',
      date: 'April 15, 2025',
      image: '/images/news/eco-fashion.jpg',
      category: 'Sustainability'
    },
    {
      id: 2,
      title: 'Circular fashion projects and social support',
      summary: 'In Ávila, Spain, the "Volveré 2.0" project, led by the organization Fundabem, has opened its second store dedicated to the sale of second-hand clothing, footwear and other items. This initiative not only contributes to the reduction of textile waste, but also allocates its profits to the labor integration of people with disabilities, having already created four jobs and with expansion plans.',
      date: 'April 10, 2025',
      image: '/images/news/circular-fashion.jpg',
      category: 'Social Impact'
    },
    {
      id: 3,
      title: 'Events that promote sustainable fashion',
      summary: 'The Moritz Feed Dog festival, in its ninth edition held in Barcelona from March 19 to 23, 2025, has stood out for its focus on conscious fashion. The event included the screening of twenty documentaries related to then',
      date: 'March 25, 2025',
      image: '/images/news/fashion-events.jpg',
      category: 'Events'
    },
    {
      id: 4,
      title: 'NaturaDeluxe launches new organic cotton collection',
      summary: 'We are excited to announce our new organic cotton collection, featuring timeless designs made with 100% GOTS-certified organic cotton. This collection represents our ongoing commitment to reducing environmental impact without compromising on style or quality.',
      date: 'March 18, 2025',
      image: '/images/news/organic-collection.jpg',
      category: 'Product Launch'
    },
    {
      id: 5,
      title: 'Sustainable fashion brands unite for climate action',
      summary: 'Ten leading sustainable fashion brands, including NaturaDeluxe, have joined forces to create the Fashion Climate Fund, an initiative aimed at reducing carbon emissions across the supply chain. The fund will invest in renewable energy projects, innovative materials, and efficiency improvements.',
      date: 'March 5, 2025',
      image: '/images/news/climate-action.jpg',
      category: 'Industry News'
    },
    {
      id: 6,
      title: 'The rise of rental fashion and its environmental benefits',
      summary: 'Fashion rental services are gaining popularity as consumers seek alternatives to fast fashion. These services allow people to wear high-quality, designer items without the environmental cost of producing new garments. Studies show that extending the lifespan of clothing by just nine months reduces carbon, water, and waste footprints by 20-30%.',
      date: 'February 28, 2025',
      image: '/images/news/rental-fashion.jpg',
      category: 'Trends'
    }
  ];

  return (
    <div className="news-page-container">
      <div className="news-header">
        <h1 className="news-title">The latest in news and updates</h1>
      </div>

      <div className="news-content">
        <div className="news-main">
          <h2 className="section-title">News</h2>
          
          <div className="news-articles">
            {newsArticles.map(article => (
              <article key={article.id} className="news-article">
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-summary">{article.summary}</p>
                  <a href={`/news/${article.id}`} className="read-more-link">Read more</a>
                </div>
                {article.image && (
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                )}
              </article>
            ))}
          </div>
          
          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-btn">8</button>
            <button className="pagination-btn next">Next &rarr;</button>
          </div>
        </div>
        
        <aside className="news-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Categories</h3>
            <ul className="category-list">
              <li><a href="#" className="category-link active">All</a></li>
              <li><a href="#" className="category-link">Sustainability</a></li>
              <li><a href="#" className="category-link">Product Launches</a></li>
              <li><a href="#" className="category-link">Industry News</a></li>
              <li><a href="#" className="category-link">Events</a></li>
              <li><a href="#" className="category-link">Social Impact</a></li>
              <li><a href="#" className="category-link">Trends</a></li>
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">Archives</h3>
            <ul className="archive-list">
              <li><a href="#" className="archive-link">April 2025</a></li>
              <li><a href="#" className="archive-link">March 2025</a></li>
              <li><a href="#" className="archive-link">February 2025</a></li>
              <li><a href="#" className="archive-link">January 2025</a></li>
              <li><a href="#" className="archive-link">December 2024</a></li>
              <li><a href="#" className="archive-link">November 2024</a></li>
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3 className="sidebar-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsPage;