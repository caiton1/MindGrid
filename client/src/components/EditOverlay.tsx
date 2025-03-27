import { Node } from '@xyflow/react';
import React from 'react';

interface EditOverlayProps {
    selectedNode: Node | null;
    editMode: boolean;
    darkMode: boolean;
    className?: string;
}

const EditOverlay: React.FC<EditOverlayProps> = ({selectedNode, editMode, darkMode, className}) => {
    return (
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-primary p-3 rounded-2" tabIndex={0}>
                <h4 id="scrollspyHeading1">Selected Node</h4>
                <p>{selectedNode ? selectedNode.id : "No node selected"}</p>
                <h4 id="scrollspyHeading2">Theme</h4>
                <p>{darkMode ? "Dark" : "Light"}</p>
                <h4 id="scrollspyHeading3">3</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">4</h4>
                <p>...</p>
        </div>
    )
};

export default EditOverlay;