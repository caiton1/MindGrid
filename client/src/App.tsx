import React, { useCallback, useState } from 'react';
import type { Node } from '@xyflow/react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import Navigation from './components/Navigation';
import ThemeButton from './components/ThemeButton';
import { useTheme } from './stores/ThemeContext';
import NodeProperties from './components/NodeProperties';

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectNode, setSelectedNode] = useState<Node | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const { darkMode } = useTheme();

  // Handle node click
  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setIsMenuOpen(true);
  };

  // Close the properties menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setSelectedNode(null); // Clear the selected node
  };

  return (

    <div className="vh-100 w-100 ">
        <Navigation />
        <ThemeButton />
        {( isMenuOpen &&
        <NodeProperties
          selectedNode={selectNode}
          isOpen={isMenuOpen}
          onClose={closeMenu}
          darkMode={darkMode}
        />
      )}

        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onNodeClick={onNodeClick} // Handle node click
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background
            color={darkMode ? '#636363' : '#c0c0c0'}
            gap={20}
            variant={BackgroundVariant.Dots}
          />
          <MiniMap />
          <Controls
            style={{
              color: '#000000',
            }}
          />
        </ReactFlow>

      </div>
   
    
  );
}