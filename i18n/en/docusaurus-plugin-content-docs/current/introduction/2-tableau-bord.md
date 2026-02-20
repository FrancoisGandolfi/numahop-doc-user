---
title: Dashboard
sidebar_label: Dashboard
sidebar_position: 2
description: Dashboard configuration
---

import Icon from '@site/src/components/Icon';

# Dashboard <Icon icon={["fa", "chalkboard-user"]} />

The NumaHOP logo located at the top right allows direct access to the **dashboard**.
It shows the logged-in user the **actions to perform** and the **instance data**.

- **Actions to perform** for which the user is authorized: these are automatically displayed based on the controls performed and the workflow steps.
- **Indicators** previously organized by the user, who defines the **widgets** on their own dashboard.

---

## Actions

Actions only appear if they exist. By default, actions are listed indicating the number of documents accessible to the logged-in user and are grouped by workflow step. Clicking on a step banner expands it and displays the relevant items.

---

## Widgets

### Add a Widget

Widgets are customizable for each user, allowing everyone to benefit from the information they deem relevant. They do not affect other users' dashboards.

Customization of dashboard widgets is done using the <Icon icon={["fa", "pen-to-square"]} /> **Edit** button located at the top right of the home screen. Several actions are possible:

- Add a widget with the <Icon icon={["fa", "plus"]} /> icon;
- Save changes with the <Icon icon={["fa", "floppy-disk"]} /> icon;
- Cancel changes with the <Icon icon={["fa", "left-long"]} /> icon.

The widget to be integrated is implemented in the dashboard.

- The <Icon icon={["fa", "arrows-up-down-left-right"]} /> icon allows moving the widget on the grid;
- The <Icon icon={["fa", "x"]} /> icon allows removing a widget from the dashboard.

:::tip
Depending on the user's authorizations in the workflow, some widgets will be more useful than others. For example, "Available disk space" for a project manager, "Control activity" for a quality controller.
:::

---

### Configure a Widget

To specify the data to display, widget configuration is done via the <Icon icon={["fa", "gear"]} /> icon. The modal offers different fields to fill in based on the desired data:

- Rename the widget;
- Select the relevant library (dropdown list);
- Select a project, batch, or train (dropdown list);
- Define the status of the selected item (dropdown list);
- The number of days from which to retrieve data.

---

### Available Widgets

| **Widget**                              | Description                                                                 | Configurations                                                                                                                                                                      | Comments                                                      |
|:----------------------------------------|:----------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|
| **Clock**                              | Real-time display of time and date.                                        | Display format (24h/12h)                                                                                                                                                           | Widget always visible at the top of the interface.             |
| **Project Activity**                   | Latest activities on projects (creation, modification, status).             | Title: Project Name - Library (based on permissions) - Statuses (to display, column hidden if only one status) - Delay: From x days (filter)                                           | Allows quick tracking of active or delayed projects.           |
| **Train Activity**                     | Latest activities on trains (progress, blockages, validations).            | Title: Train Name - Library (based on permissions) - Project (based on permissions) - Statuses (column hidden if only one status) - Delay: From x days (filter)                | Useful for visualizing the progress of delivery trains.        |
| **Delivery Activity**                  | Latest activities on deliveries (in progress, completed, in error).        | Title: Delivery Name - Library (based on permissions) - Project (based on permissions) - Batch (based on permissions) - Statuses (column hidden if only one status) - Delay: From x days | Allows tracking of critical or delayed deliveries.            |
| **Documentary Unit (DU) Activity**     | Latest activities on documentary units.                                   | Title: DU Name - Library (based on permissions) - Project (based on permissions) - Batch (based on permissions) - Statuses (column hidden if only one status) - Delay: From x days | Tracking of DU modifications or validations.                   |
| **DU by Status**                       | Number of documentary units by status.                                    | Title: Widget label - Format: Ring, pie chart, histogram, list - Project (based on permissions) - Batch (based on permissions) - Workflow step (if applicable)                     | Synthetic visualization of DU distribution by status.         |
| **Documentary Units**                  | List of documentary units (filterable).                                   | Title: DU Name or identifier - Project (based on permissions)                                                                                                                       | Allows searching or exporting DUs.                            |
| **Archived/Disseminated DUs**          | List of archived or disseminated DUs, with error filter.                 | Title: DU Name - Type: Archived/Disseminated - In error: Yes/No - Delay: From x days                                                                                                 | Tracking of finalized or failed DUs.                          |
| **Remaining Control Deadline**         | Remaining deadline for delivery control.                                  | Title: Delivery Name - Library (based on permissions) - Project (based on permissions) - Batch (based on permissions) - Delivery (based on permissions)                         | Visual alerts for urgent controls.                            |
| **Project Details**                    | List of control documents for a project.                                  | Title: Project Name - Project (required)                                                                                                                                            | Direct access to documents associated with a project.        |
| **Available Disk Space**               | Disk space used/available by library.                                     | Title: Widget label - Format: Pie chart, histogram, etc. - Library (required)                                                                                                      | Monitoring of storage space.                                  |
| **User Count**                         | Number of users by library.                                               | Title: Widget label - Format: Ring, pie chart, histogram, list - Library (required)                                                                                                 | Usage statistics by library.                                   |
| **Control Activity**                  | Latest controlled documentary units.                                      | Title: Name of the controlled DU - Library (based on permissions) - Project (based on permissions) - Batch (based on permissions) - Document status - From: x days              | Tracking of recent controls and their status.                 |
| **Sampled Deliveries Control**         | Control of sampled deliveries.                                            | Title: Delivery Name - Library (based on permissions) - Project (based on permissions) - Batch (based on permissions) - From: x days                                 | Allows targeting deliveries to be controlled as a priority.   |
