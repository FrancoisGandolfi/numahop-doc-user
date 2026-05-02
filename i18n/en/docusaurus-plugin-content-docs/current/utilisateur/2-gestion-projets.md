---
title: Project management
sidebar_label: Project management
sidebar_position: 1
description: Project management
---

import Icon from '@site/src/components/Icon';

# <Icon icon={["fa", "diagram-project"]} /> Project Management

You can create batches associated with projects and link physical documents to them via the menu &gt; Projects.

A digitization project corresponds to a set of physical documents (organized into batches and trains) that can be digitized by multiple service providers within a single continuous process (with a start date and an end date).

A project must be carried by a main library but can be run in cooperation with other libraries. It is defined by a name, a description, a start date, and an expected end date. It is linked to a main library leading the project.

The project status is "Created" by default and is active.
The FTP configuration defaults to that of the main library but can be modified.
The status is updated automatically or manually based on project progress.

It is possible to edit ( ), view the detail ( ), or perform other actions ( ) on a project. You can also put a project on hold — it will be suspended and no deliveries can be made. The project can resume by clicking Resume project in the project actions. Cancelling a project will cancel all workflow steps for the documentary units in the project, and batches belonging to the project will move to the Cancelled status.

The detail of a project allows you to view:

# Create a Project

A digitization project corresponds to a set of physical documents (organized into batches and trains) that can be digitized by multiple service providers within a single continuous process (with a start date and an end date).

A project must be carried by a main library but can be run in cooperation with other libraries. It is defined by a name, a description, a start date, and an expected end date. It is linked to a main library leading the project.

The project is the highest-level entity in NumaHOP. The hierarchy is as follows: Project &gt; Batch &gt; Documentary Unit.

To create a project, first navigate to the "Projects" page via the right-hand menu.

Click the "+" icon to create a new project.

Fill in the fields of the "Project" form.

For exports, choose according to your institution's requirements: CINES export, Internet Archive, Omeka. For each, specify the classification scheme and/or collection into which the documentary units will be deposited.

Note: Configurations must have been created beforehand in the Administration module.

Click "Save" when done.

The name of the new project will appear in the left column.

## Multi-Library Projects

### Configuring a Multi-Library Project

**Prerequisites**

The ADMINISTRATION-LIB permission (Administration: inter-library visibility) provides access to all data across all libraries on the server. By default, this permission is granted to the "general administrator" profile.

Each library authorized to run independent projects must have a dedicated disk space: the creation of a new library must therefore be requested from the server administrator.

Each partner library in a project must have an administrator with the ADMINISTRATION-LIB permission.

**How multi-library projects work**

To create a project, refer to the "Create a Project" documentation.

When a partner library is added to the project, all users of that partner library will be able to work on the project according to their profiles and workflow groups. In multi-library projects, the administrator of the partner library must add their library's users to the workflow groups of the project's main library.

When contributors from a partner library are added to a project, only those users will have access to the project in addition to the users of the project's main library. Other users can neither see nor modify any elements of projects for which they are neither partners nor contributors.

Users of the partner library or contributing users added to a multi-library project can:

Note: Files are delivered to the disk space dedicated to the library configured for the batch's quality control.
