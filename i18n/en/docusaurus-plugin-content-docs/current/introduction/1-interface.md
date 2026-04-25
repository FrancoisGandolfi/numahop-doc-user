---
title: NumaHop Interface
sidebar_label: NumaHop Interface
sidebar_position: 1
description: Overview of the software
---

import Icon from '@site/src/components/Icon';

# NumaHop Interface <Icon icon={["fa", "display"]} />

## Technical Requirements

NumaHop is certified to work on the following web browsers:

- **Google Chrome**, version 50 and above;
- **Mozilla Firefox**, version 47 and above;

:::warning
Operation on **Microsoft Edge** or **Internet Explorer** is not guaranteed due to poor rendering of right-to-left languages on these browsers and lack of support for the _Mirador_ viewer.
:::

## General Application Ergonomics

### Action Buttons

In all interfaces, the various possible actions are associated with icons and tooltips. They are consistent across the platform. Additional feature icons may exist depending on the modules used. These new action buttons are generally located at the top right of the window in interfaces, at the top right of the table header bar, or next to the data they complement.

- <Icon icon={["fa", "square-plus"]} /> **Add**;
- <Icon icon={["fa", "trash"]} /> **Delete**;
- <Icon icon={["fa", "pen-to-square"]} /> **Edit**;
- <Icon icon={["fa", "floppy-disk"]} /> **Save**;
- <Icon icon={["fa", "square-poll-horizontal"]} /> **Details**;
- <Icon icon={["fa", "up-right-from-square"]} /> **Open**;
- <Icon icon={["fa", "eye"]} /> **Check**;
- <Icon icon={["fa", "share"]} /> **Download**;
- <Icon icon={["fa", "bars"]} /> **More actions**;
- <Icon icon={["fa", "filter"]} /> **Filter**;
- <Icon icon={["fa", "arrows-up-down-left-right"]} /> **Move**;
- <Icon icon={["fa", "gear"]} /> **Configure**;
- <Icon icon={["fa", "x"]} /> **Remove**;
- <Icon icon={["fa", "handshake"]} />;

### Application Menus

The side menu provides access to the full labels of menus and submenus. This menu is displayed over the current interface and automatically retracts when a menu is selected to maximize the display of the application screen.

The list of available menus depends on the permissions of the logged-in user.

| Menus / Modules                                          | Description                                                          | _See also_ |
| :------------------------------------------------------- | -------------------------------------------------------------------- | -----------: |
| <Icon icon={["fa", "lines-leaning"]} /> **Documents**             | Management of Document Units, Records, Condition Reports, Imports.   |              |
| <Icon icon={["fa", "magnifying-glass"]} /> **Search**    | Advanced search within the instance.                                 |              |
| <Icon icon={["fa", "user"]} /> **Users**                | Management of Libraries, Profiles, Users.                           |              |
| <Icon icon={["fa", "book"]} /> **Projects**              | Management of Projects, Batches, Trains, Deliveries.                |              |
| <Icon icon={["fa", "square-check"]} /> **Controls**      | Digital document control.                                           |              |
| <Icon icon={["fa", "chart-pie"]} /> **Statistics**       | Statistics.                                                          |              |
| <Icon icon={["fa", "gear"]} /> **Administration**        | Configuration settings.                                              |              |
| <Icon icon={["fa", "circle-question"]} /> **Help**      | _Inactive module_.                                                   |              |

### NumaHop Information

NumaHOP provides an expandable "Information" column on the right side of each interface. This column is the communication area between NumaHOP and the user: all messages issued by the platform will be displayed here.

The management of application messages is designed to immediately and visually alert the user, with messages appearing in a color-coded format based on alert level and positioned differently in the information column.

:::tip Green: Validated action
The message appears at the bottom of the information column and disappears after a few seconds, or after any action performed by the user and recorded by NumaHOP.
:::

:::info Blue: Informative
The message appears at the top of the information column and remains always visible.
:::

:::caution Yellow: Unvalidated and non-blocking action
The message appears at the top of the information column and remains always visible: it indicates a minor error detected.
:::

:::danger Red: Unvalidated and blocking action
The message appears at the top of the information column and remains always visible to inform the user of the problem encountered, preventing the current action from being completed: it indicates a blocking error.
:::
