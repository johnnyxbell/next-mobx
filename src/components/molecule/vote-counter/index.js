import React from "react";
import Counter from "@/components/atoms/counter";
import UpVote from "@/components/atoms/upvote";
import DownVote from "@/components/atoms/downvote";

const VoteCounter = () => {
  return (
    <div>
      <Counter />
      <UpVote />
      <DownVote />
    </div>
  );
};

export default VoteCounter;
