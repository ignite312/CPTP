import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTagSolveCounts = () => {
  const [tagCounts, setTagCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tagProblems, setTagProblems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const handle = 'acchaa';
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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);

    // Get all problems associated with the selected tag
    const problems = Array.from(tagCounts[tag] || []);
    setTagProblems(problems);
  };

  return (
    <div>
      <h2>User Tag Solve Counts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {Object.entries(tagCounts).map(([tag, solveCount]) => (
              <li key={tag}>
                <button onClick={() => handleTagClick(tag)}>
                  {tag}: {solveCount.size}
                </button>
              </li>
            ))}
          </ul>

          {selectedTag && (
            <div>
              <h3>Problems associated with {selectedTag}</h3>
              <ul>
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
      )}
    </div>
  );
};

export default UserTagSolveCounts;
