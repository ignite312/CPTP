import React, { useState, useEffect } from 'react';
import './ContestList.css';
import CFlogo from './logo/cf-logo.svg';

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        const data = await response.json();
        const upcomingContests = data.result.filter(contest => contest.phase === 'BEFORE');
        setContests(upcomingContests);
      } catch (error) {
        console.error('Error fetching contests:', error);
      }
    };

    fetchContests();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContests(prevContests =>
        prevContests.map(contest => ({
          ...contest,
          countdown: calculateCountdown(contest.startTimeSeconds),
        }))
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateCountdown = startTimeSeconds => {
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const timeRemaining = startTimeSeconds - nowInSeconds;

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>Upcoming Codeforces Contests</h1>
      <div>
        {contests.map(contest => (
          <div key={contest.id} className="card">
            <img src={CFlogo} alt="Codeforces Logo" className="cf-logo" />
            <div className="contest-details">
              <h2>{contest.name}</h2>
              <p>Start Time: {new Date(contest.startTimeSeconds * 1000).toLocaleString()}</p>
              <p>Duration: {contest.durationSeconds / 3600} hours</p>
            </div>
            <p className="countdown">{contest.countdown}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestList;
