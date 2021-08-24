import React from 'react';
import GitHubButton from 'react-github-btn';
import { HeaderElement } from './styled';

export default function Header() {
  return (
    <HeaderElement>
      <div className="left">
        <div className="logo">
          <h1>
            dis
            <span>J</span>
            ockey
          </h1>
          <h2>proof of concept</h2>
        </div>
        <h2 className="description">
          one-finger keyboard for people with disabilities
        </h2>
      </div>
      <div className="right">
        <GitHubButton
          href="https://github.com/sulyagin/disjockey/fork"
          data-size="large"
          aria-label="Fork sulyagin/disjockey on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </HeaderElement>
  );
}
