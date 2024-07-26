import React from "react";

export default function User({ user }) {
  const { avatar_url, login, bio, name, followers, following, public_repos } =
    user;

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user avatar" />
      </div>
      <a
        href={`https://github.com/${login}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name || "Unknown User"}
      </a>
      <i>{login}</i>
      <p>{bio}</p>
      <div>
        <h4>Public Repos: {public_repos}</h4>
        <h4>Followers: {followers}</h4>
        <h4>Following: {following}</h4>
      </div>
    </div>
  );
}
