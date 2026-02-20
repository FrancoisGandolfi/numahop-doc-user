---
title: Project Workflow
sidebar_label: Project Workflow
sidebar_position: 4
description: Functional examples of typical projects
---

import Icon from '@site/src/components/Icon';

# Project Workflow <Icon icon={["fa", "diagram-project"]} />

:::warning
The detailed configuration steps below can be performed in any order, provided that the workflow has not been started at the batch level. Starting a workflow enforces strict adherence to the successive steps it defines.
:::

---

## Standard Project

### Preliminary Settings

- **Workflow**
  - Create the necessary workflow groups
  - Assign the relevant users

- **Automatic Controls**
  - Create an automatic control configuration
  - Set up the controls to be performed, acceptable error rates, and sampling mode

### Project and Batch
- Create a project

- Create a digitization batch
  - Batch type: "Physical"
  - Requested format
  - Expected compression type
  - If necessary (depending on the activated automatic controls): compression rate, resolution, color profile

- Attach the batch to the digitization project (either at the time of batch creation or afterward if the project is created after the batch)

- If necessary, redefine at the batch level the components inherited from the project and required for its proper execution (depending on needs):
  - Service provider
  - Workflow
  - FTP configuration
  - Automatic control configuration
  - Internet Archive collection
  - PAC classification plan
  - Omeka collection
  - Omeka item type

### Documentary Units
- Import records to create documentary units. If the project and batch exist at the time of import, it is possible to import them directly into the relevant batch.
- Or create the records and documentary units.
- Associate the documentary units with the batch if this was not done during import.

---

## Workflow Steps

| Step                                      | Type               | Description                                                                                                                                                                                                                     | Validation                                                                                     |
|--------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Form Generation**                       | 🔵 Optional               | To be defined.                                                                                                                                                                                                                     |                                                                                                |
| **Validation of Condition Reports**       | 🔵 Optional               | Creation of the initial condition report (outside the workflow) and validation of this report.                                                                                                                               | <Icon icon={["fa", "square-check"]} /> at the top right of the condition report.                |
| **Validation of Form and Condition Report by Provider** | 🔵 Optional | Creation of a condition report by the provider upon receipt of the document and validation of this report.                                                                                                               | <Icon icon={["fa", "square-check"]} /> at the top right of the condition report.                |
| **Condition Report Before Digitization**  | 🔵 Optional               | Creation of a condition report by the provider before digitizing the document and validation of this report.                                                                                                               | <Icon icon={["fa", "square-check"]} /> at the top right of the condition report.                |
| **Waiting for Digitization**              | ⚪ Transitional              | Step not managed by NumaHOP.                                                                                                                                                                                                 |                                                                                                |
| **Condition Report After Digitization**   | 🔵 Optional               | Creation of a condition report by the provider following the digitization of the document and validation of this report.                                                                                                   | <Icon icon={["fa", "square-check"]} /> at the top right of the condition report.                |
| **Delivery of Digitized Documents**       | 🔴 Mandatory              | Delivery of digitized documents to the platform, following the deposit of files on the FTP.                                                                                                                               | Creation of a delivery and launch of the delivery.                                        |
| **Automatic Controls in Progress**        | ⚪ Automatic              | Execution of automatic controls and generation of derived files. Retrieval of the table of contents and OCR if configured.                                                                                     |                                                                                                |
| **Quality Control in Progress**           | 🔴 Mandatory              | Visual inspection of digitized documents.                                                                                                                                                                                      | Completion of quality control.                                                              |
| **Pre-rejection of Document**             | 🔵 Optional               | If the step is activated, the first rejection of the document will generate a pre-rejection to be confirmed in the "Rejection Validation" step.                                                                                   | First rejection of the document during visual inspection.                                     |
| **Pre-validation of Document**            | 🔵 Optional               | If the step is activated, the first validation of the document will generate a pre-validation to be confirmed in the "Document Validation" step.                                                                             | First validation of the document during visual inspection.                                       |
| **Rejection Validation**                  | 🔵 Optional               | Validation of rejection if the "Pre-rejection of Document" step is activated.                                                                                                                                                         | Final rejection of the document.                                                                  |
| **Document Validation**                   | 🔴 Mandatory              | Validation or rejection of the document during quality control. In case of rejection, automatic sending of the control report to the provider, then end of the workflow for re-delivery.                                      | Validation or rejection of the document during quality control.                              |
| **Validation of Document Record**         | 🔴 Mandatory              | Validation of the documentary unit record.                                                                                                                                                                                       | <Icon icon={["fa", "square-check"]} /> at the top right of the record.                        |
| **Control Report for Provider**           | ⚪ Automatic              | Sending the control report to the provider.                                                                                                                                                                                   |                                                                                                |
| **Document Archiving**                    | 🔵 Optional               | Sending the validated document to CINES for archiving. Daily automated task. In case of error, the user can send it manually.                                                                                     |                                                                                                |
| **Document Dissemination**                | 🔵 Optional               | Dissemination of the validated document to Internet Archive. Daily automated task. In case of error, the user can send it manually.                                                                                     |                                                                                                |

---

## Legacy Project Takeover

### Workflow Steps

| Step                                      | Type               | Description                                                                                                                                                                                                                     | Validation                                                                                     |
|--------------------------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Quality Control in Progress**           | 🔴 Mandatory              | Visual inspection of digitized documents.                                                                                                                                                                                      | Completion of quality control.                                                              |
| **Pre-rejection of Document**             | 🔵 Optional               | If the step is activated, the first rejection of the document will generate a pre-rejection to be confirmed in the "Rejection Validation" step.                                                                                   | First rejection of the document during visual inspection.                                     |
| **Pre-validation of Document**            | 🔵 Optional               | If the step is activated, the first validation of the document will generate a pre-validation to be confirmed in the "Document Validation" step.                                                                             | First validation of the document during visual inspection.                                       |
| **Rejection Validation**                  | 🔵 Optional               | Validation of rejection if the "Pre-rejection of Document" step is activated. Automatic sending of the control report to the provider, then end of the workflow for re-delivery.                                                         | Final rejection of the document.                                                                  |
| **Document Validation**                   | 🔴 Mandatory              | Validation or rejection of the document during quality control. In case of rejection, automatic sending of the control report to the provider, then end of the workflow for re-delivery.                                      | Validation or rejection of the document during quality control.                              |
| **Validation of Document Record**         | 🔴 Mandatory              | Validation of the documentary unit record.                                                                                                                                                                                       | <Icon icon={["fa", "square-check"]} /> at the top right of the record.                        |
| **Control Report for Provider**           | ⚪ Automatic              | Sending the control report to the provider.                                                                                                                                                                                   |                                                                                                |
| **Document Archiving**                    | 🔵 Optional               | Sending the validated document to CINES for archiving. Daily automated task. In case of error, the user can send it manually.                                                                                     |                                                                                                |
| **Document Dissemination**                | 🔵 Optional               | Dissemination of the validated document to Internet Archive. Daily automated task. In case of error, the user can send it manually.                                                                                     |                                                                                                |
