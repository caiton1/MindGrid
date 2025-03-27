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
            position: 'fixed', 
            top: '25%',
            right: '1%',
            width: '300px', 
            height: 'auto', 
            backgroundColor: darkMode ? '#333333' : '#ffffff', 
            color: darkMode ? '#ffffff' : '#000000',
            zIndex: 1050, 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            overflowY: 'auto',
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