import { PieceAuth, createPiece } from '@activepieces/pieces-framework';
import { getClickupTaskComments } from './lib/actions/comments/get-task-comments';
import { createClickupFolderlessList } from './lib/actions/lists/create-folderless-list';
import { createClickupTask } from './lib/actions/tasks/create-task';
import { getClickupList } from './lib/actions/lists/get-list';
import { getClickupSpace } from './lib/actions/spaces/get-space';
import { getClickupSpaces } from './lib/actions/spaces/get-spaces';
import { createClickupTaskComment } from './lib/actions/comments/create-task-comment';
import { createClickupSubtask } from './lib/actions/tasks/create-subtask';
import { clickupTriggers as triggers } from './lib/triggers';
import { createClickupTaskFromTemplate } from './lib/actions/tasks/create-task-from-template';
import { updateClickupTask } from './lib/actions/tasks/update-task';
import { getClickupTask } from './lib/actions/tasks/get-task';
import { deleteClickupTask } from './lib/actions/tasks/delete-task';
import { getClickupAccessibleCustomFields } from './lib/actions/custom-fields/get-accessible-custom-fields';
import { setClickupCustomFieldValue } from './lib/actions/custom-fields/set-custom-fields-value';
import { filterClickupWorkspaceTasks } from './lib/actions/tasks/get-tasks';

export const clickupAuth = PieceAuth.OAuth2({
  description: '',
  authUrl: 'https://app.clickup.com/api',
  tokenUrl: 'https://app.clickup.com/api/v2/oauth/token',
  required: true,
  scope: [],
});

export const clickup = createPiece({
  displayName: 'ClickUp',
  minimumSupportedRelease: '0.5.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/clickup.png',
  auth: clickupAuth,
  actions: [
    createClickupTask,
    createClickupTaskFromTemplate,
    createClickupFolderlessList,
    getClickupList,
    getClickupTask,
    filterClickupWorkspaceTasks,
    getClickupSpace,
    getClickupSpaces,
    getClickupTaskComments,
    createClickupTaskComment,
    createClickupSubtask,
    updateClickupTask,
    deleteClickupTask,
    getClickupAccessibleCustomFields,
    setClickupCustomFieldValue
  ],
  authors: ['abuaboud', 'ShayPunter', 'kanarelo'],
  triggers,
});
