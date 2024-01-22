import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTagSolveCounts = () => {
  const [tagCounts, setTagCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const handle = 'acchaa';
        const result = 'OK';
        const response = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}&result=${result}`);
        const submissions = response.data.result;

        const uniqueProblems = new Set();
        const uniqueTagsByProblem = new Map();
        const newTagCounts = {};

        submissions.forEach((submission) => {
          const problemId = submission.problem?.contestId + submission.problem?.index;

          if (!uniqueProblems.has(problemId)) {
            uniqueProblems.add(problemId);

            const tags = submission.problem?.tags || [];

            // Only count tags for problems with verdict "OK"
            if (submission.verdict === result) {
              // Ensure unique tags for each problem
              const uniqueTags = new Set(tags);

              uniqueTags.forEach((tag) => {
                newTagCounts[tag] = (newTagCounts[tag] || 0) + 1;
              });

              // Store unique tags for each problem in the map
              uniqueTagsByProblem.set(problemId, uniqueTags);
            }
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

  return (
    <div>
      <h2>User Tag Solve Counts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.entries(tagCounts).map(([tag, solveCount]) => (
            <li key={tag}>
              {tag}: {solveCount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserTagSolveCounts;
