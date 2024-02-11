import React, { useState, useEffect } from "react";

const MemberItem = ({ member }) => {
  return (
    <div className="bg-white p-2 lg:p-8 w-20 h-28 lg:w-48 lg:h-64 rounded-lg drop-shadow-lg flex flex-col items-center">
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
          style={{ width: `${member.score}%` }}
        >
          {member.score}%
        </div>
      </div>
    </div>
  );
};

const Member = ({ members }) => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    setMembersData(members);
  }, [members]);

  if (membersData.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-12">
      {membersData.map((member, index) => (
        <MemberItem key={index} member={member} />
      ))}
    </div>
  );
};

export default Member;
