import { createControlAccess } from "better-auth/plugins/access";

const statement = { 
    users:     ["create", "view", "update", "delete"],
    campaign:  ["create", "view", "update", "delete"], 
    creatives: ["create", "approve", "view", "update", "delete"],
    billing:   ["create", "view", "update", "delete"]
} as const; 

const accessControl = createControlAccess(statement);

export const admin = accessControl.newRole({
    users:     ["create", "view", "update", "delete"],
    campaign:  ["create", "view", "update", "delete"],
    creatives: ["view", "approve" ],
    billing:   ["view"]
});

export const membership = accessControl.newRole({
    campaign:  ["view"],
    creatives: ["view"]
});

export const client = accessControl.newRole({
    campaign:  ["view"],
    creatives: ["view"]
});

export const designer = accessControl.newRole({
    creatives: ["create", "view", "approve", "update", "delete"],
    campaign:  ["view"],
});

export const billing = accessControl.newRole({
    users:    ["view"],
    billing:  ["create", "view", "update", "delete"]
});
