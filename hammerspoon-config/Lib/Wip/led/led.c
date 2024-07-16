//
// terminal needs to be granted access to Input Devices
//
// compile:
// gcc -Wall -o led led.c -framework IOKit -framework CoreFoundation
//

#include <stdio.h>
#include <stdlib.h>
#include <getopt.h>
#include <IOKit/hid/IOHIDManager.h>
#include <CoreFoundation/CoreFoundation.h>

// Function to print usage
void usage(void)
{
  fprintf(stderr, 'Usage: keyboard_leds [OPTION]\n');
  fprintf(stderr, '  -c[1|0], --capslock[=1|=0] get or set (on=1, off=0) caps lock LED\n');
  fprintf(stderr, '  -h,      --help            display this help and exit\n');
  fprintf(stderr, '  -n[1|0], --numlock[=1|=0]  get or set (on=1, off=0) num lock LED\n');
  exit(1); // Standard exit code
}

// Function to set the specified LED state
void setLED(UInt32 usage, int state)
{
  // Create HID Manager
  IOHIDManagerRef manager = IOHIDManagerCreate(kCFAllocatorDefault, kIOHIDOptionsTypeNone);
  if (CFGetTypeID(manager) != IOHIDManagerGetTypeID())
  {
    fprintf(stderr, 'Failed to create HID Manager.\n');
    return;
  }

  // Set up device matching criteria for keyboards
  CFMutableDictionaryRef matchingDict = CFDictionaryCreateMutable(kCFAllocatorDefault, 0, &kCFTypeDictionaryKeyCallBacks, &kCFTypeDictionaryValueCallBacks);
  CFDictionarySetValue(matchingDict, CFSTR(kIOHIDDeviceUsagePageKey), CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &(uint32_t){kHIDPage_GenericDesktop}));
  CFDictionarySetValue(matchingDict, CFSTR(kIOHIDDeviceUsageKey), CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &(uint32_t){kHIDUsage_GD_Keyboard}));

  // Apply matching criteria to HID Manager
  IOHIDManagerSetDeviceMatching(manager, matchingDict);
  CFRelease(matchingDict);

  // Open HID Manager
  IOHIDManagerOpen(manager, kIOHIDOptionsTypeNone);

  // Get all matching devices
  CFSetRef device_set = IOHIDManagerCopyDevices(manager);
  if (!device_set)
  {
    fprintf(stderr, 'No devices found\n');
    CFRelease(manager);
    return;
  }

  // Iterate through devices
  CFIndex num_devices = CFSetGetCount(device_set);
  IOHIDDeviceRef *devices = malloc(num_devices * sizeof(IOHIDDeviceRef));
  CFSetGetValues(device_set, (const void **)devices);

  for (CFIndex i = 0; i < num_devices; i++)
  {
    IOHIDDeviceRef device = devices[i];
    // Filter elements specifically for LEDs
    CFDictionaryRef elementMatchingDict = CFDictionaryCreate(kCFAllocatorDefault,
                                                             (const void *[2]){CFSTR(kIOHIDElementUsagePageKey), CFSTR(kIOHIDElementUsageKey)},
                                                             (const void *[2]){CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &(uint32_t){kHIDPage_LEDs}), CFNumberCreate(kCFAllocatorDefault, kCFNumberIntType, &usage)},
                                                             2,
                                                             &kCFTypeDictionaryKeyCallBacks, &kCFTypeDictionaryValueCallBacks);

    CFArrayRef elements = IOHIDDeviceCopyMatchingElements(device, elementMatchingDict, kIOHIDOptionsTypeNone);
    CFRelease(elementMatchingDict);

    if (!elements)
      continue;

    // Iterate through relevant elements
    for (CFIndex j = 0; j < CFArrayGetCount(elements); j++)
    {
      IOHIDElementRef element = (IOHIDElementRef)CFArrayGetValueAtIndex(elements, j);
      IOHIDValueRef val = IOHIDValueCreateWithIntegerValue(kCFAllocatorDefault, element, 0, state);
      if (val)
      {
        IOHIDDeviceSetValue(device, element, val);
        CFRelease(val);
      }
    }
    CFRelease(elements);
  }

  // Clean up
  free(devices);
  CFRelease(device_set);
  CFRelease(manager);
}

// Main function
int main(int argc, char **argv)
{
  int c;
  int capslock = -1;
  int numlock = -1;

  // Command line options
  static struct option long_options[] = {
      {'capslock', optional_argument, 0, 'c'},
      {'help', no_argument, 0, 'h'},
      {'numlock', optional_argument, 0, 'n'},
      {0, 0, 0, 0}};

  // Parse command line arguments
  while ((c = getopt_long(argc, argv, 'c::hn::', long_options, NULL)) != -1)
  {
    switch (c)
    {
    case 'c':
      if (optarg)
        capslock = atoi(optarg);
      else
        capslock = 1;
      break;
    case 'h':
      usage();
      exit(0);
    case 'n':
      if (optarg)
        numlock = atoi(optarg);
      else
        numlock = 1;
      break;
    default:
      usage();
      break;
    }
  }

  // Set LED state based on command line arguments
  if (capslock != -1)
  {
    setLED(kHIDUsage_LED_CapsLock, capslock);
  }
  else if (numlock != -1)
  {
    setLED(kHIDUsage_LED_NumLock, numlock);
  }
  else
  {
    usage();
  }

  return 0;
}
