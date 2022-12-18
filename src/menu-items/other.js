// assets
import { IconBrandChrome, IconHelp, IconBoxModel } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'my-ideas',
            title: 'My Ideas',
            type: 'item',
            url: '/my-ideas',
            icon: icons.IconBoxModel,
            breadcrumbs: false
        }
    ]
};

export default other;
