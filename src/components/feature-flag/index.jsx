import LightDarkMode from './../light-dark-mode/index';
import TicTacToe from './../tic-tac-toe/index';
import RandomColor from './../random-color/index';
import Accordion from './../accordion/index';
import TreeView from './../tree-view/index';
import TabTest from './../custom-tabs/tab-test';
import { useContext } from 'react';
import { FeatureFlagsContext } from './context';
import { menus } from './../tree-view/data';

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTacToe />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />,
    },
    {
      key: 'showAccordian',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={menus}/>,
    },
    {
      key: 'showTabs',
      component: <TabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data... Pls wait...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
}
