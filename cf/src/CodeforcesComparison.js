// UserTagSolveCounts.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserTagSolveCounts.css'; // Import your CSS file for styles

const UserTagSolveCounts = () => {
  const [handle, setHandle] = useState('');
  const [tagCounts, setTagCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tagProblems, setTagProblems] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const result = 'OK';
      const response = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}&result=${result}`);
      const submissions = response.data.result;

      const uniqueProblems = new Set();
      const newTagCounts = {};

      submissions.forEach((submission) => {
        const problemId = submission.problem?.contestId + submission.problem?.index;

        if (!uniqueProblems.has(problemId) && submission.verdict === result) {
          uniqueProblems.add(problemId);

          const tags = submission.problem?.tags || [];
          const uniqueTags = Array.from(new Set(tags)); // Ensure unique tags

          uniqueTags.forEach((tag) => {
            newTagCounts[tag] = (newTagCounts[tag] || new Set()).add({
              id: problemId,
              name: submission.problem.name,
              link: `https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`
            });
          });
        }
      });

      setTagCounts(newTagCounts);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);

    // Get all problems associated with the selected tag
    const problems = Array.from(tagCounts[tag] || []);
    setTagProblems(problems);
  };

  return (
    <div className="user-tag-solve-counts">
      <div className="left-column">
        <h2>User Tag Solve Counts</h2>
        <div className="input-section">
          <label>
            Enter Codeforces Handle:
            <input type="text" value={handle} onChange={(e) => setHandle(e.target.value)} />
          </label>
          <div className="button-container">
            <button onClick={fetchData} disabled={!handle || loading}>
              Fetch Data
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="tag-list">
            {Object.entries(tagCounts).map(([tag, solveCount]) => (
              <li key={tag}>
                <button className="tag-button" onClick={() => handleTagClick(tag)}>
                  {tag}: {solveCount.size}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="right-column">
        {selectedTag && (
          <div>
            <h3>Problems associated with {selectedTag}</h3>
            <ul className="problem-list">
              {tagProblems.map((problem, index) => (
                <li key={index}>
                  <a href={problem.link} target="_blank" rel="noopener noreferrer">
                    {problem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTagSolveCounts;
