import 'gatsby-cypress/commands';
import '@testing-library/cypress/add-commands';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
	failureThreshold: 3,
	failureThresholdType: 'percent'
});
