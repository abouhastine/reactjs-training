import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { taskPropType as task } from '../../../prop-types';
import { countScheduledTasks, countFinishedTasks, countCancelledTasks } from '../../../common/utils/taskUtils';
import styles from './TasksProgressBar.module.css';

export default function TasksProgressBar(props) {
  function calculatePercentage(count, totalCount) {
    return totalCount !== 0 ? (count / totalCount) * 100 : 0;
  }

  const { tasks } = props;
  const scheduledTasksCount = countScheduledTasks(tasks);
  const finishedTasksCount = countFinishedTasks(tasks);
  const cancelledTasksCount = countCancelledTasks(tasks);
  const totalTasksCount = tasks.length;
  const scheduledTasksPercent = calculatePercentage(scheduledTasksCount, totalTasksCount);
  const finishedTasksPercent = calculatePercentage(finishedTasksCount, totalTasksCount);
  const cancelledTasksPercent = calculatePercentage(cancelledTasksCount, totalTasksCount);
  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        <Tooltip title={`${scheduledTasksPercent}% scheduled tasks`}>
          <div className={styles.scheduledTasksProgressBar} style={{ width: `${scheduledTasksPercent}%` }} />
        </Tooltip>
        <Tooltip title={`${finishedTasksPercent}% finished tasks`}>
          <div className={styles.finishedTasksProgressBar} style={{ width: `${finishedTasksPercent}%` }} />
        </Tooltip>
        <Tooltip title={`${cancelledTasksPercent}% cancelled tasks`}>
          <div className={styles.cancelledTasksProgressBar} style={{ width: `${cancelledTasksPercent}%` }} />
        </Tooltip>
      </div>
    </React.Fragment>
  );
}

TasksProgressBar.propTypes = {
  tasks: PropTypes.arrayOf(task),
};
