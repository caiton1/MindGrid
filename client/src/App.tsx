import { useCallback } from 'react';
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
import { ThemeProvider } from './stores/ThemeContext';
import ThemeButton from './components/ThemeButton';
import { useTheme } from './stores/ThemeContext';

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const { darkMode } = useTheme();

  return (
      <div className="d-flex flex-column vh-100">
        <Navigation />
        <ThemeButton />
        <div className="flex-grow-1 reactflow-container">
          <ReactFlow 
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            edges={edges}
            edgeTypes={edgeTypes}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Background 
            color={darkMode ? "#636363" : "#c0c0c0"} 
            gap={10} 
            variant={BackgroundVariant.Dots} 
          />
            
            <MiniMap />
            <Controls 
              style={{
                color: '#000000'
              }}
            />
          </ReactFlow>
      </div>
    </div>
  );
}
