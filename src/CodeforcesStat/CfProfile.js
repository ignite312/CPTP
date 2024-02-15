import React, { useState, useEffect } from 'react';
import './CfProfile.css';
import './CfStat.css';

const CodeforcesInfo = ({ userHandle }) => {
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [okProblemIds, setOkProblemIds] = useState(new Set());
  const [userDetails, setUserDetails] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const handle = userHandle || 'Tspectre'; // Use the provided user handle or a default handle
      const submissionsUrl = `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=833714451`;
      const userInfoUrl = `https://codeforces.com/api/user.info?handles=${handle}`;

      try {
        const [submissionsResponse, userInfoResponse] = await Promise.all([
          fetch(submissionsUrl),
          fetch(userInfoUrl),
        ]);

        const [submissionsData, userInfoData] = await Promise.all([
          submissionsResponse.json(),
          userInfoResponse.json(),
        ]);

        if (submissionsData.status === 'OK' && userInfoData.status === 'OK') {
          setCodeforcesData(submissionsData.result);

          const okSubmissions = submissionsData.result.filter(submission => submission.verdict === 'OK');
          const uniqueProblemIds = new Set(okSubmissions.map(submission => submission.problem.contestId + submission.problem.index));
          setOkProblemIds(uniqueProblemIds);

          setUserDetails(userInfoData.result[0]);

          if (userInfoData.result[0].titlePhoto) {
            setProfilePhoto(userInfoData.result[0].titlePhoto);
          }
        } else {
          console.error('Codeforces API request failed.');
        }
      } catch (error) {
        console.error('Error fetching Codeforces data:', error.message);
      }
    };

    fetchData();
  }, [userHandle]);

  const getColorBasedOnRating = (rating) => {
    if (rating >= 2900) {
      return '#FF0000'; // Red for other high ratings
    } else if (rating >= 2600) {
      return '#FF0000';
    } else if (rating >= 2400) {
      return '#FF0000';
    } else if (rating >= 2300) {
      return '#FFA500'; // Orange for International Master
    } else if (rating >= 2200) {
      return '#FFA500';
    } else if (rating >= 1900) {
      return '#EE82EE'; // Violet for Candidate Master
    } else if (rating >= 1600) {
      return '#0000FF'; // Blue for Expert
    } else if (rating >= 1400) {
      return '#00FFFF'; // Cyan for Specialist
    } else if (rating >= 1200) {
      return '#008000'; // Green for Pupil
    } else {
      return '#A9A9A9'; // Gray for Newbie
    }
  };


  return (
    <div className="card">
      <a href={`https://codeforces.com/profile/${userHandle}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div className="image-container">
        {profilePhoto && (
          <img src={profilePhoto} alt="Codeforces Logo" className="logo" />
        )}
      </div>
      </a>
      {codeforcesData && userDetails && (
        <div className="info-container">
          <h2 className="rank-container" >

            <strong style={{ color: getColorBasedOnRating(userDetails.rating) }}>
              {typeof userDetails.rank === 'string' && userDetails.rank.length > 1 ?
                userDetails.rank.charAt(0).toUpperCase() + userDetails.rank.slice(1) :
                userDetails.rating
              }
            </strong><br />
            <a href={`https://codeforces.com/profile/${userHandle}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            {userDetails.rating >= 2900 ? <strong >{userDetails.handle[0]}</strong> : <strong style={{ color: getColorBasedOnRating(userDetails.rating) }}>{userDetails.handle[0]}</strong>}
            <strong style={{ color: getColorBasedOnRating(userDetails.rating) }}>{userDetails.handle.substr(1)}</strong>
            </a>
          </h2>
          <div >
            <span style={{ color: 'black' }}>Accepted Problem: </span>
            <strong>{okProblemIds.size}</strong>
          </div>
          <p>Ratings: <strong style={{ color: getColorBasedOnRating(userDetails.rating) }}>{userDetails.rating}</strong></p>
          <p>Max Ratings: <strong style={{ color: getColorBasedOnRating(userDetails.maxRating) }}>{userDetails.maxRating}</strong>
            <strong style={{ color: getColorBasedOnRating(userDetails.maxRating) }}>
              {typeof userDetails.maxRank === 'string' && userDetails.maxRank.length > 1 ?
                " (" + userDetails.maxRank.charAt(0).toUpperCase() + userDetails.maxRank.slice(1) + ")" :
                " (" + userDetails.maxRating + ")"
              }
            </strong><br /></p>
          <p>Friends: {userDetails.friendOfCount}</p>
        </div>
      )}
    </div>
  );
};

export default CodeforcesInfo;