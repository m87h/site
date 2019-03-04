#include <stdio.h>
#include <switch.h>

int main(int argc, char* argv[]) {
	SwkbdConfig kbd;
	Result rc;

	consoleInit(NULL);
	rc = swkbdCreate(&kbd, 0);

	if (R_SUCCEEDED(rc)) {
		swkbdConfigMakePresetDefault(&kbd);

		char input[16] = {0};
		rc = swkbdShow(&kbd, input, sizeof(input));

		if (R_SUCCEEDED(rc)) {
			printf("Got input: %s\n", input);
		} else {
			fprintf(stderr, "swkbdShow() error: %u\n", rc);
		}

		swkbdClose(&kbd);
	} else {
		fprintf(stderr, "swkbdCreate() error: %u\n", rc);
	}

	printf("Press + to exit.\n");

	while (appletMainLoop()) {
		hidScanInput();
		u64 keyDown = hidKeysDown(CONTROLLER_P1_AUTO);

		if (keyDown & KEY_PLUS) {
			break;
		}

		consoleUpdate(NULL);
	}

	consoleExit(NULL);
}
