import React, { useState, useEffect } from "react";
import axios from "axios";

// Define MemberItem component before Member component
const MemberItem = ({ member, score, onDelete }) => {
  const handleDelete = () => {
    const authToken = sessionStorage.getItem("token");
    const confirmed = window.confirm("Are you sure you want to delete this member?");
    if (confirmed) {
      axios.delete(`http://localhost:3000/members/${member.id}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // Handle success, maybe refresh the member list
        onDelete(member.id)
      })
      .catch(error => {
        console.error("Error deleting member:", error);
      });
    }
  };

  return (
    <div className="bg-white p-2 lg:p-8 lg:w-48 rounded-lg drop-shadow-lg flex flex-col items-center">
      <button onClick={handleDelete}>Delete</button> {/* Delete button */}
      {member.avatar ? (
        <img src={member.avatar} className="max-w-10 rounded-full lg:max-w-24" alt="Avatar" />
      ) : (
        <img src={`/src/assets/${member.member_role}.svg`} className="max-w-10 rounded-full lg:max-w-24" alt="Avatar" />
      )}
      <div className="text-ungu1 text-sm lg:text-lg lg:my-3 font-bold">{member.member_role}</div>
      <div className="text-ungu1 text-opacity-80 text-xs lg:text-base font-semibold">{member.name}</div>
      <div className="w-full lg:h-6 bg-neutral-200 dark:bg-neutral-600 rounded-sm">
        <div
          className="bg-primary lg:h-6 text-center text-xs lg:text-base font-bold leading-none text-white rounded-sm"
          style={{ width: `${score}%` }}
        >
          {score}%
        </div>
      </div>
    </div>
  );
};

// Define Member component
const Member = () => {
  const [members, setMembers] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    const authToken = sessionStorage.getItem("token");
    axios
      .get("http://localhost:3000/members", {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        } })
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });

      // Fetch scores
      axios
        .get("http://localhost:3000/score", {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
          } }) // Assuming this is the endpoint for fetching scores
        .then((response) => {
          const scoreMap = {};
          response.data.forEach(score => {
            scoreMap[score.id_member] = score; // Assuming score has an id_member field
          });
          setScores(scoreMap);
        })
        .catch((error) => {
          console.error("Error fetching scores:", error);
        });
    }, []);

  if (members.length === 0) {
    return null;
  }

  const handleDeleteMember = (deletedMemberId) => {
    // Remove the deleted member from the local state
    setMembers(prevMembers => prevMembers.filter(member => member.id !== deletedMemberId));
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-12">
      {members.map((member, index) => (
        <MemberItem key={index} member={member} score={scores[member.id]} onDelete={handleDeleteMember} />
      ))}
    </div>
  );
};

export default Member;
