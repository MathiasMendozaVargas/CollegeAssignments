import React, { useState, useEffect } from 'react';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

const Search = ({ value, onChange, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">{children}</button>
    </form>
  );
};

const Table = ({ list, onDismiss }) => (
  <div className="table">
    {list.map(item => (
      <div key={item.objectID} className="table-row">
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%' }}>{item.num_comments}</span>
        <span style={{ width: '10%' }}>{item.points}</span>
        <span style={{ width: '10%' }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);

const Button = ({ onClick, className = '', children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

const Lab = () => {
  const [result, setResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState('React');
  const [page, setPage] = useState(0);

  const setSearchTopStories = result => {
    const { hits, page } = result;
    const oldHits = page !== 0 ? result.hits : [];

    const updatedHits = [...oldHits, ...hits];
    setResult({ hits: updatedHits, page });
  };

  const fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => setSearchTopStories(result))
      .catch(err => err);
  };

  useEffect(() => {
    fetchSearchTopStories(searchTerm);
  }, [searchTerm]);

  const onSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const onSearchSubmit = event => {
    fetchSearchTopStories(searchTerm);
    event.preventDefault();
  };

  const onDismiss = id => {
    const updatedHits = result.hits.filter(item => item.objectID !== id);
    setResult({ ...result, hits: updatedHits });
  };

  return (
    <div className="page">
      <div className="interactions">
        <Search
          value={searchTerm}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        >
          Search
        </Search>
      </div>
      <div className="articles">
        {result && <Table list={result.hits} onDismiss={onDismiss} />}
      </div>
      <footer>
        <Button onClick={() => fetchSearchTopStories(searchTerm, page + 1)}>
          More
        </Button>
      </footer>
    </div>
  );
};

export default Lab;