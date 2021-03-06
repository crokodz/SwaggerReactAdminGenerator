/**
 * Generated {{ title }}Edit.js code. Edit at own risk.
 * When regenerated the changes will be lost.
**/
import React from 'react';
import { {% if resource.methods.remove %}DeleteButton, {% endif %}SaveButton, Toolbar } from 'react-admin';


const {{ resource.title }}EditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton
            label="Save"
            submitOnEnter={true}
        />
        <SaveButton
            label="Save and Continue Editing"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
        {% if resource.methods.remove %}
        <DeleteButton />
        {% endif %}
    </Toolbar>
);

export default {{ resource.title }}EditToolbar;
/** End of Generated Code **/