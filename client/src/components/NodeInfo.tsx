import React from 'react';
import { Node } from '@xyflow/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface NodeInfoProps {
  selectedNode: Node | null;
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  className?: string;
}

const NodeInfo: React.FC<NodeInfoProps> = ({
  selectedNode,
  isOpen,
  onClose,
  darkMode,
  className,
}) => {
    if (!isOpen) return null; 
    return (
        <div
          className={`node-properties-menu ${className || ''}`}
          
        >
          <Card style={{
            position: 'fixed', // Fixed position to stay on the right side of the screen
            top: '12%',
            right: '1%',
            width: '300px', // Fixed width for the menu
            height: 'auto', // Full height of the viewport
            backgroundColor: darkMode ? '#333333' : '#ffffff', // Dynamic background color
            color: darkMode ? '#ffffff' : '#000000', // Dynamic text color
            zIndex: 1050, // Ensure it appears above ReactFlow
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Add a shadow for better visibility
            overflowY: 'auto', // Allow scrolling if content overflows
            padding: '20px',
          }}>
            <Card.Body>
              <Card.Title>Node Info</Card.Title>
              {selectedNode ? (
                <>
                  <Card.Text>
                    <strong>ID:</strong> {selectedNode.id}
                  </Card.Text>
                  <Card.Text>
                    <strong>Label:</strong> {String(selectedNode.data?.label || 'N/A')}
                  </Card.Text>
                </>
              ) : (
                <Card.Text>No node selected</Card.Text>
              )}
              <Button variant="primary" onClick={onClose}>
                Close
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    };

export default NodeInfo;