import React, { useState, useEffect } from 'react';
import Tab from './Tab';

export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState();
  useEffect(() => {
    if (children && children.length) {
      const { label } = children[0].props;
      setActiveTab(label);
    }
  }, [children]);

  const onClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((tab) => {
          const { label } = tab.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTab}
            />
          );
        })}
      </ol>

      <div className="tab-content">
        {children.map((tab) => {
          const { label, children } = tab.props;
          if (label !== activeTab) return undefined;
          return children;
        })}
      </div>
    </div>
  );
}
